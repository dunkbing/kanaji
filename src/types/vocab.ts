// src/types/vocab.ts
export interface VocabWord {
  kanji: string;      // Kanji form (if exists)
  kana: string;       // Hiragana/Katakana reading
  romaji: string;     // Romaji reading
  meaning: {
    en: string;       // English meaning
    vi: string;       // Vietnamese meaning
  };
  partOfSpeech: string; // e.g., noun, verb, adjective
}

export interface VocabLesson {
  id: string;         // lesson_1, lesson_2, etc.
  number: number;     // 1, 2, etc.
  title: {
    en: string;       // English title
    vi: string;       // Vietnamese title
  };
  words: VocabWord[];
}
