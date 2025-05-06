import { Github, HandCoins } from "lucide-react";

export default function Footer(){
    return <div className="w-full mt-20 p-10 md:px-50 md:py-20 bg-black text-white flex justify-between items-center">
         <div className="text-sm md:text-2xl font-semibold flex gap-2">
            <HandCoins/>
            Flipmate
        </div>
        <a href="https://github.com/karsh0/flip-mate">
            <Github/>
        </a>
    </div>
}