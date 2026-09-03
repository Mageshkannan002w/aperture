import React from "react"
import PageIntro from "../components/PageIntro"
import Reveal from "../components/Reveal"
export default function PrivacyPolicyPage() {
    return (
        <div className="page legal-page">
            <PageIntro
                eyebrow="Legal"
                title="Privacy Policy"
                body="This policy explains how Aperture collects and uses inquiry information for project communication."
            />
            <Reveal className="section prose surface-card">
                <h2>Information Collected</h2>
                <p>
                    We collect information you submit through the contact form, such as name, email address, project
                    type, and message content.
                </p>
                <h2>How We Use Information</h2>
                <p>
                    Submitted data is used solely to respond to inquiries, assess project fit, and communicate next
                    steps regarding services.
                </p>
                <h2>Data Sharing</h2>
                <p>
                    We do not sell personal information. Data may be shared with trusted production collaborators only
                    when necessary to plan commissioned work.
                </p>
                <h2>Retention</h2>
                <p>
                    Inquiry details are retained only as long as needed for communication and project management, then
                    removed from active records.
                </p>
                <h2>Your Rights</h2>
                <p>
                    You may request access, correction, or deletion of your data by emailing
                    studio@aperture-photo.com.
                </p>
            </Reveal>
        </div>
    )
}