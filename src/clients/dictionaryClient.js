const DICTIONARY_API_BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";
const REQUEST_TIMEOUT_MS = 8000;

export async function fetchDictionaryEntry(word) {
  const normalizedWord = String(word || "").trim().toLowerCase();

  if (!normalizedWord) {
    const error = new Error("word query parameter is required.");
    error.status = 400;
    throw error;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  const sourceUrl = `${DICTIONARY_API_BASE_URL}/${encodeURIComponent(normalizedWord)}`;

  try {
    const response = await fetch(sourceUrl, {
      signal: controller.signal,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.status === 404) {
      const error = new Error(`No dictionary entry found for '${normalizedWord}'.`);
      error.status = 404;
      throw error;
    }

    if (!response.ok) {
      const error = new Error("Dictionary API request failed.");
      error.status = 502;
      throw error;
    }

    return {
      data: await response.json(),
      sourceUrl
    };
  } catch (error) {
    if (error.name === "AbortError") {
      const timeoutError = new Error("Dictionary API request timed out.");
      timeoutError.status = 504;
      throw timeoutError;
    }

    if (!error.status) {
      const gatewayError = new Error("Dictionary API is unavailable.");
      gatewayError.status = 502;
      throw gatewayError;
    }

    throw error;
  } finally {
    clearTimeout(timeout);
  }
}
