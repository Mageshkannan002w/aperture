import React from "react"

export default function Corners({ variant = "all", className = "" }) {
    return (
        <div className={`camera-corners camera-corners-${variant} ${className}`} aria-hidden="true">
            <span className="corner corner-tl" />
            <span className="corner corner-tr" />
            {variant === "all" && (
                <>
                    <span className="corner corner-bl" />
                    <span className="corner corner-br" />
                </>
            )}
        </div>
    )
}
