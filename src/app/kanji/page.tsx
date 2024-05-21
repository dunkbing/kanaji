import { Metadata } from "next";
import Kanji from "../zero-neko/views/Kanji";

export const metadata: Metadata = {
  title: "Kanji",
  description:
    "Dive into the fascinating world of kanji, the logographic characters used in the Japanese writing system. Our kanji page offers a structured approach to learning kanji based on the grade levels they are taught in Japanese schools. Explore the meanings, readings, and stroke orders of kanji through interactive charts and quizzes. Suitable for intermediate to advanced Japanese language learners.",
  keywords: [
    "kanji",
    "Japanese writing system",
    "kanji chart",
    "kanji meanings",
    "kanji readings",
    "kanji stroke order",
    "Japanese characters",
    "Japanese vocabulary",
    "JLPT",
    "learn Japanese",
  ],
};

export default function KanjiPage() {
  return <Kanji />;
}
