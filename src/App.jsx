import React from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import AppShell from "./components/AppShell"
import HomePage from "./pages/HomePage"
import PortfolioPage from "./pages/PortfolioPage"
import PortfolioDetailPage from "./pages/PortfolioDetailPage"
import BlogPage from "./pages/BlogPage"
import BlogDetailPage from "./pages/BlogDetailPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import TermsPage from "./pages/TermsPage"
import NotFoundPage from "./pages/NotFoundPage"
function AnimatedPage({ children }) {
    const reduceMotion = useReducedMotion()
    return (
        <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            exit={reduceMotion ? {} : { opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    )
}
export default function App() {
    const location = useLocation()
    return (
        <AppShell>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
                    <Route path="/portfolio" element={<AnimatedPage><PortfolioPage /></AnimatedPage>} />
                    <Route path="/portfolio/:slug" element={<AnimatedPage><PortfolioDetailPage /></AnimatedPage>} />
                    <Route path="/blog" element={<AnimatedPage><BlogPage /></AnimatedPage>} />
                    <Route path="/blog/:slug" element={<AnimatedPage><BlogDetailPage /></AnimatedPage>} />
                    <Route path="/about" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
                    <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
                    <Route path="/privacy-policy" element={<AnimatedPage><PrivacyPolicyPage /></AnimatedPage>} />
                    <Route path="/terms-and-conditions" element={<AnimatedPage><TermsPage /></AnimatedPage>} />
                    <Route path="/404" element={<AnimatedPage><NotFoundPage /></AnimatedPage>} />
                    <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
            </AnimatePresence>
        </AppShell>
    )
}