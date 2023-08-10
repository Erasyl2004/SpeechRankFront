import { AnimatePresence, delay, motion } from "framer-motion"
import React, { useState } from "react"
import { useEffect } from "react";
export default function MessageRight (props) {
    const [isVisible, setIsVisible] = useState(false);
    const handleInteraction = () => {
        setIsVisible(true);

        setTimeout(() => {
            setIsVisible(false);
          }, 2000);
      };
    return (
        <>
            <div className="flex justify-end pb-8 items-center space-x-8">
                <motion.img initial={{opacity: 0}} animate={{opacity: isVisible ? 1 : 0}} onClick={() => props.change(props.id)} src="/edit2.png" className="inline relative -scale-x-100"/>
                <motion.p whileHover={handleInteraction} className="drop-shadow-lg bg-[#F3F6FF] text-lg text-black pl-2 pr-2 py-1.5 font-sans rounded max-w-[30rem]">{props.speaker}</motion.p>
                <img src="/messageicon.png" className="" />
            </div> 
        </>
    )
}