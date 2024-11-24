import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { fetchTrendingMovies } from "../api/api";

const MovieList = ({ onRecommend }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const movies = await fetchTrendingMovies("week", 1); // 주간 트렌딩 영화 가져오기
      setMovies(movies);
      setLoading(false);
    };

    loadMovies();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onRecommend={onRecommend} />
      ))}
    </div>
  );
};

export default MovieList;
