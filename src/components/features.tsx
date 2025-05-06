import { Folder, NotepadText, Star } from "lucide-react";
import Card from "./card";
import Note from "./note";

export default function Features() {
    return <div className="w-full flex flex-col justify-center items-center gap-10">


        <div className="flex flex-col text-center max-w-4xl gap-5 pb-10">
            <span className="text-orange-500 font-semibold">POWERFUL FEATURES</span>
            <span className="text-5xl font-semibold">Sync, search, organize</span>
            <p className="text-gray-800">Clipmate AI eliminates digital clutter effortlessly. It instantly organizes your bookmarks and content, with zero effort on your part. Find what you need in seconds, not hours. Think of it as your own, very smart, personal search engine.</p>
        </div>


        <div className="flex gap-10">
            <Card title="Automatic Sync"
                description="Automatically sync your Twitter and Reddit bookmarks into Clipmate in realtime. Never worry about context switching and interrupting your flow again."
                url="https://framerusercontent.com/images/0Seg7lewZL6Ji95rWs17qwWGypo.png" />
            <Card title="Chrome Extension"
                description="ust browsing? No problem! Add new links from any webpage using our Chrome Extension."
                url="https://framerusercontent.com/images/SAIgxf4NvZU5JPYjMix7zGBhHo.png" />
            <Card title="Drag, Drop and CMD+V"
                description="Drag and drop files or copy and paste links into Clipmate seamlessly using CMD+V."
                url="https://framerusercontent.com/images/eqXYqRsFPuITKxjV7Z7A0idx5Y.png" />
        </div>


        <div className="flex items-center gap-10 p-3">
            <div>
                <span className="text-2xl font-semibold">Semantic Search</span>
                <p className="text-gray-800">Search through your entire knowledge base (Tweets, Reddit posts, Links and PDFs) using semantic search. Always find what you're looking for, even if you've forgotten the exact keyword.</p>
            </div>
            <img className="rounded-xl w-4xl" src="https://framerusercontent.com/images/9LLDKnUDAEsqSp867mK41PHUbJY.png?scale-down-to=2048" />
        </div>

        <div className="flex gap-10">
            <Card title="Auto-Categorization"
                description="Use AI to automatically categorize incoming items into collections. Set it up once, provide some feedback and watch as your knowledge base is organized automatically."
                url="https://framerusercontent.com/images/qKMKqKedMvvmixONxdpGjcbpY.png?scale-down-to=2048" />
            <Card title="Chat with your bookmarks"
                description="Synthesize insights across bookmarks instantly. Ask questions, get summaries, and extract key information without tab-hopping. Focus on what matters while AI does the heavy lifting."
                url="https://framerusercontent.com/images/qKMKqKedMvvmixONxdpGjcbpY.png?scale-down-to=2048" />
        </div>

        <div className="flex justify-between gap-10">
            <Note icon={<NotepadText color="rgb(245, 55, 12)" /> } title="Add Notes to Bookmarks" description="Add notes to your bookmarks so that you always remember why you bookmarked something in the first place."/>
            <Note icon={<Folder color="rgb(245, 55, 12)" /> } title="Organize into Collections" description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."/>
            <Note icon={<Star color="rgb(245, 55, 12)" /> } title="Bookmark Summaries" description="Summaries are automatically generated for every long-form item in your bookmarks."/>
        </div>
    </div>
}