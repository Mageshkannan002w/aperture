import React, { startTransition, useMemo, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
export default function FAQAccordion({ items }) {
    const [openIndex, setOpenIndex] = useState(0)
    const reduceMotion = useReducedMotion()
    const safeItems = useMemo(() => items || [], [items])
    return (
        <section className="faq">
            {safeItems.map((item, i) => {
                const open = openIndex === i
                return (
                    <div className="faq-item" key={item.question}>
                        <button
                            className="faq-trigger"
                            aria-expanded={open}
                            aria-controls={`faq-panel-${i}`}
                            id={`faq-trigger-${i}`}
                            onClick={() => startTransition(() => setOpenIndex(open ? -1 : i))}
                        >
                            <span>{item.question}</span>
                            <span aria-hidden="true">{open ? "−" : "+"}</span>
                        </button>
                        <AnimatePresence initial={false}>
                            {open && (
                                <motion.div
                                    id={`faq-panel-${i}`}
                                    role="region"
                                    aria-labelledby={`faq-trigger-${i}`}
                                    className="faq-panel"
                                    initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                                    animate={reduceMotion ? {} : { opacity: 1, height: "auto" }}
                                    exit={reduceMotion ? {} : { opacity: 0, height: 0 }}
                                >
                                    <p className="muted">{item.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            })}
        </section>
    )
}