import { Metadata } from "next";
import Game from "../zero-neko/views/Game";

export const metadata: Metadata = {
  title: "Games",
  description:
    "Reinforce your Japanese language skills through fun and interactive games. Challenge yourself with the pairing kana game, where you match romaji characters with their corresponding hiragana or katakana. Test your typing skills with the kana and kanji typing game, which helps improve your reading and writing abilities. Engage in a enjoyable way to practice and retain your Japanese language knowledge.",
  keywords: [
    "Japanese language games",
    "pairing kana game",
    "kana typing game",
    "kanji typing game",
    "romaji",
    "Japanese reading practice",
    "Japanese writing practice",
    "Japanese typing",
    "interactive Japanese learning",
    "learn Japanese",
  ],
};

export default function HiraPage() {
  return <Game />;
}
