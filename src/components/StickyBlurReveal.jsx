import React, { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

function Word({ word, index, total, progress, reduceMotion }) {
    // Distribute unblurring across scroll progress [0, 0.85]
    // Early words start sharp or transition early; later words transition later
    const start = Math.max(0, (index / total) * 0.8)
    const end = Math.min(1, start + 0.12)

    const opacity = useTransform(progress, [start, end], [0.2, 1])
    const blur = useTransform(progress, [start, end], [5, 0])
    const filter = useTransform(blur, (v) => `blur(${v}px)`)

    if (reduceMotion) {
        return <span className="blur-reveal-word">{word}&nbsp;</span>
    }

    return (
        <motion.span
            className="blur-reveal-word"
            style={{
                opacity,
                filter,
                display: "inline-block",
                willChange: "filter, opacity",
            }}
        >
            {word}&nbsp;
        </motion.span>
    )
}

export default function StickyBlurReveal({
    text = "Every photograph should make an impact. I capture moments that blend artistry, storytelling, and emotion to create visuals that stand out.",
    scrollProgress,
}) {
    const reduceMotion = useReducedMotion()
    const words = text.split(" ")

    return (
        <h2 className="sticky-blur-heading">
            {words.map((w, idx) => (
                <Word
                    key={`${w}-${idx}`}
                    word={w}
                    index={idx}
                    total={words.length}
                    progress={scrollProgress}
                    reduceMotion={reduceMotion}
                />
            ))}
        </h2>
    )
}
