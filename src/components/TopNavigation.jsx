import React, { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"
import MasterButton from "./MasterButton"

function ApertureMark({ size = 26 }) {
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
    const [mobileOpen, setMobileOpen] = useState(false)
    const reduceMotion = useReducedMotion()
    const location = useLocation()

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/portfolio", label: "Portfolio" },
        { to: "/blog", label: "Blog" },
        { to: "/about", label: "About" },
    ]

    return (
        <header className="top-navigation-header">
            {/* Progressive backdrop blur */}
            <div className="top-nav-blur-layer" aria-hidden="true" />

            <div className="top-nav-inner">
                {/* Left identity */}
                <div className="top-nav-left">
                    <Link to="/" className="top-nav-brand" onClick={() => setMobileOpen(false)}>
                        <span className="brand-name">August Renner</span>
                        <span className="brand-role">Photographer</span>
                    </Link>
                </div>

                {/* Center aperture shutter mark */}
                <div className="top-nav-center">
                    <Link to="/" aria-label="Aperture Home" onClick={() => setMobileOpen(false)}>
                        <ApertureMark size={30} />
                    </Link>
                </div>

                {/* Right controls */}
                <div className="top-nav-right">
                    <nav className="desktop-inline-nav" aria-label="Primary site navigation">
                        {navLinks.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `top-nav-link ${isActive ? "top-nav-link-active" : ""}`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="desktop-cta-btn">
                        <MasterButton to="/contact" variant="dark">
                            Contact
                        </MasterButton>
                    </div>

                    {/* Mobile toggle button */}
                    <button
                        type="button"
                        className="mobile-nav-toggle-btn"
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-nav-drawer"
                        aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                        onClick={() => setMobileOpen((prev) => !prev)}
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile slide-down drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.nav
                        id="mobile-nav-drawer"
                        className="mobile-nav-drawer"
                        aria-label="Mobile site menu"
                        initial={!reduceMotion ? { opacity: 0, height: 0 } : false}
                        animate={!reduceMotion ? { opacity: 1, height: "auto" } : {}}
                        exit={!reduceMotion ? { opacity: 0, height: 0 } : {}}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="mobile-nav-links-list">
                            {navLinks.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `mobile-drawer-link ${isActive ? "mobile-drawer-link-active" : ""}`
                                    }
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `mobile-drawer-link mobile-drawer-contact ${isActive ? "mobile-drawer-link-active" : ""}`
                                }
                                onClick={() => setMobileOpen(false)}
                            >
                                Contact August
                            </NavLink>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}
export { ApertureMark }
