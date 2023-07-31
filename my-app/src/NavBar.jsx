import './input.css'
export default function NavBar() {
    return (
        <>
           <div className="flex items-stretch justify-center pt-4 space-x-20">
                    <div className="self-center">
                        <text className="font-mono text-[#222222] text-2xl md: font-bold">Speech</text>
                        <text className="font-mono text-[#4169E1] text-2xl md: font-bold">Rank</text>
                        <img className="inline reletived pl-1 pb-1 pr-24" src="/smale.png"></img>
                    </div>
                    <div className="self-center space-x-4">
                        <text className="font-mono text-[#222222] text-base">Home</text>
                        <text className="font-mono text-[#222222] text-base">About</text>
                        <text className="font-mono text-[#222222] text-base">Evaluation</text>
                        <text className="font-mono text-[#222222] text-base">Audio</text>
                        <text className="font-mono text-[#222222] text-base pr-24">Blog</text>
                    </div>
                    <div className="self-center">
                        <button className="font-mono text-[#FFFFFF] text-base font-semibold bg-[#4169E1] rounded-md text-center h-10 w-32">Sign out</button>
                        <img className="inline reletived pl-4" src="/avatar.png"></img>
                    </div>    
           </div>
        </>
    )
  }