import { useState } from 'react';
import "../styles/BookTickets.css";

const BookTickets = () => {
  const [tickets, setTickets] = useState(1);

  const handleBooking = () => {
    alert(`You have booked ${tickets} tickets.`);
  };

  return (
    <div className="book-tickets-container">
  <h1>Book Tickets</h1>
  <div className="ticket-selection">
    <label>
      Number of Tickets:
      <input
        type="number"
        value={tickets}
        onChange={(e) => setTickets(e.target.value)}
        min="1"
      />
    </label>
    <button className="book-button" onClick={handleBooking}>
      Book Now
    </button>
  </div>
</div>
  );
};

export default BookTickets;