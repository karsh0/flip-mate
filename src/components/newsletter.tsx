import Button from "./button";
import Input from "./input";

export default function NewsLetter(){
    return <div className="flex flex-col gap-5 justify-center items-center">
        <span className="text-4xl font-semibold">Join the Waitlist for Clipmate AI</span>
        <p className="text-md text-gray-800">Clipmate is free while in beta.</p>
        <div className="flex gap-2">
            <Input/>
            <Button text="Join wishlist"/>
        </div>
    </div>
}