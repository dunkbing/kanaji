import { Metadata } from "next";
import Kana from "../zero-neko/views/Kana";

export const metadata: Metadata = {
  title: "Hiragana",
  description:
    "Master the basics of Japanese writing with our comprehensive hiragana chart. Learn the 46 core hiragana characters, along with their variations and combinations. Practice reading, writing, and pronouncing hiragana through interactive examples and quizzes. Ideal for beginners starting their Japanese language journey.",
  keywords: [
    "hiragana",
    "Japanese writing system",
    "hiragana chart",
    "read hiragana",
    "write hiragana",
    "hiragana pronunciation",
    "hiragana variations",
    "hiragana combinations",
    "Japanese for beginners",
    "learn Japanese",
  ],
};

export default function HiraPage() {
  return <Kana title={metadata.title} />;
}
