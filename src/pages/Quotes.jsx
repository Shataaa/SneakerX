import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Quotes() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        if (res.data.slip && res.data.slip.advice) {
          setQuote(res.data.slip.advice);
        }
      })
      .catch((err) => console.error("Error fetching quote:", err));
  }, []);

  return (
    <div className="p-4">
      {quote && (
        <div className="font-arimo mb-4 p-4 bg-teal-700 rounded-lg max-w-xl mx-auto">
          <p className="font-arimo italic">"{quote}"</p>
          <p className="font-arimo text-right font-semibold mt-2">
            - Today's Quote
          </p>
        </div>
      )}
    </div>
  );
}
