import React, { useState } from "react"
import axios from 'axios'
import { AnimatePresence, motion } from "framer-motion"
import Corrections from "./Corrections"
import Test from "./Test"
export default function UploadFile () {
    const [reglamentAnalysis, setReglamentAnalysis] = useState(null)
    const [technicalAnalysis, setTechnicalAnalysis] = useState(null)
    const [isAnalyze,setIsAnalyze] = useState(false)
    const [speechId,setSpeechId] = useState(null)
    const [swither,setSwither] = useState(1)
    const [speech,setSpeech] = useState(null)
    const [selectedChapter, setSelectedChapter] = useState(1)
    const [selectedFile, setSelectedFile] = useState(false)
    const handleChange = (event) => {
        setSelectedFile(event.target.files[0])
    }
    const chapter1 = () => {
        setSelectedChapter(1)
    }
    const chapter2 = () => {
        setSelectedChapter(2)
    }
    const chapter3 = () => {
        setSelectedChapter(3)
    }
    const connectToBackendSpeech = async () => {
        setIsAnalyze(true)
        console.log('start to connect.......')
        try {
          //speech to text
          const formData = new FormData();
          formData.append('file', selectedFile)
          const id = await axios.post('http://localhost:8000/audio/speech_to_text', formData);
          setSpeechId(id)
          console.log('speech to text is ready');   
          console.log(id.data);
          
        //   //get speech to text
          setSpeechId(id.data)
          const payload_gst = {
            id_of_speech: String(id.data)
          };
          console.log(payload_gst);
          const get_speech_to_text = await axios.post('http://localhost:8000/audio/get_speech_to_text',payload_gst);
          console.log('geteira is ready');
          setSpeech(get_speech_to_text.data);
          console.log(get_speech_to_text.data); 
          setSwither(2) 
        } catch (error) {
          console.error(error);
        }
    }
    const connectToBackendAnalysis = async () => {
        console.log("starting analysis!!!")
         try{
             //analysis by reglament
          const payload_rg = {
            id_of_speech: String(speechId)
          };
          console.log(payload_rg);
          const analysis_by_reglament = await axios.post('http://localhost:8000/audio/reglament_analysis',payload_rg);
          console.log('analysis by reglament is ready');
          setReglamentAnalysis(analysis_by_reglament.data.reglament_analysis); 
          console.log(analysis_by_reglament.data.reglament_analysis);
          console.log(analysis_by_reglament.data.reglament_analysis.corrections);

          //technical_analysis
          const payload_th = {
            id_of_speech: String(speechId)
          };
          console.log(payload_th);
          const technical_analysis = await axios.post('http://localhost:8000/audio/technical_analysis',payload_th);
          console.log('technical_analysis is ready'); 
          setTechnicalAnalysis(technical_analysis.data.technical_analysis);
          console.log(technical_analysis.data.technical_analysis);
          setSwither(3)
        // setReglamentAnalysis("er")
        // setTechnicalAnalysis("er")
         }
         catch(error){
            console.error(error)
         }
    }

    return(
        <>
                <AnimatePresence>
                    {(swither == 1) && (
                        <motion.div className="flex justify-center pt-24" initial={{y: 1000 , opacity: 0,}} animate={{y: 0, opacity: 1,}} transition={{duration: 0.4, delay: 0.5,}} exit={{opacity: 0, y: 1000}}>
                        <div className="pt-4 w-[31rem] h-[38rem] bg-white rounded-md drop-shadow-lg">
                                <div className="flex justify-center font-mono font-bold text-2xl pt-2">Upload</div>
                                <div className="flex justify-center pt-2">
                                    <div className="flex justify-center items-center pt-4 w-[27rem] h-[26rem] bg-[#F8F8FF] border-2 rounded-md border-dashed border-[#384EB7]">
                                        <div className="flex justify-center flex-wrap">
                                            <img className="pb-8" src="/Upload_icon.png"></img>
                                            <div className="w-full text-center">
                                                {!selectedFile && (
                                                <span>
                                                    <p className="font-mono font-bold text-[#0F0F0F] text-lg">Drag & drop files or </p>
                                                    <label className="font-mono text-[#4169E1] text-lg underline">Browse<input id="browse" type="file" className="hidden" onChange={handleChange}></input></label>
                                                    <p className="font-mono text-[#676767] text-xs "><br/>Supported formates: MP3, MP4</p>
                                                </span>
                                                )}
                                                {selectedFile && (
                                                    <span>
                                                        <p className="font-mono font-bold text-[#0F0F0F] text-lg">File uploaded!!! </p>
                                                        <p className="font-mono text-[#676767] text-xs "><br/>File name: {selectedFile.name}</p>
                                                    </span> 
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center pt-8">
                                {!isAnalyze ?(
                                    <button className="font-mono text-[#FFFFFF] text-base font-semibold bg-[#4169E1] rounded text-center w-[27rem] h-[3rem]" onClick={connectToBackendSpeech}>ANALYZE</button>
                                ):
                                (
                                    <div className="flex items-center space-x-4">
                                        <p className="font-mono text-[#4169E1]">loading</p>
                                        <span className="loading loading-spinner text-[#4169E1]"></span> 
                                    </div> 
                                )}
                                </div>
                        </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {(swither == 2) && (
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay:1}} exit={{opacity: 0}}>
                            <Test speechbek={speech} idOfSpeech={speechId} startAnalysis={connectToBackendAnalysis}></Test>
                        </motion.div>
                    )}
                </AnimatePresence>
                {(reglamentAnalysis && technicalAnalysis) && (
                    <>
                            <motion.div initial={{y: -1000 , opacity: 0,}} animate={{y: 0, opacity: 1,}} transition={{duration: 0.4, delay: 2,}}>
                                <div className="drop-shadow-lg flex justify-center pt-8">
                                    <div className="w-[27rem] h-14 rounded-xl bg-[#F7F9FB] drop-shadow-lg flex items-center justify-center text-center">
                                       {(selectedChapter == 1) && (
                                        <>
                                            <button className="w-32 h-8 bg-[#4169E1] font-mono font-semibold text-white rounded-xl">Reglament</button>
                                            <button className="w-32 h-8 font-mono font-semibold text-[#4169E1]" onClick={chapter2}>Technical</button>
                                            <button className="w-32 h-8 font-mono font-semibold text-[#4169E1]" onClick={chapter3}>Opinion</button>
                                        </>
                                        )}
                                        {(selectedChapter == 2) && (
                                            <>
                                            <button className="w-32 h-8 font-mono font-semibold text-[#4169E1]" onClick={chapter1}>Reglament</button>
                                            <button className="w-32 h-8 text-center font-mono font-semibold text-white bg-[#4169E1] rounded-xl">Technical</button>
                                            <button className="w-32 h-8 font-mono font-semibold text-[#4169E1]" onClick={chapter3}>Opinion</button>
                                            </>
                                        )
                                        }
                                        {(selectedChapter == 3) && (
                                            <>
                                            <button className="w-32 h-8 font-mono font-semibold text-[#4169E1]" onClick={chapter1}>Reglament</button>
                                            <button className="w-32 h-8 font-mono font-semibold text-[#4169E1]" onClick={chapter2}>Technical</button>
                                            <button className="w-32 h-8 text-center font-mono font-semibold text-white bg-[#4169E1] rounded-xl">Opinion</button>
                                            </>
                                        )
                                        }
                                    </div>
                                </div>
                            </motion.div>
                            {(selectedChapter != 3) && (
                                <motion.div initial={{y: -1000 , opacity: 0,}} animate={{y: 0, opacity: 1,}} transition={{duration: 0.4, delay: 1.4,}}>
                                    <div className="flex justify-center pt-8 items-center space-x-4">
                                        <div className="rounded-full w-[4rem] h-[4rem] border-4 border-[#FF0000] flex items-center justify-center">
                                            <p  className="text-[#FF0000] font-sans font-bold text-4xl">
                                                {(selectedChapter == 1) && (<>{reglamentAnalysis.corrections.length}</>)} {(selectedChapter == 2) && (<>{technicalAnalysis.response.length}</>)}
                                            </p>
                                        </div>
                                        <p className="font-mono text-[#FF0000] font-bold text-xl">mistakes</p>
                                    </div>
                                </motion.div>
                            )}
                            <motion.div initial={{opacity: 0,}} animate={{opacity: 1,}} transition={{delay: 1.5,}}>
                                {(selectedChapter == 1) && (
                                        reglamentAnalysis.corrections.map((item, index) => (
                                            <motion.div key={index} initial={{x:800, opacity: 0,}} animate={{x:0, opacity: 1,}} transition={{delay: ((index + 1) * 0.2),}}>
                                                <Corrections mistake={item.mistake} fix={item.fix}/>
                                            </motion.div>
                                        ))
                                )}
                                {(selectedChapter == 2) &&(
                                    technicalAnalysis.response.map((item, index) => (
                                            <motion.div  key={index} initial={{x: -800,opacity: 0,}} animate={{x:0, opacity: 1,}} transition={{delay: ((index +1) * 0.2),}}>
                                                <Corrections mistake={item.mistake} fix={item.fix}/>
                                            </motion.div>
                                    ))
                                )}
                                {(selectedChapter == 3) &&(
                                    <motion.div className="flex justify-center items-center pt-20" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>
                                        <div className="flex items-center justify-center space-x-4 bg-white rounded-md drop-shadow-lg w-5/12 max-h-96 py-4">
                                            <div className="radial-progress  text-[#4169E1] font-bold text-3xl border-4 border-white bg-white" style={{"--value":78}}>{reglamentAnalysis.grade}</div>
                                            <p className="rounded-md text-lg font-sans text-[#676767] w-9/12 bg-[#E8FFE8] p-0 py-3 pl-4 pr-4">{reglamentAnalysis.opinion}</p>
                                        </div>
                                    </motion.div>
                                )}
                                <div className="h-[10rem]"></div>
                            </motion.div>
                    </>
                        
                    )
                }
        </>
    )
}