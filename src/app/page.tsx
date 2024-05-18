import { Metadata } from "next";
import Home from "./zero-neko/views/Home";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover an interactive and engaging way to learn Japanese with our web app. Explore hiragana, katakana, and kanji charts, and practice your skills with fun games like pairing kana and typing challenges. Start your Japanese learning journey today, no account required! Suitable for beginners and accessible on both desktop and mobile devices.",
  keywords: [
    "learn Japanese",
    "Japanese language",
    "hiragana",
    "katakana",
    "kanji",
    "romaji",
    "Japanese writing system",
    "Japanese grammar",
    "Japanese vocabulary",
    "Japanese pronunciation",
    "Japanese language app",
    "Japanese for beginners",
    "Japanese reading practice",
    "Japanese writing practice",
    "Japanese language games",
    "interactive Japanese learning",
  ],
};

export default function HomePage() {
  return <Home />;
}
