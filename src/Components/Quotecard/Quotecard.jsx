// QuoteList.js
import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';
import './Quotecard.css'// Import your CSS file for the list

const Quotecard = () => {
    const [quote, setQuote] = useState('');
    const [savedQuotes, setSavedQuotes] = useState([]);

    const fetchQuote = async () => {
        const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
        const data = await response.json();
        setQuote(data[0]);
    };

    const saveQuote = () => {
        setSavedQuotes((prevQuotes) => [...prevQuotes, quote]);
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="quote-container">
            <h2>Random Quote</h2>
            <QuoteCard quote={quote} saveQuote={saveQuote} />
            <h2>Saved Quotes</h2>
            <ul>
                {savedQuotes.length > 0 ? (
                    savedQuotes.map((q, index) => <li key={index}>{q}</li>)
                ) : (
                    <li>No quotes saved yet.</li>
                )}
            </ul>
        </div>
    );
};

export default Quotecard;
