import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"
export default function MediaCard({ to, image, title, meta, badge }) {
    const reduceMotion = useReducedMotion()
    return (
        <motion.article
            className="media-card"
            whileHover={reduceMotion ? {} : { y: -4, scale: 1.01 }}
            transition={{ duration: 0.25 }}
        >
            <Link to={to} className="media-link" aria-label={`Open ${title}`}>
                <div className="media-frame">
                    <img src={image} alt={title} />
                    <span className="aperture-corner" aria-hidden="true" />
                </div>
                <div className="media-copy">
                    <p className="pill">{badge}</p>
                    <h3>{title}</h3>
                    <p className="muted">{meta}</p>
                </div>
            </Link>
        </motion.article>
    )
}