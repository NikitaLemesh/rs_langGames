export interface user {
  name: string
  email: string
  password: string
}
export interface WordBody {
  difficulty: string,
  optional: {}
}
export interface statistics {
  learnedWords: number,
  optional: {}
}
export interface settings {
  wordsPerDay: number,
  optional: {}
}
export interface userLogin {
  email: string,
  password: string
}
