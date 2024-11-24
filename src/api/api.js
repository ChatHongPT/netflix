const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const validateApiKey = async (apiKey) => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/authentication/token/new?api_key=${apiKey}`);
    if (response.ok) {
      const data = await response.json();
      return data.success; // TMDB에서 success가 true인 경우 유효한 API Key
    }
    return false;
  } catch (error) {
    console.error("API Key 검증 실패:", error);
    return false;
  }
};
