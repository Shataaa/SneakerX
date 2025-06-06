import React, { useState, useEffect } from "react";

export default function Quotes() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        if (data.slip && data.slip.advice) {
          setQuote(data.slip.advice);
        }
      })
      .catch((err) => console.error("Error fetching quote:", err));
  }, []);

  return (
    <div className="p-4">
      {quote && (
        <div className="mb-4 p-4 bg-blue-100 rounded-lg max-w-xl mx-auto">
          <p className="italic">"{quote}"</p>
          <p className="text-right font-semibold mt-2">- Today's Quote</p>
        </div>
      )}
    </div>
  );
}
