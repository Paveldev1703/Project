import React, { useState } from 'react';
import Autocomplete from './Autocomplete-komponent';
import SearchResults from './SearchResults';
import BookDetails from './BookDetails';
import './App.css';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="App">
      <h1>Book Search</h1>
      <Autocomplete
        searchText={searchText}
        setSearchText={setSearchText}
        setSearchResults={setSearchResults}
      />
      <SearchResults
        searchResults={searchResults}
        onSelectBook={setSelectedBook}
      />
      {selectedBook && <BookDetails book={selectedBook} />}
    </div>
  );
};

export default App;

