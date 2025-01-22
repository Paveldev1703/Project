import React from 'react';

const BookDetails = ({ book }) => {
  return (
    <div className="book-details">
      <h2>{book.volumeInfo.title}</h2>
      <p>
        <strong>Authors:</strong>{' '}
        {book.volumeInfo.authors?.join(', ') || 'Unknown'}
      </p>
      <p>
        <strong>Categories:</strong>{' '}
        {book.volumeInfo.categories?.join(', ') || 'N/A'}
      </p>
      <p>
        <strong>Description:</strong>{' '}
        {book.volumeInfo.description || 'No description available.'}
      </p>
    </div>
  );
};

export default BookDetails;
