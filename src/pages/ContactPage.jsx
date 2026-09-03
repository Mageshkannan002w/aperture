import React, { useState } from "react"
import { CheckCircle2, Mail, MapPin, Loader2 } from "lucide-react"
import SectionLabel from "../components/SectionLabel"
import ImageFrame from "../components/ImageFrame"
import TextEffect from "../components/TextEffect"
import { siteInfo } from "../data/content"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "Fashion & Editorial",
        timeline: "",
        message: "",
    })

    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitting(true)
        setTimeout(() => {
            setSubmitting(false)
            setSubmitted(true)
            setFormData({
                name: "",
                email: "",
                projectType: "Fashion & Editorial",
                timeline: "",
                message: "",
            })
        }, 800)
    }

    return (
        <div className="contact-page-root">
            {/* Scroll marker */}
            <div id="contact-scroll-marker" className="scroll-marker" aria-hidden="true" />

            <section className="contact-hero-section">
                <div className="section-center-header">
                    <SectionLabel>Inquiries</SectionLabel>

                    {/* Character tokenized text effect matching kr_rp9J71 */}
                    <h1 className="page-large-heading">
                        <TextEffect text="Start a conversation" tokenization="character" delay={0.5} />
                    </h1>

                    <p className="page-large-subtitle">
                        Tell me about your upcoming campaign, editorial assignment, or portrait session. I typically reply within 24 hours with availability and a tailored production proposal.
                    </p>
                </div>

                <div className="contact-main-grid">
                    {/* Form Column */}
                    <div className="contact-form-column">
                        {submitted ? (
                            <div className="contact-success-card" role="status" aria-live="polite">
                                <CheckCircle2 size={40} className="success-icon" />
                                <h3>Thank you for reaching out</h3>
                                <p>
                                    Your inquiry has been received. I will review your concept notes and follow up with you promptly.
                                </p>
                                <button
                                    type="button"
                                    className="master-button master-button-dark"
                                    onClick={() => setSubmitted(false)}
                                >
                                    Send another inquiry
                                </button>
                            </div>
                        ) : (
                            <form className="contact-form-card" onSubmit={handleSubmit} noValidate={false}>
                                <div className="form-field-group">
                                    <label htmlFor="contact-name" className="form-label">
                                        Your Name or Agency *
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="e.g. Mira Calvet"
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-field-group">
                                    <label htmlFor="contact-email" className="form-label">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="name@company.com"
                                        className="form-input"
                                    />
                                </div>

                                <div className="form-row-two-col">
                                    <div className="form-field-group">
                                        <label htmlFor="contact-project-type" className="form-label">
                                            Project Type
                                        </label>
                                        <select
                                            id="contact-project-type"
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            className="form-select"
                                        >
                                            <option value="Fashion & Editorial">Fashion & Editorial</option>
                                            <option value="Brand & Commercial">Brand & Commercial</option>
                                            <option value="Portrait & Studio">Portrait & Studio</option>
                                            <option value="Creative Direction">Creative Direction</option>
                                        </select>
                                    </div>

                                    <div className="form-field-group">
                                        <label htmlFor="contact-timeline" className="form-label">
                                            Target Timeline or Dates
                                        </label>
                                        <input
                                            type="text"
                                            id="contact-timeline"
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleChange}
                                            placeholder="e.g. Next Month / Autumn 2026"
                                            className="form-input"
                                        />
                                    </div>
                                </div>

                                <div className="form-field-group">
                                    <label htmlFor="contact-message" className="form-label">
                                        Project Details & Location *
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Briefly describe the vision, location ideas, deliverables needed, and any styling or casting requirements..."
                                        className="form-textarea"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="master-button master-button-dark contact-submit-btn"
                                >
                                    {submitting ? (
                                        <span className="contact-submitting-label">
                                            <Loader2 size={16} className="contact-spinner-icon" />
                                            <span>Transmitting Inquiry...</span>
                                        </span>
                                    ) : (
                                        <span className="master-button-swap-wrap">
                                            <span className="master-button-label master-button-primary">
                                                Submit Inquiry
                                            </span>
                                            <span className="master-button-label master-button-secondary">
                                                Submit Inquiry
                                            </span>
                                        </span>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Information & Visual Column */}
                    <div className="contact-info-column">
                        <div className="contact-details-box">
                            <h2 className="contact-details-title">Direct Studio Contact</h2>
                            <div className="contact-detail-row">
                                <Mail size={18} className="contact-icon" />
                                <div>
                                    <span className="detail-label">Email</span>
                                    <a href={`mailto:${siteInfo.email}`} className="detail-value-link">
                                        {siteInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="contact-detail-row">
                                <MapPin size={18} className="contact-icon" />
                                <div>
                                    <span className="detail-label">Studio Bases</span>
                                    <span className="detail-value-text">
                                        Berlin (Kreuzberg) & London (Shoreditch)
                                    </span>
                                </div>
                            </div>

                            <div className="contact-urgent-notice">
                                <p>
                                    <strong>Urgent production request?</strong> Please mark your subject line as <em>“Priority Inquiry”</em> and specify call times or agency deadlines.
                                </p>
                            </div>
                        </div>

                        {/* Supporting Visual Composition */}
                        <div className="contact-visual-frame">
                            <ImageFrame
                                src="/images/intro-4.svg"
                                alt="Studio lighting setup"
                                aspectRatio="4/3"
                                innerRadius={16}
                                cornersVariant="all"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}