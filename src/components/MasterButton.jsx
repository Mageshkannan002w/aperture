import React from "react"
import { Link } from "react-router-dom"

export default function MasterButton({
    children,
    to,
    onClick,
    type = "button",
    variant = "dark", // 'dark' | 'light' | 'dark-text' | 'light-text'
    className = "",
    ariaLabel,
    disabled = false,
}) {
    const content = (
        <span className="master-button-swap-wrap">
            <span className="master-button-label master-button-primary">{children}</span>
            <span className="master-button-label master-button-secondary" aria-hidden="true">
                {children}
            </span>
        </span>
    )

    const fullClassName = `master-button master-button-${variant} ${className}`.trim()

    if (to) {
        return (
            <Link to={to} className={fullClassName} aria-label={ariaLabel} onClick={onClick}>
                {content}
            </Link>
        )
    }

    return (
        <button
            type={type}
            className={fullClassName}
            onClick={onClick}
            aria-label={ariaLabel}
            disabled={disabled}
        >
            {content}
        </button>
    )
}
