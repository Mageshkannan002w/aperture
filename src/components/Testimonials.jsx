import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Star } from "lucide-react"

export default function Testimonials({ items = [] }) {
    const reduceMotion = useReducedMotion()

    return (
        <div className="testimonials-wrap">
            <div className="testimonials-grid">
                {items.map((t, idx) => (
                    <motion.div
                        key={t.id || idx}
                        className="testimonial-card"
                        initial={!reduceMotion ? { opacity: 0, y: 30 } : {}}
                        whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="testimonial-stars" aria-label="5 star rating">
                            {[...Array(5)].map((_, s) => (
                                <Star
                                    key={s}
                                    size={15}
                                    className="star-icon"
                                    fill="var(--star-accent, #F97316)"
                                    color="var(--star-accent, #F97316)"
                                />
                            ))}
                        </div>
                        <blockquote className="testimonial-quote">
                            “{t.quote}”
                        </blockquote>
                        <div className="testimonial-author">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="testimonial-avatar"
                            />
                            <div className="testimonial-author-meta">
                                <strong className="testimonial-name">{t.name}</strong>
                                <span className="testimonial-role">
                                    {t.role}, {t.company}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
