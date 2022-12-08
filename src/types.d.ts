// haciendolo con interface - las interfaces para extender, los type para fijo.
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = omit<DiaryEntry, 'id'>

interface SpecialDiaryEntry extends diaryEntry {
  flightNumber: number
}

// Haciendolo con tipos
type specialDiaryEntry2 = diaryEntre & {
  flightNumber
}
