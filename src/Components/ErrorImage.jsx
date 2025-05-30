import React from "react";

export default function ErrorImage({ src, alt }) {
    return (
        <div className="flex items-center justify-center">
            <img src={src} alt={alt} className="w-64 md:w-80 h-auto" />
        </div>
    );
}