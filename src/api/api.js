export const API_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = "http://image.tmdb.org/t/p";
export const savedTMDbKey = localStorage.getItem("TMDb-Key"); // API 키 저장 확인

export const validateApiKey = async (apiKey) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`);
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

export const fetchTrendingMovies = async (period, page) => {
  try {
    const response = await fetch(
      `${API_URL}/trending/movie/${period}?api_key=${savedTMDbKey}&language=ko-KR&page=${page}`
    );
    if (!response.ok) throw new Error("Failed to fetch trending movies");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
};
