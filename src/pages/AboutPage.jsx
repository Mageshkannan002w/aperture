import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import SectionLabel from "../components/SectionLabel"
import MasterButton from "../components/MasterButton"
import CTASection from "../components/CTASection"
import TextEffect from "../components/TextEffect"
import { gearList, testimonials } from "../data/content"

export default function AboutPage() {
    const reduceMotion = useReducedMotion()
    const featuredTestimonial = testimonials[0]

    return (
        <div className="about-page-root">
            {/* Scroll marker */}
            <div id="about-scroll-marker" className="scroll-marker" aria-hidden="true" />

            {/* 1. HERO SECTION */}
            <section className="about-hero-section">
                <div className="about-hero-inner">
                    {/* Left: Circular Black-and-White Portrait */}
                    <div className="about-portrait-col">
                        <div className="about-circle-portrait-wrap">
                            <img
                                src="/images/august-portrait.svg"
                                alt="August Renner portrait"
                                className="about-circle-portrait-img"
                            />
                        </div>
                    </div>

                    {/* Right: Copy stack with label, heading with character text effect, concise bio, CTA */}
                    <div className="about-hero-copy-col">
                        <SectionLabel>About Me</SectionLabel>
                        <h1 className="about-hero-heading">
                            <TextEffect text="Hey, I’m August Renner" tokenization="character" delay={0.5} />
                        </h1>
                        <p className="about-hero-bio">
                            I’m a fashion, editorial, and commercial photographer based between Berlin and London. Over the past decade, I’ve dedicated my practice to creating image systems that feel authentic, calm, and enduring.
                        </p>
                        <div className="about-hero-actions">
                            <MasterButton to="/portfolio" variant="dark">
                                View portfolio
                            </MasterButton>
                            <MasterButton to="/contact" variant="light">
                                Get in touch
                            </MasterButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. EDITORIAL TEXT COLUMNS (matching FbAuh6ntu: opacity 0, y: 40, spring 1s 0.2s) */}
            <section className="about-narrative-section">
                <motion.div
                    className="about-narrative-grid"
                    initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                    whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: "spring", duration: 1, bounce: 0.2 }}
                >
                    {/* Left Column: Biography with Drop Cap */}
                    <div className="about-bio-column">
                        <h2 className="narrative-column-heading">The Practice</h2>
                        <p className="about-dropcap-paragraph">
                            <span className="about-dropcap">M</span>
                            y work balances architectural precision with human spontaneity. Rather than imposing rigid styling or relying on artificial post-production gimmicks, I build trust with subjects and teams on set to capture natural posture, tactile fabric drape, and unhurried emotional expression.
                        </p>
                        <p>
                            Every assignment begins with concept alignment. Together with fashion directors, stylists, and brand founders, we define lighting moods, pacing rhythms, and color palettes well before call time. This rigor protects creative spontaneity on the day.
                        </p>
                        <p>
                            Whether shooting in natural coastal daylight or controlled Parisian studio sets, my goal is to craft imagery that retains its visual clarity and emotional resonance long after seasonal campaigns conclude.
                        </p>
                    </div>

                    {/* Right Column: Featured Quote with Client Avatar */}
                    <div className="about-quote-column">
                        <div className="about-testimonial-box">
                            <span className="quote-mark" aria-hidden="true">“</span>
                            <blockquote className="about-quote-text">
                                {featuredTestimonial.quote}
                            </blockquote>
                            <div className="about-quote-author">
                                <img
                                    src={featuredTestimonial.avatar}
                                    alt={featuredTestimonial.name}
                                    className="about-quote-avatar"
                                />
                                <div className="about-quote-author-info">
                                    <strong>{featuredTestimonial.name}</strong>
                                    <span>{featuredTestimonial.role}, {featuredTestimonial.company}</span>
                                </div>
                            </div>
                        </div>

                        <div className="about-awards-box">
                            <h3 className="awards-title">Selected Editorial Features</h3>
                            <p className="awards-list">Aster Magazine · Nōr Studio Paris · Pale Form Lookbook · Kinfolk Gallery · European Fashion Honors 2024</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 3. GEAR & TOOLS SECTION (matching CrJBenxOD: opacity 0, y: 40, spring 1s 0.2s) */}
            <section className="about-gear-section">
                <motion.div
                    className="section-center-header"
                    initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                    whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", duration: 1, bounce: 0.2 }}
                >
                    <SectionLabel>Equipment</SectionLabel>
                    <h2 className="section-title">Gear and tools I use</h2>
                    <p className="section-subtitle">
                        A reliable, minimalist location kit optimized for agile movement, tonal nuance, and technical consistency.
                    </p>
                </motion.div>

                <motion.div
                    className="gear-table-container"
                    initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                    whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ type: "spring", duration: 1, bounce: 0.2, delay: 0.1 }}
                >
                    {gearList.map((g, idx) => (
                        <div key={idx} className="gear-table-row">
                            <span className="gear-category">{g.category}</span>
                            <strong className="gear-item">{g.item}</strong>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* 4. CLOSING CTA */}
            <CTASection
                title="Let’s create work with clarity and staying power"
                subtitle="Available for worldwide commissions, seasonal lookbooks, and campaign direction."
            />
        </div>
    )
}