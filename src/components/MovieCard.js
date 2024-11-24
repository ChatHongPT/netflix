import React from "react";

const MovieCard = ({ movie, onRecommend }) => {
  const { id, title, overview, poster_path } = movie;

  return (
    <div
      className="movie-card relative group"
      onClick={() => onRecommend(id)}
    >
      <img
        src={`http://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="w-full h-auto transition-transform duration-300 transform group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-70 text-white text-sm">
        <h3>{title}</h3>
        <p className="truncate">{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
