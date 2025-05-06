import { HandCoins } from "lucide-react";
import Button from "./button";

export default function Navbar(){
    return <div className="w-full fixed top-0 z-10 h-16 border-gray-200 border-b-[1px] backdrop-blur-sm px-10 md:px-14 py-5 flex justify-between
     items-center">
        <div className="text-sm md:text-xl font-semibold flex gap-2">
          <HandCoins/>
            Flipmate</div>
        <div className="hidden md:block md:text-md font-semibold">Join the community</div>
        <Button text="Join wishlist"/>
    </div>
}