import { fetchDictionaryEntry } from "../clients/dictionaryClient.js";

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function extractPhonetic(entries) {
  for (const entry of entries) {
    if (entry.phonetic) {
      return entry.phonetic;
    }

    const phonetic = entry.phonetics?.find((item) => item.text)?.text;

    if (phonetic) {
      return phonetic;
    }
  }

  return "";
}

function normalizeMeaning(meaning, includeDefinitionMeta) {
  const definitions = meaning.definitions || [];

  return {
    partOfSpeech: meaning.partOfSpeech || "unknown",
    definitions: unique(definitions.map((item) => item.definition)),
    synonyms: unique([
      ...(meaning.synonyms || []),
      ...definitions.flatMap((item) => item.synonyms || [])
    ]),
    ...(includeDefinitionMeta
      ? {
          definitionMeta: definitions.map((item) => ({
            definition: item.definition,
            example: item.example || "",
            synonyms: item.synonyms || []
          }))
        }
      : {})
  };
}

export async function getWordDetails(word, options = {}) {
  const { data, sourceUrl } = await fetchDictionaryEntry(word);
  const entries = Array.isArray(data) ? data : [data];
  const meanings = entries
    .flatMap((entry) => entry.meanings || [])
    .map((meaning) => normalizeMeaning(meaning, options.includeDefinitionMeta));
  const examples = unique(
    entries.flatMap((entry) =>
      (entry.meanings || []).flatMap((meaning) =>
        (meaning.definitions || []).map((definition) => definition.example)
      )
    )
  );
  const synonyms = unique(meanings.flatMap((meaning) => meaning.synonyms));

  return {
    word: entries[0]?.word || String(word).trim().toLowerCase(),
    phonetic: extractPhonetic(entries),
    meanings,
    examples,
    synonyms,
    source: {
      type: "external",
      name: "Dictionary API",
      url: sourceUrl
    }
  };
}
