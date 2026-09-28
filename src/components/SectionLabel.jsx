import React from "react"

export default function SectionLabel({ children, className = "" }) {
    return (
        <span className={`section-label-pill ${className}`}>
            {children}
        </span>
    )
}
