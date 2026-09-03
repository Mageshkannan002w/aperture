import React, { startTransition, useMemo, useState } from "react"
import PageIntro from "../components/PageIntro"
import Reveal from "../components/Reveal"
export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "Editorial",
        message: "",
    })
    const [submitted, setSubmitted] = useState(false)
    const projectTypes = useMemo(() => ["Editorial", "Campaign", "Lookbook", "Portrait"], [])
    function onChange(event) {
        const { name, value } = event.target
        startTransition(() => {
            setFormData((prev) => ({ ...prev, [name]: value }))
        })
    }
    function onSubmit(event) {
        event.preventDefault()
        startTransition(() => {
            setSubmitted(true)
            setFormData({
                name: "",
                email: "",
                projectType: "Editorial",
                message: "",
            })
        })
    }
    return (
        <div className="page">
            <PageIntro
                eyebrow="Contact"
                title="Tell me about your upcoming photography project."
                body="Share your concept, timeline, and production context. I’ll reply with availability and a tailored approach."
            />
            <Reveal className="section split contact-layout">
                <form className="contact-form surface-card" onSubmit={onSubmit} aria-label="Contact form">
                    <label>
                        Name
                        <input
                            required
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={onChange}
                            autoComplete="name"
                        />
                    </label>
                    <label>
                        Email
                        <input
                            required
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={onChange}
                            autoComplete="email"
                        />
                    </label>
                    <label>
                        Project Type
                        <select name="projectType" value={formData.projectType} onChange={onChange}>
                            {projectTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Message
                        <textarea
                            required
                            name="message"
                            value={formData.message}
                            onChange={onChange}
                            rows={6}
                            placeholder="Briefly describe your idea, dates, and location."
                        />
                    </label>
                    <button type="submit" className="button-pill button-submit">
                        Send Inquiry
                    </button>
                    {submitted && (
                        <p className="success-text" role="status" aria-live="polite">
                            Thank you — your message has been submitted successfully. I’ll get back to you shortly.
                        </p>
                    )}
                </form>
                <aside className="surface-card contact-meta" aria-label="Contact information">
                    <h2>Direct Contact</h2>
                    <p className="muted">Email: studio@aperture-photo.com</p>
                    <p className="muted">Base: Berlin & London</p>
                    <p className="muted">Availability: Europe & North America</p>
                    <p className="muted">
                        For urgent production requests, include “Priority” in your subject and expected timeline.
                    </p>
                </aside>
            </Reveal>
        </div>
    )
}