import React, { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ApertureMark } from "./TopNavigation"

export default function BottomNavigation() {
    const reduceMotion = useReducedMotion()
    const [mobileOpen, setMobileOpen] = useState(false)
    const location = useLocation()

    const links = [
        { to: "/", label: "Home" },
        { to: "/portfolio", label: "Portfolio" },
        { to: "/blog", label: "Blog" },
        { to: "/about", label: "About" },
    ]

    return (
        <div className="floating-bottom-nav-wrap">
            <nav
                className={`floating-bottom-pill ${mobileOpen ? "floating-pill-mobile-open" : ""}`}
                aria-label="Site navigation"
            >
                {/* Mobile tray */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            className="floating-mobile-links-tray"
                            initial={!reduceMotion ? { opacity: 0, y: 10, height: 0 } : {}}
                            animate={!reduceMotion ? { opacity: 1, y: 0, height: "auto" } : {}}
                            exit={!reduceMotion ? { opacity: 0, y: 10, height: 0 } : {}}
                            transition={{ duration: 0.25 }}
                        >
                            {links.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `floating-nav-link ${isActive ? "floating-nav-link-active" : ""}`
                                    }
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `floating-nav-link floating-nav-contact ${isActive ? "floating-nav-link-active" : ""}`
                                }
                                onClick={() => setMobileOpen(false)}
                            >
                                Contact
                            </NavLink>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main bottom bar row */}
                <div className="floating-nav-bar-row">
                    <Link
                        to="/"
                        className="floating-nav-mark-link"
                        aria-label="Return home"
                        onClick={() => setMobileOpen(false)}
                    >
                        <ApertureMark size={22} />
                    </Link>

                    <div className="floating-nav-divider" />

                    {/* Desktop link group */}
                    <div className="floating-desktop-links-group">
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `floating-nav-link ${isActive ? "floating-nav-link-active" : ""}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="floating-nav-cta">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `floating-contact-btn ${isActive ? "floating-contact-btn--active" : ""}`
                            }
                        >
                            Contact
                        </NavLink>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        className="floating-mobile-toggle"
                        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </nav>
        </div>
    )
}
