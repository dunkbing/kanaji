import { Metadata } from "next";
import Verbs from "../zero-neko/views/Verbs";

export const metadata: Metadata = {
  title: "List of Japanese verbs - All levels",
  description:
    "Master the basics of Japanese writing with our comprehensive hiragana chart. Learn the 46 core hiragana characters, along with their variations and combinations. Practice reading, writing, and pronouncing hiragana through interactive examples and quizzes. Ideal for beginners starting their Japanese language journey.",
  keywords: [],
};

export default function VerbsPage() {
  return <Verbs title={metadata.title} />;
}
