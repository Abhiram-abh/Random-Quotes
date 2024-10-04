// QuoteCard.js
import React from 'react';
import './Quotelist.css'; // Import the CSS for styling the QuoteCard

const Quotelist = ({ quote, saveQuote }) => {
    return (
        <div className="quote-card">
            <p>{quote}</p>
            <button onClick={saveQuote}>Save Quote</button>
        </div>
    );
};

export default Quotelist; // Export the component to be used in other files
