import React from "react";

const RecommendationList = ({ recommendedMovies }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white">Recommended Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {recommendedMovies.map((movie) => (
          <div key={movie.id} className="relative">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg"
            />
            <h3 className="text-lg font-bold text-center mt-2 text-white">
              {movie.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationList;
