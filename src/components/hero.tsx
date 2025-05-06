import Button from "./button";
import Input from "./input";

export default function Hero(){
    return <div className="w-full pt-40 py-20 flex justify-center items-center">
        
        <div className="max-w-full md:max-w-6xl flex flex-col gap-8 text-center items-center">
          <div className="flex flex-col gap-7 max-w-3xl">
          <span className="text-3xl md:text-6xl font-bold">Zero-Effort<br/>
            AI Bookmark Manager</span>
            <p className="text-xs md:text-xl text-gray-700">Clipmate is an AI-first Second Brain for your Bookmarks, Screenshots, and all your other saved stuff. 
            Turn information overload into your superpower.</p>
          </div>
            <div className="flex gap-4">
                <Input/>
                <Button text="Join wishlist "/>
            </div>

            <div className="w-full relative">
            <img className="w-full" 
            src="https://framerusercontent.com/images/WWbE02xujh7zzNuGyPX7eQbctc.png?scale-down-to=2048" alt="" />
            {/* <div className="bg-white opacity-85 rounded-t-full w-full border-0 h-10 md:h-30 backdrop-blur-2xl z-10 absolute bottom-0"></div> */}
            </div>
        </div>
    </div>
}