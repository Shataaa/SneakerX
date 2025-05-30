import React from "react";

export default function Title({ title }) {
    return (
        <span id="page-title" className="text-3xl font-semibold">
            {title}
        </span>
    );
}