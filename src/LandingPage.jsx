import React, { useState } from "react"
import NavBar from "./NavBar"
import { AnimatePresence, motion } from "framer-motion"
export default function LandingPage (){
    const [isReveiws, setIsReveiws] = useState(true)

    function TryNowButton() {
     window.location.assign('/upload')
    }
    const handleReveiws = () => {
      setIsReveiws(!isReveiws)
    }
    const CardAnimation = {
      hidden: {
          x: -1000,
          opacity: 0,
      },
      visible: custom=> ({
          x: 0,
          opacity: 1,
          transition: {duration: 0.6, delay: (custom * 0.2)}
      }),
    }
    const CardAnimation2 = {
     hidden: {
         opacity: 0,
     },
     visible: custom=> ({
         x: 0,
         opacity: 1,
         transition: {delay: (custom * 0.2)}
     }),
   }
   const CardAnimation3 = {
     hidden: {
         x: 1000,
         opacity: 0,
     },
     visible: custom=> ({
         x: 0,
         opacity: 1,
         transition: {duration: 0.6, delay: (custom * 0.2)}
     }),
   }
    return(
       <>
          <span class="space-y-24 hidden lg:inline">
               <NavBar></NavBar>
               <div className="flex justify-center">
                    <div className="flex flex-wrap space-y-8 justify-center"> 
                         <motion.section className="flex flex-wrap space-y-8 justify-center" initial={{opacity: 0,}} whileInView={{opacity: 1,}} viewport={{amount:0.2,}}>
                                   <div className="space-y-8 pl-16">
                                        <motion.p className="font-mono whitespace-normal text-6xl md: font-bold" initial={{x: -1000 , opacity: 0,}} animate={{x: 0, opacity: 1,}} transition={{duration: 0.6, delay: 0.6,}}>
                                             <span className="text-[#222222]">Get an estimate<br/>of </span>
                                             <span className="text-[#4169E1]">your call </span>
                                             <span className="text-[#222222]">with<br/>a client.</span>
                                        </motion.p>
                                        <motion.p className="text-[#666666] text-xl" initial={{opacity: 0,}} animate={{opacity: 1,}} transition={{delay: 1.4,}}>This application will help you to make technical<br/>examination and analysis according to the rules<br/>of your calls.</motion.p>
                                        <motion.button className="font-mono font-medium text-[#4169E1] text-lg text-center border rounded border-[#4169E1] w-36 h-12" onClick={TryNowButton} initial={{opacity: 0,}} animate={{opacity: 1,}} transition={{delay: 1.6,}}>Try Now</motion.button>
                                   </div>
                                   <motion.div className="pt-24" initial={{x: 1000 , opacity: 0,}} animate={{x: 0, opacity: 1,}} transition={{duration: 0.6, delay: 0.8,}}>
                                        <img className="" src="/fon7.png"></img>
                                   </motion.div>
                         </motion.section>
                         
                              <motion.section className="pt-16 space-y-12" initial="hidden" whileInView="visible" viewport={{amount:1,}}>
                                   <motion.p className="text-center text-[#4169E1] text-mono text-4xl font-bold" variants={CardAnimation2} custom={1}>What our customers say? </motion.p>
                                   <motion.p className="text-[#666666] text-center text-xl font-mono" variants={CardAnimation2} custom={2}>Our application is already used by more than 1000 organizations,<br/>including nfactorial school, here's what they wrote about us</motion.p>
                                   <motion.section  variants={CardAnimation3} custom={2}>
                                             {!isReveiws && (
                                                  <motion.div className="bg-white drop-shadow-lg rounded-2xl w-[60rem] h-[18rem] flex flex-wrap justify-center items-center" initial={{x: 1000 , opacity: 0,}} animate={{x: 0, opacity: 1,}} transition={{duration: 0.6, delay: 0.5,}}>
                                                       <div className="flex justify-between w-full items-center">
                                                            <p className="pl-14 text-black text-xl font-mono font-bold">Yerbolat Mukan</p>
                                                            <p className=" pr-8 text-6xl font-mono font-bold text-[#4169E1]">""</p>
                                                       </div>
                                                       <div className="flex justify-center items-center">
                                                            <img src="/avatar1.jpg" className="inline relative rounded-full w-[12rem] h-[12rem]"/>
                                                            <p className="text-[#666666] text-left text-xl font-mono pl-8">Это очень крутое приложение, на самом деле у него <br /> красивый дизайн просто я не говорю это Ерасылу <br /> потому что ученики не должны превосходит учителей !!!</p>
                                                       </div>
                                                  </motion.div>
                                             )}
                                             {isReveiws && ( 
                                                  <motion.div className="bg-white drop-shadow-lg rounded-2xl w-[60rem] h-[18rem] flex flex-wrap justify-center items-center"  initial={{x: 1000 , opacity: 0,}} animate={{x: 0, opacity: 1,}} transition={{duration: 0.6, delay: 0.3,}}>
                                                       <div className="flex justify-between w-full items-center">
                                                            <p className="pl-20 text-black text-xl font-mono font-bold">Nurali Rakhay</p>
                                                            <p className=" pr-8 text-6xl font-mono font-bold text-[#4169E1]">""</p>
                                                       </div>
                                                       <div className="flex justify-center items-center">
                                                            <img src="/nurali.png" className="inline relative rounded-full w-[12rem] h-[12rem]"/>
                                                            <p className="text-[#666666] text-left text-xl font-mono pl-8">Мне все понравилось заработал милион долларов<br />благодаря этому сайту, Ерасыл большой молодец,<br/>мой любимый сайт и я всех булю потому что я бублик</p>
                                                       </div>
                                                  </motion.div>
                                             )}
                                   </motion.section>
                                   <div className="w-[60rem] flex justify-end text-center items-center">
                                        <motion.button className="rounded-full bg-[#4169E1] w-[3rem] h-[3rem] font-mono font-bold text-5xl text-white" onClick={handleReveiws} variants={CardAnimation2} custom={3}>&#8594;</motion.button> 
                                   </div>
                              </motion.section>


                         <motion.section className="pt-14" initial="hidden" whileInView="visible" viewport={{amount:1,}} exit={{delay: 2,}} >
                              <motion.div custom={1} variants={CardAnimation2} className="bg-[#F7F9FB] drop-shadow-lg rounded-2xl w-[69rem] h-[20rem] flex justify-center flex-wrap">
                                   <motion.div custom={2} variants={CardAnimation2} className="w-full font-mono text-2xl md: font-bold text-left flex justify-center">
                                        <div className="pt-4">
                                             <p className="text-[#222222]">What technologies do<br/></p>
                                             <p className="text-[#4169E1]">we use for your calls?</p>
                                        </div>
                                   </motion.div>
                              <div className="space-x-8 flex justify-center flex-wrap">
                                        <motion.div custom={3} variants={CardAnimation} className="font-mono bg-[#FFFFFF] w-[21rem] h-[10rem] rounded-2xl drop-shadow-lg md: font-bold">
                                                  <div className="flex justify-center pt-2 items-center space-x-4">
                                                       <div className="rounded-full w-[2.5rem] h-[2.5rem] bg-[#4169E1] flex items-center justify-center">
                                                            <p  className="text-white font-mono font-bold text-3xl">1</p>
                                                       </div>
                                                       <p className="text-[#222222] text-center text-xl ">Voice recognition</p>
                                                  </div>
                                                  <p className="text-[#666666] pt-4 text-center">With the help of AI, we determine<br/>people by the timbre of the voice</p>
                                        </motion.div>
                                             <motion.div custom={2} variants={CardAnimation} className="font-mono bg-[#FFFFFF] w-[21rem] h-[10rem] rounded-2xl drop-shadow-lg md: font-bold">
                                                  <div className="flex justify-center pt-2 items-center space-x-4">
                                                       <div className="rounded-full w-[2.5rem] h-[2.5rem] bg-[#4169E1] flex items-center justify-center">
                                                            <p  className="text-white font-mono font-bold text-3xl">2</p>
                                                       </div>
                                                       <p className="text-[#222222] text-center text-xl ">Reglament</p>
                                                  </div>
                                                  <p className="text-[#666666] pt-4 text-center">We use the regulations of advanced organizations to evaluate the work of a manager</p>
                                             </motion.div>
                                             <motion.div custom={1} variants={CardAnimation} className="font-mono bg-[#FFFFFF] w-[21rem] h-[10rem] rounded-2xl drop-shadow-lg md: font-bold">
                                                  <div className="flex justify-center pt-2 items-center space-x-4">
                                                       <div className="rounded-full w-[2.5rem] h-[2.5rem] bg-[#4169E1] flex items-center justify-center">
                                                            <p  className="text-white font-mono font-bold text-3xl">3</p>
                                                       </div>
                                                       <p className="text-[#222222] text-center text-xl ">VectorDB</p>
                                                  </div>
                                                  <p className="text-[#666666] pt-4 text-center">We use a vector database to identify technical errors</p>
                                             </motion.div>
                                   </div>
                              </motion.div>
                         </motion.section>
                         <div className="w-full h-24 bg-white"></div>
                         <footer className="footer p-10 text-base-content bg-[#F7F9FB]">
                              <div>
                                   <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                                   <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
                              </div> 
                              <div>
                                   <span className="footer-title">Services</span> 
                                   <a className="link link-hover">Branding</a> 
                                   <a className="link link-hover">Design</a> 
                                   <a className="link link-hover">Marketing</a> 
                                   <a className="link link-hover">Advertisement</a>
                              </div> 
                              <div>
                                   <span className="footer-title">Company</span> 
                                   <a className="link link-hover">About us</a> 
                                   <a className="link link-hover">Contact</a> 
                                   <a className="link link-hover">Jobs</a> 
                                   <a className="link link-hover">Press kit</a>
                              </div> 
                              <div>
                                   <span className="footer-title">Legal</span> 
                                   <a className="link link-hover">Terms of use</a> 
                                   <a className="link link-hover">Privacy policy</a> 
                                   <a className="link link-hover">Cookie policy</a>
                              </div>
                         </footer>
                         
                    </div>
               </div>
          </span>
          <div className="flex items-center pt-6 justify-center lg:hidden">
                    <div className="">
                        <text className="font-mono text-[#222222] text-xl md: font-bold">Speech</text>
                        <text className="font-mono text-[#4169E1] text-xl md: font-bold">Rank</text>
                        <img className="inline reletived pl-1 pb-1 pr-24" src="/smale.png"></img>
                    </div>
                    <div className="">
                        <button className="font-mono text-[#FFFFFF] font-semibold bg-[#4169E1] rounded-md text-center h-8 w-24">Sign up</button>
                    </div>  
          </div>
       </>
    )
}