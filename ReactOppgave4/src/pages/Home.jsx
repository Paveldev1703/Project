import MovieCarousel from '../components/MovieCarousel';
import mockData from '../mockData';

const Home = () => {
  return (
    <div>
      <h1 className="Logo">Welcome to Fjell Kino</h1>
      <MovieCarousel movies={mockData} />
    </div>
  );
};

export default Home;


