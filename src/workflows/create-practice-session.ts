import type { PracticeSession, StartPracticeRequest } from "../core/contracts"
import type { ExerciseComposer, SolutionSource } from "../core/ports"

export interface PracticeDependencies {
  solutions: SolutionSource
  composer: ExerciseComposer
}

/**
 * Illustrative orchestration only.
 *
 * Production authorization, validation, fallback, caching, quota, telemetry,
 * and error-mapping behavior is deliberately omitted.
 */
export async function createPracticeSession(
  request: StartPracticeRequest,
  dependencies: PracticeDependencies,
): Promise<PracticeSession> {
  const material = request.mode === "review"
    ? await dependencies.solutions.getAcceptedSubmission(request.problemSlug, request.language)
    : await dependencies.solutions.getReference(request.problemSlug, request.language)

  return dependencies.composer.compose(material, request.difficulty)
}
