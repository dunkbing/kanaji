export interface KanaCharacter {
  kana: string;
  romaji: string;
}

export interface KanaColumn {
  characters: KanaCharacter[];
  name: string;
}

export interface KanaSet {
  single: KanaColumn[];
  compound: KanaColumn[];
}

export const hiraganaData: KanaSet = {
  single: [
    {
      name: "あ",
      characters: [
        { kana: "あ", romaji: "a" },
        { kana: "い", romaji: "i" },
        { kana: "う", romaji: "u" },
        { kana: "え", romaji: "e" },
        { kana: "お", romaji: "o" },
      ],
    },
    {
      name: "か",
      characters: [
        { kana: "か", romaji: "ka" },
        { kana: "き", romaji: "ki" },
        { kana: "く", romaji: "ku" },
        { kana: "け", romaji: "ke" },
        { kana: "こ", romaji: "ko" },
      ],
    },
    {
      name: "さ",
      characters: [
        { kana: "さ", romaji: "sa" },
        { kana: "し", romaji: "shi" },
        { kana: "す", romaji: "su" },
        { kana: "せ", romaji: "se" },
        { kana: "そ", romaji: "so" },
      ],
    },
    {
      name: "た",
      characters: [
        { kana: "た", romaji: "ta" },
        { kana: "ち", romaji: "chi" },
        { kana: "つ", romaji: "tsu" },
        { kana: "て", romaji: "te" },
        { kana: "と", romaji: "to" },
      ],
    },
    {
      name: "な",
      characters: [
        { kana: "な", romaji: "na" },
        { kana: "に", romaji: "ni" },
        { kana: "ぬ", romaji: "nu" },
        { kana: "ね", romaji: "ne" },
        { kana: "の", romaji: "no" },
      ],
    },
    {
      name: "は",
      characters: [
        { kana: "は", romaji: "ha" },
        { kana: "ひ", romaji: "hi" },
        { kana: "ふ", romaji: "fu" },
        { kana: "へ", romaji: "he" },
        { kana: "ほ", romaji: "ho" },
      ],
    },
    {
      name: "ま",
      characters: [
        { kana: "ま", romaji: "ma" },
        { kana: "み", romaji: "mi" },
        { kana: "む", romaji: "mu" },
        { kana: "め", romaji: "me" },
        { kana: "も", romaji: "mo" },
      ],
    },
    {
      name: "や",
      characters: [
        { kana: "や", romaji: "ya" },
        { kana: "ゆ", romaji: "yu" },
        { kana: "よ", romaji: "yo" },
      ],
    },
    {
      name: "ら",
      characters: [
        { kana: "ら", romaji: "ra" },
        { kana: "り", romaji: "ri" },
        { kana: "る", romaji: "ru" },
        { kana: "れ", romaji: "re" },
        { kana: "ろ", romaji: "ro" },
      ],
    },
    {
      name: "わ",
      characters: [
        { kana: "わ", romaji: "wa" },
        { kana: "を", romaji: "wo" },
        { kana: "ん", romaji: "n" },
      ],
    },
  ],
  compound: [
    {
      name: "きゃ",
      characters: [
        { kana: "きゃ", romaji: "kya" },
        { kana: "きゅ", romaji: "kyu" },
        { kana: "きょ", romaji: "kyo" },
      ],
    },
    {
      name: "しゃ",
      characters: [
        { kana: "しゃ", romaji: "sha" },
        { kana: "しゅ", romaji: "shu" },
        { kana: "しょ", romaji: "sho" },
      ],
    },
    {
      name: "ちゃ",
      characters: [
        { kana: "ちゃ", romaji: "cha" },
        { kana: "ちゅ", romaji: "chu" },
        { kana: "ちょ", romaji: "cho" },
      ],
    },
    {
      name: "にゃ",
      characters: [
        { kana: "にゃ", romaji: "nya" },
        { kana: "にゅ", romaji: "nyu" },
        { kana: "にょ", romaji: "nyo" },
      ],
    },
    {
      name: "ひゃ",
      characters: [
        { kana: "ひゃ", romaji: "hya" },
        { kana: "ひゅ", romaji: "hyu" },
        { kana: "ひょ", romaji: "hyo" },
      ],
    },
    {
      name: "みゃ",
      characters: [
        { kana: "みゃ", romaji: "mya" },
        { kana: "みゅ", romaji: "myu" },
        { kana: "みょ", romaji: "myo" },
      ],
    },
    {
      name: "りゃ",
      characters: [
        { kana: "りゃ", romaji: "rya" },
        { kana: "りゅ", romaji: "ryu" },
        { kana: "りょ", romaji: "ryo" },
      ],
    },
    {
      name: "ぎゃ",
      characters: [
        { kana: "ぎゃ", romaji: "gya" },
        { kana: "ぎゅ", romaji: "gyu" },
        { kana: "ぎょ", romaji: "gyo" },
      ],
    },
    {
      name: "じゃ",
      characters: [
        { kana: "じゃ", romaji: "ja" },
        { kana: "じゅ", romaji: "ju" },
        { kana: "じょ", romaji: "jo" },
      ],
    },
    {
      name: "ぢゃ",
      characters: [
        { kana: "ぢゃ", romaji: "ja" },
        { kana: "ぢゅ", romaji: "ju" },
        { kana: "ぢょ", romaji: "jo" },
      ],
    },
    {
      name: "びゃ",
      characters: [
        { kana: "びゃ", romaji: "bya" },
        { kana: "びゅ", romaji: "byu" },
        { kana: "びょ", romaji: "byo" },
      ],
    },
    {
      name: "ぴゃ",
      characters: [
        { kana: "ぴゃ", romaji: "pya" },
        { kana: "ぴゅ", romaji: "pyu" },
        { kana: "ぴょ", romaji: "pyo" },
      ],
    },
  ],
};

