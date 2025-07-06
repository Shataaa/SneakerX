import React from "react";

export default function Title({ title }) {
  return (
    <span id="page-title" className="font-arimo text-3xl font-semibold">
      {title}
    </span>
  );
}
