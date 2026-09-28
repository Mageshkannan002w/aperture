import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import TopNavigation from "./TopNavigation"
import BottomNavigation from "./BottomNavigation"
import Footer from "./Footer"

export default function AppShell({ children }) {
    const location = useLocation()

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    }, [location.pathname])

    return (
        <div className="site-app-wrapper">
            <a href="#main-content" className="skip-to-content-link">
                Skip to main content
            </a>

            {/* 1. Absolute Top Navigation */}
            <TopNavigation />

            {/* 2. Routed Page Content */}
            <main id="main-content" className="site-main-content">
                {children}
            </main>

            {/* 3. Shared Footer */}
            <Footer />

            {/* 4. Fixed Bottom Navigation */}
            <BottomNavigation />
        </div>
    )
}