import React, { useMemo, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import Footer from "./Footer"
const links = [
    ["/portfolio", "Portfolio"],
    ["/blog", "Blog"],
    ["/about", "About"],
]
function ApertureMark() {
    return (
        <div className="aperture-mark" aria-hidden="true">
            <span />
        </div>
    )
}
export default function AppShell({ children }) {
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const reduceMotion = useReducedMotion()
    const closeMenu = useMemo(() => () => setOpen(false), [])
    return (
        <div className="site-wrap">
            <a href="#main-content" className="skip-link">
                Skip to content
            </a>
            <header className="topbar">
                <div className="topbar-left">
                    <Link to="/" className="brand-link" onClick={closeMenu}>
                        <span className="brand-title">Aperture</span>
                        <span className="brand-subtitle">August Renner · Photographer</span>
                    </Link>
                </div>
                <ApertureMark />
                <div className="topbar-right">
                    <nav className="desktop-nav" aria-label="Primary navigation">
                        {links.map(([to, label]) => (
                            <NavLink key={to} to={to} className="nav-link">
                                {label}
                            </NavLink>
                        ))}
                    </nav>
                    <Link to="/contact" className="button-pill">
                        Contact
                    </Link>
                    <button
                        className="menu-toggle"
                        aria-expanded={open}
                        aria-controls="mobile-nav"
                        aria-label="Toggle menu"
                        onClick={() => setOpen((v) => !v)}
                    >
                        Menu
                    </button>
                </div>
            </header>
            <AnimatePresence>
                {open && (
                    <motion.nav
                        id="mobile-nav"
                        className="mobile-nav"
                        aria-label="Mobile menu"
                        initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                        animate={reduceMotion ? {} : { opacity: 1, height: "auto" }}
                        exit={reduceMotion ? {} : { opacity: 0, height: 0 }}
                    >
                        {links.map(([to, label]) => (
                            <NavLink key={to} to={to} className="mobile-nav-link" onClick={closeMenu}>
                                {label}
                            </NavLink>
                        ))}
                        <NavLink to="/contact" className="mobile-nav-link" onClick={closeMenu}>
                            Contact
                        </NavLink>
                    </motion.nav>
                )}
            </AnimatePresence>
            <main id="main-content" className="main-content" key={location.pathname}>
                {children}
            </main>
            <Footer />
        </div>
    )
}