import React from "react"
import { motion, useReducedMotion } from "framer-motion"

export default function PolaroidStack({
    images = [],
    variant = "cta", // 'radial' | 'cta' | 'footer'
    className = "",
}) {
    const reduceMotion = useReducedMotion()

    if (variant === "radial") {
        return (
            <div className={`polaroid-radial-container ${className}`} aria-hidden="true">
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        className={`polaroid-card polaroid-radial-${idx + 1}`}
                        animate={
                            !reduceMotion
                                ? {
                                      y: [0, -8, 0],
                                      rotate: [idx % 2 === 0 ? -2 : 2, idx % 2 === 0 ? 1 : -1, idx % 2 === 0 ? -2 : 2],
                                  }
                                : {}
                        }
                        transition={{
                            duration: 5 + idx,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="polaroid-photo-frame">
                            <img src={img.src || img} alt="" className="polaroid-img" />
                        </div>
                        {img.caption && <span className="polaroid-caption">{img.caption}</span>}
                    </motion.div>
                ))}
            </div>
        )
    }

    // Three overlapping cards (central forward, side cards gently tilted)
    return (
        <div className={`polaroid-trio-container ${className}`} aria-hidden="true">
            {images.slice(0, 3).map((img, idx) => {
                const isCenter = idx === 1
                return (
                    <motion.div
                        key={idx}
                        className={`polaroid-trio-card ${
                            isCenter ? "polaroid-trio-center" : idx === 0 ? "polaroid-trio-left" : "polaroid-trio-right"
                        }`}
                        whileHover={!reduceMotion ? { y: -8, scale: 1.02 } : {}}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="polaroid-photo-frame">
                            <img src={img.src || img} alt="" className="polaroid-img" />
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}
