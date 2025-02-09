import React, { useState, useRef, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { useNavigate } from "react-router-dom";

const MovieCarousel = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const lastScrollTime = useRef(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      if (carouselRef.current && carouselRef.current.contains(event.target)) {
        event.preventDefault();
        const now = Date.now();
        const SCROLL_DELAY = 800;

        if (now - lastScrollTime.current > SCROLL_DELAY) {
          setCurrentIndex((prevIndex) => {
            let newIndex = event.deltaY > 0 ? prevIndex + 1 : prevIndex - 1;
            if (newIndex >= movies.length) newIndex = 0;
            if (newIndex < 0) newIndex = movies.length - 1;
            return newIndex;
          });
          lastScrollTime.current = now;
        }
      }
    };

    document.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, [movies.length]);

  const slides = movies.map((movie, index) => ({
    key: index,
    content: (
      <div className="movie-card" onClick={() => navigate(`/book-tickets?movie=${movie.id}`)}>
        <div className="movie-card-inner">
          <div className="movie-card-front">
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
          <div className="movie-card-back">
            <p>{movie.description}</p>
            <p>Active time:{movie.times.join(", ")}</p>
            <h3>Price:{movie.price}$</h3>
            <h3>Raiting:{movie.rating}</h3>
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <div className="carousel" ref={carouselRef}>
      <Carousel
        slides={slides}
        goToSlide={currentIndex}
        offsetRadius={2}
        showNavigation={false}
        animationConfig={config.gentle}
      />
    </div>
  );
};

export default MovieCarousel;
