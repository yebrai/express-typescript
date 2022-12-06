import { DiaryEntry } from '../../types'
import diaryData from './diaries.json'

//Insercion de tipos
const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

const getEntries = () => diaries

const addEntry = () => null

export {
    getEntries,
    addEntry
}
