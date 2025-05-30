import React from "react";

export default function Breadcrumb({ breadcrumb }) {
    return (
        <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
            {Array.isArray(breadcrumb) ? (
                breadcrumb.map((item, index) => (
                    <React.Fragment key={index}>
                        <span
                            id={`breadcrumb-${index}`}
                            className={`text-gray-500 ${index === breadcrumb.length - 1 ? "font-bold" : ""}`}
                        >
                            {item}
                        </span>
                        {index < breadcrumb.length - 1 && (
                            <span id={`breadcrumb-separator-${index}`} className="text-gray-500">
                                /
                            </span>
                        )}
                    </React.Fragment>
                ))
            ) : (
                <span id="breadcrumb-single" className="text-gray-500">
                    {breadcrumb}
                </span>
            )}
        </div>
    );
}