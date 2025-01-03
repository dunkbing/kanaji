export type KanaType = 'hiragana' | 'katakana'

export interface KanaCharacter {
  kana: string
  romaji: string
  column: number
  row: number
}

export interface StudyState {
  selectedCharacters: KanaCharacter[]
  currentIndex: number
  score: number
  total: number
  speedMode: boolean
}

export interface KanaPreferences {
  continuousPlay: boolean
  randomOrder: boolean
  repeatProblemKana: boolean
  speedMode: boolean
}
