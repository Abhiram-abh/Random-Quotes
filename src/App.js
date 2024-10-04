import React, { useState, useEffect } from 'react';
import './App.css'; // Optional, for styling

function App() {
  const [quote, setQuote] = useState(''); // State to store the fetched quote

  // Function to fetch a random quote from the API
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      const data = await response.json();
      setQuote(data[0]); // Store the fetched quote in the state
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  };

  // Fetch a quote when the component first renders
  useEffect(() => {
    fetchQuote(); 
  }, []);

  return (
    <div className="App">
      <h1>Random Quote</h1>
      <p>{quote}</p>
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
}

export default App;
