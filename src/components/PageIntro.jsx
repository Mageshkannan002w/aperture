import React from "react"
export default function PageIntro({ eyebrow, title, body }) {
    return (
        <section className="page-intro">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="intro-copy">{body}</p>
        </section>
    )
}