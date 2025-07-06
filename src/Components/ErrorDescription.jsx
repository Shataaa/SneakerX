import React from "react";

export default function ErrorDescription({ description }) {
  return (
    <p className="font-arimo text-lg md:text-xl text-gray-300 leading-relaxed max-w-md text-center">
      {description}
    </p>
  );
}
