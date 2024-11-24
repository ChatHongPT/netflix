import React, { useState } from "react";
import MovieList from "../components/MovieList";

const Home = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  const handleRecommend = (movieId) => {
    setRecommendedMovies((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div>
      <MovieList onRecommend={handleRecommend} />
      <div className="p-4">
        <h2 className="text-white">Recommended Movies</h2>
        {recommendedMovies.length === 0 ? (
          <p className="text-white">No movies recommended.</p>
        ) : (
          <ul>
            {recommendedMovies.map((id) => (
              <li key={id} className="text-white">
                Movie ID: {id}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
