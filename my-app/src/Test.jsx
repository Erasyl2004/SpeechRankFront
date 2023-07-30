import React, { useState } from "react"
export default function Test(){
    const [message, setMessage] = useState(true)
    const handleChangeMessage = () => {
        setMessage(!message)
    }
    return(
        <div className="pt-12 text-center">  
            {!message &&(
                <p className="text-mono bg-[#4169E1] text-white rounded-md w-1/5" onClick={handleChangeMessage}>Hello, how are you ?</p>
            )}
            {message &&(
                <input type="text" className="text-mono bg-[#4169E1] text-white rounded-md w-1/5" onClick={handleChangeMessage} value="Hello, how are you ?"></input>
            )}
        </div>
    )
}