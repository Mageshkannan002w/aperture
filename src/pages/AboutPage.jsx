import React from "react"
import { Link } from "react-router-dom"
import PageIntro from "../components/PageIntro"
import Reveal from "../components/Reveal"
import { imageBank } from "../data/content"
export default function AboutPage() {
    return (
        <div className="page">
            <PageIntro
                eyebrow="About"
                title="A visual practice built on precision and restraint."
                body="I’m August Renner, a fashion and editorial photographer working across Berlin, London, and international locations."
            />
            <Reveal className="section split">
                <div>
                    <h2>Approach</h2>
                    <p className="muted">
                        My work balances clean direction with human spontaneity. I focus on shape, light behavior, and
                        styling movement to produce photographs that remain relevant beyond seasonal trends.
                    </p>
                    <p className="muted">
                        Each assignment starts with concept alignment, then a production plan that protects both
                        creativity and efficiency on set.
                    </p>
                </div>
                <div className="stacked-cards">
                    <div className="surface-card">
                        <h3>Core Services</h3>
                        <ul className="service-list">
                            <li>Editorial and campaign photography</li>
                            <li>Lookbook and e-commerce direction</li>
                            <li>Visual treatment and post-production supervision</li>
                        </ul>
                    </div>
                    <div className="surface-card">
                        <h3>Selected Clients</h3>
                        <p className="muted">Aster Magazine, Nōr Studio, Pale Form, and independent luxury labels.</p>
                    </div>
                </div>
            </Reveal>
            <Reveal className="section collage">
                <img src={imageBank.hero1} alt="Backstage fashion portrait" />
                <img src={imageBank.hero3} alt="Model portrait in natural light" />
                <img src={imageBank.hero5} alt="Editorial framing detail" />
            </Reveal>
            <Reveal className="section cta-line">
                <h2>Let’s create work with clarity and staying power.</h2>
                <Link to="/contact" className="button-pill">
                    Contact August
                </Link>
            </Reveal>
        </div>
    )
}