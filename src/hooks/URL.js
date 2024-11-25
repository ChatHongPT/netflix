import axios from 'axios';

class TMDBService {
  constructor() {
    this.apiKey = process.env.REACT_APP_TMDB_API_KEY;
    this.baseUrl = 'https://api.themoviedb.org/3';
    this.defaultLanguage = 'ko-KR';
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
    this.imageUrl = 'https://image.tmdb.org/t/p/';
    this.posterResolution = 'w300';
    this.backdropResolution = 'w780';
  }

  buildPosterUrl(path) {
    return path ? `${this.imageUrl}${this.posterResolution}${path}` : '/default-poster.jpg';
  }

  buildBackdropUrl(path) {
    return path ? `${this.imageUrl}${this.backdropResolution}${path}` : '/default-backdrop.jpg';
  }

  getPopularMoviesUrl(page = 1) {
    return `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=${this.defaultLanguage}&page=${page}&include_adult=false`;
  }

  getNowPlayingMoviesUrl(page = 1) {
    return `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=${this.defaultLanguage}&page=${page}&include_adult=false`;
  }

  getMoviesByGenreUrl(genreId, page = 1) {
    return `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&language=${this.defaultLanguage}&with_genres=${genreId}&page=${page}&include_adult=false`;
  }

  async fetchPopularMovies(page = 1) {
    const { data } = await axios.get(`${this.baseUrl}/movie/popular`, {
      params: {
        api_key: this.apiKey,
        language: this.defaultLanguage,
        page,
        include_adult: false,
      },
      headers: this.defaultHeaders,
    });
    return data.results;
  }

  async fetchNowPlayingMovies(page = 1) {
    const { data } = await axios.get(`${this.baseUrl}/movie/now_playing`, {
      params: {
        api_key: this.apiKey,
        language: this.defaultLanguage,
        page,
        include_adult: false,
      },
      headers: this.defaultHeaders,
    });
    return data.results;
  }

  async fetchMoviesByGenre(genreId, page = 1) {
    const { data } = await axios.get(`${this.baseUrl}/discover/movie`, {
      params: {
        api_key: this.apiKey,
        language: this.defaultLanguage,
        with_genres: genreId,
        page,
        include_adult: false,
      },
      headers: this.defaultHeaders,
    });
    return data.results;
  }

  async fetchGenres() {
    const { data } = await axios.get(`${this.baseUrl}/genre/movie/list`, {
      params: {
        api_key: this.apiKey,
        language: this.defaultLanguage,
      },
      headers: this.defaultHeaders,
    });
    return data.genres;
  }
}

export default TMDBService;
