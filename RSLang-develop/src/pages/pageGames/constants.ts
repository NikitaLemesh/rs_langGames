import ImageSprint from './images/sprint.png'
import AudioChallenge from './images/audio.png'

const games: GamesNames[] = [
    {
        id: 'sprint',
        image: ImageSprint,
        name: 'Sprint',
        description: 'Check how much points you can get in one minute, in sprint game. Lets go.',
        page: '/games/sprint'
    },
    {
        id: 'Audio',
        image: AudioChallenge,
        name: 'Audio challenge',
        description: 'Check your listening skills, trying to pick the right meaning after hearing a word.',
        page: '/games/audio'
    }
];

export const sprintResultRight: GameResult[] = []
export const sprintResultWrong: GameResult[] = []
export const audioResultRight: GameResult[] = []
export const audioResultWrong: GameResult[] = []


export interface GameResult {
    wordEngl: string | undefined,
    translate: string | undefined,
    audioRightWord: string | undefined,
}

export interface GamesNames {
    id: string,
    image: string,
    name: string,
    description: string,
    page: string
}

export interface ScoreCount {
    scoreCount: number,
}

export interface IWord {
  audio: string,
  audioExample: string,
  audioMeaning: string,
  group: number,
  id: string,
  image: string,
  page: number,
  textExample: string,
  textExampleTranslate: string,
  textMeaning: string,
  textMeaningTranslate: string,
  transcription: string,
  word: string,
  wordTranslate: string,
}
export default games;
