const WIKIPEDIA_SUMMARY_BASE_URL = "https://en.wikipedia.org/api/rest_v1/page/summary";
const REQUEST_TIMEOUT_MS = 8000;

export async function fetchTopicSummary(topic) {
  const normalizedTopic = String(topic || "").trim();

  if (!normalizedTopic) {
    const error = new Error("topic query parameter is required.");
    error.status = 400;
    throw error;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  const sourceUrl = `${WIKIPEDIA_SUMMARY_BASE_URL}/${encodeURIComponent(normalizedTopic)}`;

  try {
    const response = await fetch(sourceUrl, {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "User-Agent": "english-vocabulary-quiz-api/1.0"
      }
    });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (!data.extract) {
      return null;
    }

    return {
      title: data.title || normalizedTopic,
      extract: data.extract,
      url: data.content_urls?.desktop?.page || sourceUrl
    };
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}
