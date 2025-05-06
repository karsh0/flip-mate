import Button from "./button";
import Input from "./input";

export default function NewsLetter(){
    return <div className="flex flex-col gap-5 justify-center items-center text-center">
        <span  className="text-3xl md:text-5xl font-semibold">Join the Waitlist for Clipmate AI</span>
        <p  className="text-gray-800 text-sm md:text-xl">Clipmate is free while in beta.</p>
        <div className="flex gap-2">
            <Input/>
            <Button text="Join wishlist"/>
        </div>
    </div>
}