
export default function Button({text}:{text:string}){
    return <div className="bg-orange-600 text-white font-semibold rounded-xl flex justify-center items-center 
    px-2 py-2 text-xs md:text:sm md:px-5 md:py-3">
        {text}
    </div>
}