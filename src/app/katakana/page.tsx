import { Metadata } from "next";
import Kana from "../zero-neko/views/Kana";

export const metadata: Metadata = {
  title: "Katakana",
  description:
    "Expand your Japanese writing skills by exploring our katakana chart. Discover the 46 basic katakana characters used for foreign loanwords, onomatopoeia, and emphasis. Practice identifying, reading, and writing katakana through engaging examples and exercises. Perfect for learners looking to advance their Japanese language proficiency.",
  keywords: [
    "katakana",
    "Japanese writing system",
    "katakana chart",
    "read katakana",
    "write katakana",
    "katakana pronunciation",
    "foreign loanwords",
    "onomatopoeia",
    "Japanese language learning",
    "learn Japanese",
  ],
};

export default function KataPage() {
  return <Kana title={metadata.title} />;
}
