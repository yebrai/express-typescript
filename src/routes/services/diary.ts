import { DiaryEntry } from '../../types'
import diaryData from './diaries.json'

// Insercion de tipos
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

const getEntries = () => diaries

const addEntry = () => null

export {
  getEntries,
  addEntry
}
