import React from "react"
import SectionLabel from "../components/SectionLabel"
import MasterButton from "../components/MasterButton"
import TextEffect from "../components/TextEffect"
import { siteInfo } from "../data/content"

export default function PrivacyPolicyPage() {
    return (
        <div className="legal-page-root">
            <div className="legal-container">
                <header className="legal-header">
                    <SectionLabel>Legal</SectionLabel>
                    <h1 className="legal-title">
                        <TextEffect text="Privacy Policy" tokenization="character" delay={0.5} />
                    </h1>
                    <p className="legal-subtitle">
                        Last updated: January 2026. This policy explains how Aperture Studio (August Renner) collects and handles information received through our website.
                    </p>
                </header>

                <div className="legal-prose-content">
                    <section className="legal-section">
                        <h2>1. Overview</h2>
                        <p>
                            We value your privacy and are committed to protecting any personal information you share with us. We do not sell, rent, or trade email lists or client data with external marketers.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>2. Information We Collect</h2>
                        <p>
                            When you submit an inquiry through our contact form, we collect the details you provide, including your name, email address, agency or company name, target project dates, and concept notes. This information is utilized solely to evaluate project suitability, prepare proposals, and coordinate production logistics.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>3. Cookies and Analytics</h2>
                        <p>
                            This website uses minimal essential session cookies required for core routing and accessibility navigation. We do not run intrusive third-party cross-site advertising trackers.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>4. Data Retention and Security</h2>
                        <p>
                            Inquiry information is stored securely and retained only for as long as necessary to facilitate ongoing communication or project execution. You may request deletion of your contact records at any time by emailing <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>5. Contact</h2>
                        <p>
                            For inquiries concerning our privacy practices or data rights, please contact our studio directly at <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>.
                        </p>
                    </section>
                </div>

                <div className="legal-back-row">
                    <MasterButton to="/" variant="dark">
                        Return home
                    </MasterButton>
                </div>
            </div>
        </div>
    )
}