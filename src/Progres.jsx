import { useState } from "react"
export default function Progres(){
    const [selectedChapter, setSelectedChapter] = useState(1)
    const chapter1 = () => {
        setSelectedChapter(1)
    }
    const chapter2 = () => {
        setSelectedChapter(2)
    }
    const chapter3 = () => {
        setSelectedChapter(3)
    }

    return(
        <>
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
                                            <button className="w-32 h-8 text-center font-mono font-semibold text-white bg-[#4169E1] rounded-xl" onClick={chapter3}>Opinion</button>
                                            </>
                                        )
                                        }
                                    </div>
                </div>
                <div className="flex justify-center items-center pt-40">
                    <div className="flex items-center justify-center space-x-4 bg-white rounded-md drop-shadow-lg w-5/12 max-h-80 py-4">
                        <div className="radial-progress  text-[#4169E1] font-bold text-3xl border-4 border-white bg-white" style={{"--value":89}}>89</div>
                        <p className="rounded-md text-lg font-sans text-[#676767] w-9/12 bg-[#E8FFE8] p-0 py-3 pl-4 pr-4">The manager generally demonstrates friendly and respectful behavior towards the client.</p>
                    </div>
                </div>
        </>
    )
}