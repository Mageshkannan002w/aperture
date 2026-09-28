import React from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, useReducedMotion } from "framer-motion"

export function ApertureMark({ size = 26 }) {
    const reduceMotion = useReducedMotion()

    return (
        <motion.div
            className="aperture-shutter-mark"
            style={{ width: size, height: size }}
            aria-hidden="true"
            whileHover={!reduceMotion ? { rotate: 180 } : {}}
            transition={{ type: "spring", duration: 1, bounce: 0.2 }}
        >
            <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.75">
                <circle cx="12" cy="12" r="10" />
                <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                <line x1="9.69" y1="8" x2="21.17" y2="8" />
                <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                <line x1="14.31" y1="16" x2="2.83" y2="16" />
                <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
            </svg>
        </motion.div>
    )
}

export default function TopNavigation() {
    const location = useLocation()
    const isHome = location.pathname === "/"

    return (
        <header className={`top-navigation-header ${isHome ? "top-nav-on-sky" : ""}`}>
            {/* Soft progressive backdrop blur */}
            <div className="top-nav-blur-layer" aria-hidden="true" />

            <div className="top-nav-inner top-nav-inner--minimal">
                {/* Brand identity on the top left */}
                <div className="top-nav-left">
                    <Link to="/" className="top-nav-brand">
                        <span className="brand-name">August Renner</span>
                        <span className="brand-role">Photographer</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}
