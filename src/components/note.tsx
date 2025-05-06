
export default function Note({icon, title, description}:{icon:any, title:string, description:string}){
    return <div className="max-w-sm flex flex-col gap-2">
        <div className="flex gap-4">
        {icon}   
        <span className="text-xl font-semibold">{title}</span>
        </div>
        <p className="text-md text-gray-800">{description}</p>
    </div>
}