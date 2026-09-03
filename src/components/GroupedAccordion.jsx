import React, { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Plus, Minus } from "lucide-react"

export default function GroupedAccordion({ items = [] }) {
    const [openIndex, setOpenIndex] = useState(0) // first open by default
    const reduceMotion = useReducedMotion()

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? -1 : idx)
    }

    return (
        <div className="grouped-accordion" role="region" aria-label="Frequently Asked Questions">
            {items.map((item, idx) => {
                const isOpen = openIndex === idx
                const triggerId = `faq-trigger-${item.id || idx}`
                const panelId = `faq-panel-${item.id || idx}`

                return (
                    <div
                        key={item.id || idx}
                        className={`accordion-item ${isOpen ? "accordion-item-open" : ""}`}
                    >
                        <button
                            type="button"
                            className="accordion-trigger"
                            id={triggerId}
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => toggle(idx)}
                        >
                            <span className="accordion-question">{item.question}</span>
                            <span className="accordion-circle-affordance" aria-hidden="true">
                                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                            </span>
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={triggerId}
                                    className="accordion-panel"
                                    initial={!reduceMotion ? { height: 0, opacity: 0 } : false}
                                    animate={!reduceMotion ? { height: "auto", opacity: 1 } : {}}
                                    exit={!reduceMotion ? { height: 0, opacity: 0 } : {}}
                                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="accordion-body">
                                        <p className="accordion-answer">{item.answer}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            })}
        </div>
    )
}
