import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import SectionLabel from "../components/SectionLabel"
import PortfolioCard from "../components/PortfolioCard"
import CTASection from "../components/CTASection"
import TextEffect from "../components/TextEffect"
import { portfolioProjects } from "../data/content"

export default function PortfolioPage() {
    const reduceMotion = useReducedMotion()

    return (
        <div className="portfolio-page-root">
            {/* Scroll target marker for navigation activation */}
            <div id="portfolio-scroll-marker" className="scroll-marker" aria-hidden="true" />

            <section className="portfolio-index-hero">
                <div className="portfolio-intro-center">
                    <SectionLabel>Portfolio</SectionLabel>
                    
                    {/* Framer RichTextNode textEffect matching KopxyThOu: tokenization character, delay 0.5s */}
                    <h1 className="page-large-heading">
                        <TextEffect text="Browse my work" tokenization="character" delay={0.5} />
                    </h1>

                    <p className="page-large-subtitle">
                        A curated selection of commercial campaigns, magazine editorials, and design lookbooks crafted across Berlin, London, and international locations.
                    </p>
                </div>

                {/* Stacked list of extra-large project cards matching spring-duration 0.4s 0.2 0s */}
                <div className="portfolio-stacked-list">
                    {portfolioProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            className="portfolio-stacked-item"
                            initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                            whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                type: "spring",
                                duration: 1,
                                bounce: 0.3,
                                delay: idx * 0.08,
                            }}
                        >
                            <PortfolioCard project={project} priority={idx === 0} />
                        </motion.div>
                    ))}
                </div>
            </section>

            <CTASection
                title="Commission your next photography story"
                subtitle="Reach out to check availability for fashion campaigns, editorial features, and portrait commissions."
            />
        </div>
    )
}