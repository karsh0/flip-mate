
export default function Card({title, description, url}:{title:string, description:string, url:string}){
    return <div className="md:min-w-96 flex flex-col gap-2 p-3">
        <span className="text-xl md:text-2xl font-semibold">{title}</span>
        <p className="text-gray-500 text-sm md:text-lg">{description}</p>
        <img className="rounded-xl h-full" src={url} />
    </div>
}