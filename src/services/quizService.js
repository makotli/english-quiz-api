import { categoryLabels, levelBands, vocabularyDataset } from "../data/vocabulary.js";
import { pickRandom, shuffle } from "../utils/random.js";

const categoryAliases = new Map([
  ["daily life", "daily-life"],
  ["daily_life", "daily-life"],
  ["dailylife", "daily-life"]
]);

export function getAvailableCategories() {
  return Object.keys(vocabularyDataset);
}

export function normalizeCategory(category) {
  if (!category) return null;

  const normalized = String(category).trim().toLowerCase().replace(/\s+/g, "-");
  return categoryAliases.get(normalized) || normalized;
}

export function validateLevel(level) {
  const parsedLevel = Number.parseInt(level, 10);

  if (!Number.isInteger(parsedLevel) || parsedLevel < 1 || parsedLevel > 5) {
    const error = new Error("level must be an integer from 1 to 5.");
    error.status = 400;
    throw error;
  }

  return parsedLevel;
}

export function validateCategory(category) {
  const normalizedCategory = normalizeCategory(category);

  if (!normalizedCategory) {
    return null;
  }

  if (!vocabularyDataset[normalizedCategory]) {
    const error = new Error(`category must be one of: ${getAvailableCategories().join(", ")}.`);
    error.status = 400;
    throw error;
  }

  return normalizedCategory;
}

export function generateQuiz({ level, category }) {
  const parsedLevel = validateLevel(level);
  const normalizedCategory = validateCategory(category);
  const selectedCategory = normalizedCategory || pickRandom(getAvailableCategories());
  const candidates = vocabularyDataset[selectedCategory].filter((item) => item.level === parsedLevel);

  if (candidates.length === 0) {
    const error = new Error(`No quiz data found for level ${parsedLevel} in ${selectedCategory}.`);
    error.status = 404;
    throw error;
  }

  const quizItem = pickRandom(candidates);
  const correctAssociation = pickRandom(quizItem.correctAssociations);
  const distractor = pickRandom(quizItem.distractors);

  return {
    words: shuffle(quizItem.baseWords),
    options: shuffle([correctAssociation.word, distractor]),
    correct: correctAssociation.word,
    explanation: correctAssociation.explanation,
    category: categoryLabels[selectedCategory],
    level: parsedLevel,
    cefr: levelBands[parsedLevel]
  };
}

export function findAssociation(correctAnswer) {
  const normalizedAnswer = String(correctAnswer || "").trim().toLowerCase();

  for (const [categoryKey, items] of Object.entries(vocabularyDataset)) {
    for (const item of items) {
      const association = item.correctAssociations.find(
        (candidate) => candidate.word.toLowerCase() === normalizedAnswer
      );

      if (association) {
        return {
          ...association,
          category: categoryLabels[categoryKey],
          baseWords: item.baseWords
        };
      }
    }
  }

  return null;
}
