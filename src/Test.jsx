import React, { useState } from "react"
import { AnimatePresence, delay, motion } from "framer-motion"
import MessageLeft from "./MessageLeft"
import MessageRight from "./MessageRight"
import axios from 'axios'
import { useRef } from "react"
export default function Test(props){
    const[isAplly,setIsAplly] = useState(true)
    const[isLoading,setIsLoading] = useState(false)
    const[message,setMessage] = useState("")
    const[messageIndex,setMessageIndex] = useState(null)
    const[salam, setSalam] = useState(props.speechbek)
    const changeMessage = (id) => {
        if (!isLoading){
          salam.forEach((item, index) => index == id ?(('speaker0' in item) ? (setMessage(item.speaker0)):(setMessage(item.speaker1))):console.log(''))
          setMessageIndex(id)
          setIsAplly(false)
        }
    }
    const changeMessageSubmit = () => {
        const salamUpdate = [...salam]
        if('speaker0' in salamUpdate[messageIndex])
        {
            salamUpdate[messageIndex].speaker0 = message
        }
        else
        {
            salamUpdate[messageIndex].speaker1 = message
        }
        setSalam(salamUpdate)
        setIsAplly(true)
    }
    const loadMessages = async () => {
      if (!isLoading)
      {
        setIsLoading(true)
        let text = ""
        salam.forEach((item) => (('speaker0' in item) ? (text += "speaker0: " + item.speaker0 + "\n"):(text += "speaker1: " + item.speaker1 + "\n")))
        try{
          const payload_ust = {
            id_of_speech: String(props.idOfSpeech),
            speech: text
          };
          console.log(payload_ust);
          const update_speech_to_text = await axios.post('http://localhost:8000/audio/update_speech_to_text',payload_ust);
          console.log('update speech is ready');
          props.startAnalysis()
        }
        catch(error){
          console.error(error);
        }
      }
    } 
    return(
    <>
        <div className="h-screen flex justify-center flex-wrap">
            <div className="pt-8 flex justify-center items-center w-full h-[5rem]">
                <p className="text-4xl font-bold font-mono text-[#4169E1]">Do yo want to change something ?</p>
            </div>
            <div className="h-5/6 w-3/5">
                {salam.map((item, index) => (
                    <motion.div key={index} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay:((index + 4.5)* 0.2)}}>
                         {('speaker0' in item) ? (
                            <MessageLeft speaker={item.speaker0} id={index} change={changeMessage}></MessageLeft>
                         ):
                         (
                            <MessageRight speaker={item.speaker1} id={index} change={changeMessage}></MessageRight>
                         )}
                    </motion.div>                  
                ))}
                <div className="h-40"></div>
                <div className="flex justify-center w-3/5 fixed bottom-14 items-center">
                    <AnimatePresence>
                        {(!isAplly) && (
                                <motion.div className="space-x-6" initial={{opacity: 0, y: 1000}} animate={{opacity: 1, y:0}} exit={{opacity: 0.5, y: 1000}} transition={{delay: 0.6, duration: 0.6}}>
                                    <input
                                        className="relative m-0 border border-[#D7D8DA] rounded-lg bg-white p-0 py-3 pl-4 pr-4 text-black drop-shadow-lg w-[30rem]"
                                        placeholder="Type a something..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        />
                                    <button className="w-32 bg-[#2BB739] font-mono font-semibold text-white rounded-lg p-0 py-3 pl-4 pr-4 drop-shadow-lg" onClick={changeMessageSubmit}>change</button>
                                </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        <div className="absolute">
                            {(isAplly) && (
                                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{delay:1.4}} className="space-x-6">
                                    <button className="w-34 bg-[#FF0000] font-mono font-semibold text-white rounded-lg p-0 py-3 pl-4 pr-4 drop-shadow-lg">&#10006; cancel </button>
                                    <button className="w-34 bg-[#2BB739] font-mono font-semibold text-white rounded-lg p-0 py-3 pl-4 pr-4 drop-shadow-lg" onClick={loadMessages}>{!isLoading ?(<>&#10004; apply</>):(<>loading <motion.img className="inline relative" src="/Cursor.png" animate={{rotate: 360}} transition={{duration: 2, repeat: Infinity, repeatDelay:1,}}></motion.img></>)}</button>
                                </motion.div>
                            )}
                        </div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    </>
    )
}