// src/data/vocab-data.ts
import { VocabLesson } from '@/types/vocab';

export const vocabLessons: VocabLesson[] = [
  {
    id: "lesson-1",
    number: 1,
    title: {
      en: "Basic Greetings and Self-Introduction",
      vi: "Chào hỏi và Tự giới thiệu"
    },
    words: [
      {
        kanji: "私",
        kana: "わたし",
        romaji: "watashi",
        meaning: {
          en: "I, me",
          vi: "tôi, mình"
        },
        partOfSpeech: "pronoun"
      },
      {
        kanji: "学生",
        kana: "がくせい",
        romaji: "gakusei",
        meaning: {
          en: "student",
          vi: "học sinh, sinh viên"
        },
        partOfSpeech: "noun"
      },
      {
        kanji: "先生",
        kana: "せんせい",
        romaji: "sensei",
        meaning: {
          en: "teacher, instructor",
          vi: "giáo viên"
        },
        partOfSpeech: "noun"
      }
    ]
  },
  {
    id: "lesson-2",
    number: 2,
    title: {
      en: "This and That",
      vi: "Cái này và Cái kia"
    },
    words: [
      {
        kanji: "本",
        kana: "ほん",
        romaji: "hon",
        meaning: {
          en: "book",
          vi: "sách"
        },
        partOfSpeech: "noun"
      },
      {
        kanji: "辞書",
        kana: "じしょ",
        romaji: "jisho",
        meaning: {
          en: "dictionary",
          vi: "từ điển"
        },
        partOfSpeech: "noun"
      },
      {
        kanji: "机",
        kana: "つくえ",
        romaji: "tsukue",
        meaning: {
          en: "desk",
          vi: "bàn học"
        },
        partOfSpeech: "noun"
      }
    ]
  }
];
