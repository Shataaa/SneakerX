import React from "react";

export default function ErrorBackground({ children }) {
  return (
    <div
      className="font-arimo flex items-center justify-center min-h-screen bg-[#1A1A40] text-white px-4"
      style={{ backgroundColor: "#1A1A40" }}
    >
      {children}
    </div>
  );
}
