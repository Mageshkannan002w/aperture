import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Corners from "./Corners"

export default function ServiceRow({ service, index = 0 }) {
    const reduceMotion = useReducedMotion()

    return (
        <motion.div
            className="service-card"
            initial={!reduceMotion ? { opacity: 0, y: 30 } : {}}
            whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={!reduceMotion ? { y: -3 } : {}}
        >
            <div className="service-card-thumb-wrap">
                <img
                    src={service.thumbnail}
                    alt={service.title}
                    className="service-card-thumb"
                />
                <Corners variant="top" />
            </div>
            <div className="service-card-info">
                <div className="service-card-header">
                    <span className="category-badge">{service.category}</span>
                    <h3 className="service-card-title">{service.title}</h3>
                </div>
                <p className="service-card-desc">{service.description}</p>
                <ul className="service-feature-list">
                    {service.features.map((feat, i) => (
                        <li key={i} className="service-feature-item">
                            <span className="service-bullet" aria-hidden="true" />
                            <span>{feat}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="service-card-action" aria-hidden="true">
                <div className="service-icon-circle">
                    <ArrowUpRight size={18} />
                </div>
            </div>
        </motion.div>
    )
}
