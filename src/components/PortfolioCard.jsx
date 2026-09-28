import React from "react"
import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "framer-motion"
import ImageFrame from "./ImageFrame"

export default function PortfolioCard({ project, badgeText = "Portfolio", priority = false }) {
    const reduceMotion = useReducedMotion()

    return (
        <motion.article
            className="portfolio-card"
            whileHover={!reduceMotion ? { y: -4 } : {}}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
        >
            <Link to={`/portfolio/${project.slug}`} className="portfolio-card-link" aria-label={`View ${project.title}`}>
                <div className="portfolio-card-image-wrap">
                    <ImageFrame
                        src={project.cover}
                        alt={project.title}
                        aspectRatio="4/3"
                        innerRadius={12}
                        cornersVariant="all"
                        hoverScale={true}
                    />
                </div>
                <div className="portfolio-card-meta">
                    <div className="portfolio-card-title-group">
                        <h3 className="portfolio-card-title">{project.title}</h3>
                        <p className="portfolio-card-date">{project.date}</p>
                    </div>
                    <span className="category-badge">{badgeText}</span>
                </div>
            </Link>
        </motion.article>
    )
}
