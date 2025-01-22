import React, { useState, useEffect } from 'react';


const Autocomplete = ({ searchText, setSearchText, setSearchResults }) => {
  const [languageFilter, setLanguageFilter] = useState('');
  const [authorFilter, setAuthorFilter] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      if (searchText.length < 3) return;

      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchText}&langRestrict=${languageFilter}`
      );
      setSearchResults(
        response.data.items.filter((item) =>
          authorFilter ? item.volumeInfo.authors?.includes(authorFilter) : true
        )
      );
    };

    fetchBooks();
  }, [searchText, languageFilter, authorFilter, setSearchResults]);

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for books..."
      />
      <div className="filters">
        <select
          onChange={(e) => setLanguageFilter(e.target.value)}
          defaultValue=""
        >
          <option value="">All Languages</option>
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
        <input
          type="text"
          placeholder="Author name"
          onChange={(e) => setAuthorFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Autocomplete;
