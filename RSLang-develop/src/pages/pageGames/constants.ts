import ImageSprint from './images/sprint.png'
import AudioChallenge from './images/audio.png'

const games: GamesNames[] = [
    {
        id: 'sprint',
        image: ImageSprint,
        name: 'Sprint',
        description: 'Check how much points you can get in one minute',
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

export const sprintResultRight: SprintResult[] = []
export const sprintResultWrong: SprintResult[] = []

export interface SprintResult {
    wordEngl: string | undefined,
    translate: string | undefined,
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
