export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'freat' | 'good' | 'ok' | 'poor'

// haciendolo con interface - las interfaces para extender, los type para fijo.
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

interface SpecialDiaryEntry extends diaryEntry {
  flightNumber: number
}

// Haciendolo con tipos
type specialDiaryEntry2 = diaryEntre & {
  flightNumber
}
