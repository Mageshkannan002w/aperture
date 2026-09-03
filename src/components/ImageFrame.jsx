import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import Corners from "./Corners"

export default function ImageFrame({
    src,
    alt = "",
    className = "",
    aspectRatio = "4/5",
    cornersVariant = "all", // 'all' | 'top' | 'none'
    innerRadius = 16,
    hoverScale = true,
}) {
    const reduceMotion = useReducedMotion()

    return (
        <div
            className={`image-frame-wrapper ${className}`}
            style={{ borderRadius: `${innerRadius}px`, aspectRatio }}
        >
            <motion.img
                src={src}
                alt={alt}
                loading="lazy"
                className="image-frame-img"
                style={{ borderRadius: `${innerRadius}px` }}
                whileHover={!reduceMotion && hoverScale ? { scale: 1.03 } : {}}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            />
            {cornersVariant !== "none" && <Corners variant={cornersVariant} />}
        </div>
    )
}
