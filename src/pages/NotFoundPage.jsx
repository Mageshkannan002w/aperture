import React from "react"
import { Link } from "react-router-dom"
import PageIntro from "../components/PageIntro"
import Reveal from "../components/Reveal"
export default function NotFoundPage() {
    return (
        <div className="page">
            <PageIntro
                eyebrow="404"
                title="This page is out of frame."
                body="The link may have changed, or the page may no longer exist."
            />
            <Reveal className="section cta-line">
                <Link to="/" className="button-pill">
                    Return home
                </Link>
                <Link to="/portfolio" className="button-pill button-outline">
                    View portfolio
                </Link>
            </Reveal>
        </div>
    )
}