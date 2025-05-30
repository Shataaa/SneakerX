import React from "react";
import Title from "./Title";
import Breadcrumb from "./Breadcrumb";
import ActionButton from "./ActionButton";

export default function PageHeader({ title, breadcrumb, children }) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            {/* Left Section */}
            <div id="pageheader-left" className="flex flex-col">
                {/* Title */}
                <Title title={title} />

                {/* Breadcrumb */}
                <Breadcrumb breadcrumb={breadcrumb} />
            </div>

            {/* Right Section */}
            <ActionButton>{children}</ActionButton>
        </div>
    );
}

