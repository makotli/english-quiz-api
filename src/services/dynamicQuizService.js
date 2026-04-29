import { vocabularyDataset } from "../data/vocabulary.js";
import { pickRandom, shuffle } from "../utils/random.js";
import { validateLevel } from "./quizService.js";
import { getWordDetails } from "./wordService.js";

const stopWords = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "in",
  "into",
  "is",
  "it",
  "of",
  "on",
  "or",
  "that",
  "the",
  "to",
  "used",
  "with"
]);

function getDefinition(wordDetails) {
  const candidates = wordDetails.meanings.flatMap((meaning) =>
    (meaning.definitionMeta || []).map((definitionItem) => ({
      definition: definitionItem.definition,
      partOfSpeech: meaning.partOfSpeech,
      score:
        (definitionItem.example ? 4 : 0) +
        (meaning.synonyms.length > 0 ? 2 : 0) +
        (definitionItem.definition.length >= 40 && definitionItem.definition.length <= 180 ? 2 : 0) +
        (["adjective", "verb", "noun", "adverb"].includes(meaning.partOfSpeech) ? 1 : 0) +
        (meaning.partOfSpeech !== "noun" ? 2 : 0) +
        (!definitionItem.definition.trim().startsWith("(") ? 1 : 0)
    }))
  );

  const bestDefinition = candidates
    .filter((candidate) => candidate.definition)
    .sort((left, right) => right.score - left.score)[0];

  if (bestDefinition) {
    return {
      definition: bestDefinition.definition,
      partOfSpeech: bestDefinition.partOfSpeech
    };
  }

  const error = new Error(`No usable definition found for '${wordDetails.word}'.`);
  error.status = 404;
  throw error;
}

function getDistractor(correctWord, level) {
  const normalizedCorrect = correctWord.toLowerCase();
  const candidates = Object.values(vocabularyDataset)
    .flat()
    .filter((item) => Math.abs(item.level - level) <= 1)
    .flatMap((item) => [
      ...item.correctAssociations.map((association) => association.word),
      ...item.distractors
    ])
    .filter((candidate) => candidate.toLowerCase() !== normalizedCorrect);

  return pickRandom(candidates.length > 0 ? candidates : ["table", "airport", "invoice"]);
}

function getDefinitionClues(definition, correctWord) {
  const normalizedCorrect = correctWord.toLowerCase();
  const words = definition
    .toLowerCase()
    .replace(/[^a-z\s-]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3)
    .filter((word) => word !== normalizedCorrect)
    .filter((word) => !stopWords.has(word));

  return shuffle([...new Set(words)]).slice(0, 3);
}

export async function generateQuizFromWord({ word, level }) {
  const parsedLevel = validateLevel(level);
  const wordDetails = await getWordDetails(word, { includeDefinitionMeta: true });
  const { definition, partOfSpeech } = getDefinition(wordDetails);
  const distractor = getDistractor(wordDetails.word, parsedLevel);
  const clues = getDefinitionClues(definition, wordDetails.word);

  return {
    question: "Which word best matches this definition?",
    word: wordDetails.word,
    definition,
    partOfSpeech,
    words: clues,
    options: shuffle([wordDetails.word, distractor]),
    correct: wordDetails.word,
    explanation: `'${wordDetails.word}' means: ${definition}`,
    level: parsedLevel,
    source: wordDetails.source
  };
}
