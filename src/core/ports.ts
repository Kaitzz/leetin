import type {
  AttemptSummary,
  PracticeDifficulty,
  PracticeLanguage,
  PracticeSession,
  SolutionMaterial,
} from "./contracts"

/** Sources remain interchangeable and independently authorized. */
export interface SolutionSource {
  getReference(problemSlug: string, language: PracticeLanguage): Promise<SolutionMaterial>
  getAcceptedSubmission(problemSlug: string, language: PracticeLanguage): Promise<SolutionMaterial>
}

/**
 * The production implementation behind this port is proprietary.
 * Blank selection, hinting, and answer evaluation are intentionally absent.
 */
export interface ExerciseComposer {
  compose(material: SolutionMaterial, difficulty: PracticeDifficulty): Promise<PracticeSession>
}

export interface ProgressStore {
  recordAttempt(attempt: AttemptSummary): Promise<void>
}

export interface ExplanationService {
  explainSelection(input: {
    problemSlug: string
    language: PracticeLanguage
    selectedCode: string
  }): Promise<string>
}
