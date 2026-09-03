import React from "react"
import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div>
                    <h2 className="footer-brand">Aperture</h2>
                    <p className="muted">
                        August Renner is a fashion and editorial photographer crafting precise, human-centered imagery
                        for campaigns, magazines, and independent labels.
                    </p>
                </div>
                <div>
                    <h3>Explore</h3>
                    <ul>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Legal</h3>
                    <ul>
                        <li>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/terms-and-conditions">Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Aperture · August Renner</p>
                <p>Berlin & London · Available internationally</p>
            </div>
        </footer>
    )
}