/**
 * Public showcase types.
 *
 * Production types contain additional validation and policy fields and are not
 * derived from this file.
 */

export type PracticeMode = "auto" | "review"
export type PracticeLanguage = "python" | "java" | "cpp"
export type PracticeDifficulty = "easy" | "standard" | "hard"

export interface StartPracticeRequest {
  problemSlug: string
  language: PracticeLanguage
  mode: PracticeMode
  difficulty: PracticeDifficulty
}

export interface SolutionMaterial {
  problemSlug: string
  language: PracticeLanguage
  source: "reference" | "accepted-submission"
  code: string
}

export interface RecallBlank {
  id: string
  placeholder: string
}

export interface PracticeSession {
  problemSlug: string
  language: PracticeLanguage
  mode: PracticeMode
  displayCode: string
  blanks: RecallBlank[]
}

export interface AttemptSummary {
  problemSlug: string
  language: PracticeLanguage
  completed: boolean
  attemptedAt: Date
}
