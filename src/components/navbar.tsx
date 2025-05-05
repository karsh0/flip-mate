import Button from "./button";

export default function Navbar(){
    return <div className="w-full h-16 border-gray-200 border-b-[1px] backdrop-blur-xl px-14 py-5 flex justify-between
     items-center">
        <div>Flipmate</div>
        <div className="text-md font-semibold">Join the community</div>
        <Button text="Join wishlist"/>
    </div>
}