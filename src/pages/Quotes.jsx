import React, { useState, useEffect } from "react";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://api.quotable.io/quotes?tags=leonardo-da-vinci")
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          setQuote(data.results[0]);
        }
      })
      .catch((err) => console.error("Error fetching quote:", err));
  }, []);

  return (
    <div className="p-4">
      {quote && (
        <div className="mb-4 p-4 bg-blue-100 rounded-lg">
          <p className="italic">"{quote.content}"</p>
          <p className="text-right font-semibold mt-2">- {quote.author}</p>
        </div>
      )}
    </div>
  );
}
