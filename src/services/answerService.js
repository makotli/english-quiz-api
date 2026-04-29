import { findAssociation } from "./quizService.js";

export function scoreAnswer({ answer, correct }) {
  if (typeof answer !== "string" || typeof correct !== "string") {
    const error = new Error("answer and correct must both be strings.");
    error.status = 400;
    throw error;
  }

  const normalizedAnswer = answer.trim().toLowerCase();
  const normalizedCorrect = correct.trim().toLowerCase();
  const isCorrect = normalizedAnswer === normalizedCorrect;
  const association = findAssociation(correct);
  const explanation = association?.explanation || `'${correct}' is the best association.`;
  const clueWords = association?.baseWords?.join(", ") || "the clue words";

  return {
    isCorrect,
    feedback: isCorrect
      ? `Correct! '${correct}' is related to ${clueWords}.`
      : `Not quite. The correct answer is '${correct}'.`,
    explanation
  };
}
