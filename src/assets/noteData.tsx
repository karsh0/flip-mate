import {
    NotepadText,
    FolderKanban,
    BookOpenCheck,
    Code2,
    Megaphone,
    Lightbulb,
  } from "lucide-react";
import Note from "../components/note";
  
  const notesData = [
    {
      title: "Digital Hoarders",
      description:
        "Any idea how many Twitter bookmarks, iOS screenshots and unfinished notes you've collected over the years?",
      icon: <NotepadText color="rgb(245, 55, 12)" />,
    },
    {
      title: "Designers",
      description:
        "Move your design swipe file to Clipmate and watch as Clipmate organizes your content automatically.",
      icon: <FolderKanban color="rgb(245, 55, 12)" />, // design organization
    },
    {
      title: "Researchers",
      description:
        "Save and analyse papers, videos, news articles in the moment and without inconvenient context-switching.",
      icon: <BookOpenCheck color="rgb(245, 55, 12)" />, // research/reading
    },
    {
      title: "Developers",
      description:
        "Find that one Github repository that you bookmarked two weeks ago and promised you'd come back to.",
      icon: <Code2 color="rgb(245, 55, 12)" />, // coding/dev
    },
    {
      title: "Marketers",
      description:
        "Drowning in campaign ideas and market trends? Clipmate helps you organize insights and keep your strategy sharp and accessible.",
      icon: <Megaphone color="rgb(245, 55, 12)" />, // marketing/speaking
    },
    {
      title: "Entrepreneurs",
      description:
        "Entrepreneurs always have too much going on so who's ever going to read the endless read-it-later pile. No one! But what if you don't have to read it?",
      icon: <Lightbulb color="rgb(245, 55, 12)" />, // ideas/startups
    },
  ];
  
  export default function NotesList() {
    return (
      <>
        {notesData.map((note, index) => (
          <Note
            key={index}
            icon={note.icon}
            title={note.title}
            description={note.description}
          />
        ))}
      </>
    );
  }
  