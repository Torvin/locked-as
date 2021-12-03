export type Region = 'AKL' | 'WLG' | 'NL'
export type Level = 0 | 1 | 2 | 3 | 4
export type LevelTransition = [string, Level] | [string, Level, Region]
