import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Добавьте этот импорт
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Upcoming from './pages/Upcoming';
import About from './pages/About';
import Contact from './pages/Contact';
import BookTickets from './pages/BookTickets';
import AccessibilityMenu from './components/AccessibilityMenu';


const App = () => {
  return (
    <>
      <Header />
      <AccessibilityMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-tickets" element={<BookTickets />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
