import { isHiragana, isKatakana } from "wanakana";
import { all } from "./words/all";

export const difficulties = [
  {
    id: 0,
    name: "Beginner",
    speed: 3,
    words: {
      hiragana: all.filter(
        (word) => word.expression.length < 4 && isHiragana(word.expression)
      ),
      katakana: all.filter(
        (word) => word.expression.length < 4 && isKatakana(word.expression)
      ),
    },
  },
  {
    id: 1,
    name: "Easy",
    speed: 8,
    words: {
      hiragana: all.filter(
        (word) => word.expression.length < 4 && isHiragana(word.expression)
      ),
      katakana: all.filter(
        (word) => word.expression.length < 4 && isKatakana(word.expression)
      ),
    },
  },
  {
    id: 2,
    name: "Medium",
    speed: 12,
    words: {
      hiragana: all.filter(
        (word) =>
          word.expression.length < 5 &&
          isHiragana(word.expression) &&
          word.expression.length > 3
      ),
      katakana: all.filter(
        (word) =>
          word.expression.length < 5 &&
          isKatakana(word.expression) &&
          word.expression.length > 3
      ),
    },
  },
  {
    id: 3,
    name: "Hard",
    speed: 16,
    words: {
      hiragana: all.filter(
        (word) => word.expression.length > 3 && isHiragana(word.expression)
      ),
      katakana: all.filter(
        (word) => word.expression.length > 3 && isKatakana(word.expression)
      ),
    },
  },
];
