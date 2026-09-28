import React, { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ApertureMark } from "./TopNavigation"

export default function Preloader({ onComplete }) {
    const [visible, setVisible] = useState(true)
    const reduceMotion = useReducedMotion()

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
            if (onComplete) onComplete()
        }, 2600)

        return () => clearTimeout(timer)
    }, [onComplete])

    if (reduceMotion) return null

    // Framer preloader layers matching ZfkAuvR24
    // Tween ease [0.56, 0.22, 0.05, 0.99] duration 2.1s with staggered delays:
    // 5: 0s, 1: 0.1s, 4: 0.2s, 3: 0.3s, 2: 0.4s, Shutter: 0.5s
    const items = [
        { label: "05", delay: 0.0 },
        { label: "01", delay: 0.1 },
        { label: "04", delay: 0.2 },
        { label: "03", delay: 0.3 },
        { label: "02", delay: 0.4 },
    ]

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="site-preloader-overlay"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: {
                            duration: 0.9,
                            ease: [0.96, -0.02, 0.38, 1.01],
                        },
                    }}
                >
                    <div className="preloader-center-content">
                        {/* Shutter mark: enter y: 640, rotate: 180, delay: 0.5s */}
                        <motion.div
                            initial={{ opacity: 0, y: 80, rotate: 180 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            transition={{
                                duration: 1.8,
                                delay: 0.5,
                                ease: [0.56, 0.22, 0.05, 0.99],
                            }}
                        >
                            <ApertureMark size={48} />
                        </motion.div>

                        <motion.div
                            className="preloader-text-group"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.5,
                                delay: 0.3,
                                ease: [0.56, 0.22, 0.05, 0.99],
                            }}
                        >
                            <span className="preloader-title">AUGUST RENNER</span>
                            <span className="preloader-subtitle">Aperture Photography</span>
                        </motion.div>

                        {/* Staggered Frame indicators matching 5, 1, 4, 3, 2 */}
                        <div className="preloader-stagger-indicators" aria-hidden="true">
                            {items.map((it) => (
                                <motion.span
                                    key={it.label}
                                    className="preloader-num-dot"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 1.6,
                                        delay: it.delay,
                                        ease: [0.56, 0.22, 0.05, 0.99],
                                    }}
                                >
                                    {it.label}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