export const katakanaData: KanaSet = {
  single: [
    {
      name: "ア",
      characters: [
        { kana: "ア", romaji: "a" },
        { kana: "イ", romaji: "i" },
        { kana: "ウ", romaji: "u" },
        { kana: "エ", romaji: "e" },
        { kana: "オ", romaji: "o" },
      ],
    },
    {
      name: "カ",
      characters: [
        { kana: "カ", romaji: "ka" },
        { kana: "キ", romaji: "ki" },
        { kana: "ク", romaji: "ku" },
        { kana: "ケ", romaji: "ke" },
        { kana: "コ", romaji: "ko" },
      ],
    },
    {
      name: "サ",
      characters: [
        { kana: "サ", romaji: "sa" },
        { kana: "シ", romaji: "shi" },
        { kana: "ス", romaji: "su" },
        { kana: "セ", romaji: "se" },
        { kana: "ソ", romaji: "so" },
      ],
    },
    {
      name: "タ",
      characters: [
        { kana: "タ", romaji: "ta" },
        { kana: "チ", romaji: "chi" },
        { kana: "ツ", romaji: "tsu" },
        { kana: "テ", romaji: "te" },
        { kana: "ト", romaji: "to" },
      ],
    },
    {
      name: "ナ",
      characters: [
        { kana: "ナ", romaji: "na" },
        { kana: "ニ", romaji: "ni" },
        { kana: "ヌ", romaji: "nu" },
        { kana: "ネ", romaji: "ne" },
        { kana: "ノ", romaji: "no" },
      ],
    },
    {
      name: "ハ",
      characters: [
        { kana: "ハ", romaji: "ha" },
        { kana: "ヒ", romaji: "hi" },
        { kana: "フ", romaji: "fu" },
        { kana: "ヘ", romaji: "he" },
        { kana: "ホ", romaji: "ho" },
      ],
    },
    {
      name: "マ",
      characters: [
        { kana: "マ", romaji: "ma" },
        { kana: "ミ", romaji: "mi" },
        { kana: "ム", romaji: "mu" },
        { kana: "メ", romaji: "me" },
        { kana: "モ", romaji: "mo" },
      ],
    },
    {
      name: "ヤ",
      characters: [
        { kana: "ヤ", romaji: "ya" },
        { kana: "ユ", romaji: "yu" },
        { kana: "ヨ", romaji: "yo" },
      ],
    },
    {
      name: "ラ",
      characters: [
        { kana: "ラ", romaji: "ra" },
        { kana: "リ", romaji: "ri" },
        { kana: "ル", romaji: "ru" },
        { kana: "レ", romaji: "re" },
        { kana: "ロ", romaji: "ro" },
      ],
    },
    {
      name: "ワ",
      characters: [
        { kana: "ワ", romaji: "wa" },
        { kana: "ヲ", romaji: "wo" },
        { kana: "ン", romaji: "n" },
      ],
    },
  ],
  compound: [
    {
      name: "キャ",
      characters: [
        { kana: "キャ", romaji: "kya" },
        { kana: "キュ", romaji: "kyu" },
        { kana: "キョ", romaji: "kyo" },
      ],
    },
    {
      name: "シャ",
      characters: [
        { kana: "シャ", romaji: "sha" },
        { kana: "シュ", romaji: "shu" },
        { kana: "ショ", romaji: "sho" },
      ],
    },
    {
      name: "チャ",
      characters: [
        { kana: "チャ", romaji: "cha" },
        { kana: "チュ", romaji: "chu" },
        { kana: "チョ", romaji: "cho" },
      ],
    },
    {
      name: "ニャ",
      characters: [
        { kana: "ニャ", romaji: "nya" },
        { kana: "ニュ", romaji: "nyu" },
        { kana: "ニョ", romaji: "nyo" },
      ],
    },
    {
      name: "ヒャ",
      characters: [
        { kana: "ヒャ", romaji: "hya" },
        { kana: "ヒュ", romaji: "hyu" },
        { kana: "ヒョ", romaji: "hyo" },
      ],
    },
    {
      name: "ミャ",
      characters: [
        { kana: "ミャ", romaji: "mya" },
        { kana: "ミュ", romaji: "myu" },
        { kana: "ミョ", romaji: "myo" },
      ],
    },
    {
      name: "リャ",
      characters: [
        { kana: "リャ", romaji: "rya" },
        { kana: "リュ", romaji: "ryu" },
        { kana: "リョ", romaji: "ryo" },
      ],
    },
    {
      name: "ギャ",
      characters: [
        { kana: "ギャ", romaji: "gya" },
        { kana: "ギュ", romaji: "gyu" },
        { kana: "ギョ", romaji: "gyo" },
      ],
    },
    {
      name: "ジャ",
      characters: [
        { kana: "ジャ", romaji: "ja" },
        { kana: "ジュ", romaji: "ju" },
        { kana: "ジョ", romaji: "jo" },
      ],
    },
    {
      name: "ヂャ",
      characters: [
        { kana: "ヂャ", romaji: "ja" },
        { kana: "ヂュ", romaji: "ju" },
        { kana: "ヂョ", romaji: "jo" },
      ],
    },
    {
      name: "ビャ",
      characters: [
        { kana: "ビャ", romaji: "bya" },
        { kana: "ビュ", romaji: "byu" },
        { kana: "ビョ", romaji: "byo" },
      ],
    },
    {
      name: "ピャ",
      characters: [
        { kana: "ピャ", romaji: "pya" },
        { kana: "ピュ", romaji: "pyu" },
        { kana: "ピョ", romaji: "pyo" },
      ],
    },
  ],
};
