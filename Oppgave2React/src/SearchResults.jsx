import React from 'react';

const SearchResults = ({ searchResults, onSelectBook }) => {
  return (
    <div className="search-results">
      <ul>
        {searchResults.map((book) => (
          <li
            key={book.id}
            onClick={() => onSelectBook(book)}
            className="search-item"
          >
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(', ') || 'Unknown Author'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
