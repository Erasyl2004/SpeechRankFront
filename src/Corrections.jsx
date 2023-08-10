import React from "react"

export default function Corrections(props) {
    return(
        <>
            <div className="flex justify-center flex-wrap pt-12 text-left drop-shadow-lg">
                <div className="flex items-center w-7/12 bg-[#FDE9E9] border-8 border-[#FDE9E9] rounded-t-xl">
                    <img src="/false.png"/>
                    <p className="pl-6 font-sans text-[#676767] text-base">{props.mistake}</p>
                </div>
                <div className="flex items-center w-7/12 bg-[#E8FFE8] border-8 border-[#E8FFE8] rounded-b-xl">
                    <img src="/true.png"/>
                    <p className="pl-6 font-sans text-[#676767] text-base">{props.fix}</p>
                </div>
            </div>
        </>
    )
}