import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    title: "What is the purpose of this web app?",
    description:
      "Our web app is designed to help you learn Japanese by providing resources such as hiragana and katakana charts, kanji lists based on grade level, and interactive games to practice your skills.",
  },
  {
    title: "What is the difference between hiragana and katakana?",
    description:
      "Hiragana and katakana are both phonetic writing systems in Japanese. Hiragana is used for native Japanese words, while katakana is primarily used for foreign loanwords and onomatopoeia. Both are essential for reading and writing Japanese.",
  },
  {
    title: "How are the kanji organized on the kanji page?",
    description:
      "The kanji on our web app are organized by the grade level they are taught in Japanese schools. This helps learners prioritize which kanji to learn first and provides a structured approach to kanji study.",
  },
  {
    title: "What is the pairing kana game?",
    description:
      "The pairing kana game is an interactive activity where you can drag and drop romaji characters (Latin alphabet representations of Japanese sounds) to match them with their corresponding hiragana or katakana characters. This helps reinforce your understanding of the relationship between kana and their pronunciations.",
  },
  {
    title: "How does the typing game work?",
    description:
      "In the typing game, a word will be displayed in either kana or kanji. Your goal is to type the correct romaji equivalent of the word. This game helps improve your reading and typing skills simultaneously.",
  },
  {
    title: "Do I need to create an account to use the web app?",
    description:
      "No, you don't need to create an account to access the features of our web app. Simply visit the website and start learning Japanese at your own pace.",
  },
  {
    title: "Is the web app suitable for beginners?",
    description:
      "Yes, our web app is designed to cater to beginners who are just starting to learn Japanese. The hiragana and katakana charts, along with the interactive games, provide a solid foundation for those new to the language.",
  },
  {
    title: "Can I use the web app on my mobile device?",
    description:
      "Absolutely! Our web app is responsive and works seamlessly on both desktop and mobile devices, allowing you to learn Japanese whenever and wherever you want.",
  },
];

export default function Faq() {
  return (
    <div>
      <section className="py-20 font-base lg:py-[100px]">
        <h1 className="block animate-bounce px-5 text-center text-4xl font-bold md:text-3xl lg:mb-20 lg:text-4xl">
          Frequently asked questions
        </h1>

        <div className="mx-auto grid w-[700px] max-w-full px-5">
          <Accordion className="text-base sm:text-lg" type="single" collapsible>
            {faq.map((f) => (
              <AccordionItem key={f.title} className="mb-2" value={f.title}>
                <AccordionTrigger>{f.title}</AccordionTrigger>
                <AccordionContent>{f.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
