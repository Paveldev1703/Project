import React from "react";
import "../styles/Upcoming.css";
import upcomingMovies from '../UpcomingMovies';  // Замените на правильный импорт

const Upcoming = () => {
  return (
    <div className="upcoming-container">
      <h1>Upcoming Movies</h1>
      
      <div className="upcoming-movie-list">
        {upcomingMovies.map((movie, index) => (
          <div className="upcoming-movie-card" key={index}>
            <img src={movie.image} alt={movie.title} className="upcoming-movie-image" />
            <div className="movie-info">
              <h3 className="upcoming-movie-title">{movie.title}</h3>
              <p className="upcoming-release-date">Release Date: {movie.releaseDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
