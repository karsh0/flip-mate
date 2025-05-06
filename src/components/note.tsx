
export default function Note({icon, title, description}:{icon:any, title:string, description:string}){
    return <div className="max-w-sm flex flex-col gap-2">
        <div className="flex gap-4">
        {icon}   
        <span className="text-sm md:text-xl font-semibold">{title}</span>
        </div>
        <p className="text-xs md:text-[16px] text-gray-800">{description}</p>
    </div>
}