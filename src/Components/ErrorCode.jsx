import React from "react";

export default function ErrorCode({ code }) {
  return (
    <h1 className="font-arimo text-5xl md:text-6xl font-bold text-center mb-4">
      {code}
    </h1>
  );
}
