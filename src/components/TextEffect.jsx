import React from "react"
import { motion, useReducedMotion } from "framer-motion"

/**
 * TextEffect component implementing the Framer RichTextNode motion spec:
 * - tokenization: 'character' | 'word'
 * - enter: opacity: 0, y: 10px, filter: blur(10px) -> opacity: 1, y: 0, filter: blur(0px)
 * - spring transition: duration 1s, bounce 0, delay 0.5s, stagger 0.05s
 */
export default function TextEffect({
    text,
    tokenization = "character", // 'character' | 'word'
    delay = 0.5,
    className = "",
    as: Component = "span",
}) {
    const reduceMotion = useReducedMotion()

    if (reduceMotion || !text) {
        return <Component className={className}>{text}</Component>
    }

    const tokens =
        tokenization === "word"
            ? text.split(" ")
            : text.split("")

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: delay,
                staggerChildren: 0.035, // spring-duration 1s 0 0.05s equivalent
            },
        },
    }

    const tokenVariants = {
        hidden: {
            opacity: 0,
            y: 10,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                duration: 1,
                bounce: 0,
            },
        },
    }

    return (
        <Component className={`framer-text-effect-container ${className}`}>
            <motion.span
                className="framer-text-tokens-wrap"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {tokens.map((token, index) => (
                    <motion.span
                        key={index}
                        variants={tokenVariants}
                        className="framer-text-token"
                        style={{ display: "inline-block", whiteSpace: "pre" }}
                    >
                        {token}
                        {tokenization === "word" && index < tokens.length - 1 ? "\u00A0" : ""}
                    </motion.span>
                ))}
            </motion.span>
        </Component>
    )
}
