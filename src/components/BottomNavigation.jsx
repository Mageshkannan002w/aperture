import React, { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ApertureMark } from "./TopNavigation"

export default function BottomNavigation() {
    const { scrollY } = useScroll()
    const location = useLocation()
    const reduceMotion = useReducedMotion()
    const [visible, setVisible] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    // Check path: on /portfolio and /about, or after scrolling 350px on any page
    useEffect(() => {
        const updateVisibility = () => {
            const currentScroll = window.scrollY
            const isTargetPage = location.pathname.startsWith("/portfolio") || location.pathname === "/about"
            if (isTargetPage || currentScroll > 320) {
                setVisible(true)
            } else {
                setVisible(false)
                setMobileOpen(false)
            }
        }

        updateVisibility()
        window.addEventListener("scroll", updateVisibility, { passive: true })
        return () => window.removeEventListener("scroll", updateVisibility)
    }, [location.pathname])

    const links = [
        { to: "/", label: "Home" },
        { to: "/portfolio", label: "Portfolio" },
        { to: "/blog", label: "Blog" },
        { to: "/about", label: "About Me" },
        { to: "/contact", label: "Contact" },
    ]

    return (
        <AnimatePresence>
            {visible && (
                <motion.nav
                    className="floating-bottom-nav-wrap"
                    aria-label="Floating quick navigation"
                    initial={!reduceMotion ? { opacity: 0, y: 150 } : false}
                    animate={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                    exit={!reduceMotion ? { opacity: 0, y: 150 } : {}}
                    transition={{ duration: 0.6, ease: [0.87, 0.07, 0.43, 0.84] }}
                >
                    <div className={`floating-bottom-pill ${mobileOpen ? "floating-pill-mobile-open" : ""}`}>
                        {/* Mobile open link drawer inside pill */}
                        {mobileOpen && (
                            <div className="floating-mobile-links-tray">
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
                            </div>
                        )}

                        <div className="floating-nav-bar-row">
                            <Link
                                to="/"
                                className="floating-nav-mark-link"
                                aria-label="Return home"
                                onClick={() => setMobileOpen(false)}
                            >
                                <ApertureMark size={22} />
                            </Link>

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

                            {/* Mobile pill toggle */}
                            <button
                                type="button"
                                className="floating-mobile-toggle"
                                aria-label={mobileOpen ? "Close bottom navigation" : "Open bottom navigation"}
                                aria-expanded={mobileOpen}
                                onClick={() => setMobileOpen((v) => !v)}
                            >
                                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
                            </button>
                        </div>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    )
}
