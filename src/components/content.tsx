import NotesList from "../assets/noteData";

export default function Content(){
    return <div className="w-full flex flex-col justify-center items-center gap-10 py-20">

    <div className="flex flex-col text-center max-w-4xl gap-5 pb-10">
            <span className="text-orange-500 font-semibold">POWERFUL FEATURES</span>
            <span className="text-5xl font-semibold">Sync, search, organize</span>
            <p className="text-gray-800">Clipmate AI eliminates digital clutter effortlessly. It instantly organizes your bookmarks and content, with zero effort on your part. Find what you need in seconds, not hours. Think of it as your own, very smart, personal search engine.</p>
    </div>

    <div className="flex flex-wrap gap-10">
      <NotesList/>
    </div>

    </div>
}