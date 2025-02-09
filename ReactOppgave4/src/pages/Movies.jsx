import MovieCarousel from '../components/MovieCarousel';
import mockData from '../mockData';

const Movies = () => {
  return (
    <div>
      <h1>Current Movies</h1>
      <MovieCarousel movies={mockData} />
    </div>
  );
};

export default Movies;