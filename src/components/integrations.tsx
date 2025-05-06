import ScrollBar from "./ScrollBar";

export default function Integration(){
    return <div className="w-full flex flex-col justify-center items-center">
      
      <div className="flex flex-col text-center max-w-4xl gap-5 pb-10">
            <span className="text-orange-500 text-sm md:text-xl font-semibold">INTEGRATIONS</span>
            <span className="text-3xl md:text-5xl font-semibold">Effortless Multi-Platform Sync</span>
            <p className="text-gray-800 text-sm md:text-xl">Import saved items, bookmarks, screenshots and more from platforms like Twitter, Reddit, iOS Screenshots, Spotify without ever needing to switch tabs or apps.</p>
        </div>

        <ScrollBar/>
    </div>
}