import React from "react"
import PageIntro from "../components/PageIntro"
import Reveal from "../components/Reveal"
export default function TermsPage() {
    return (
        <div className="page legal-page">
            <PageIntro
                eyebrow="Legal"
                title="Terms & Conditions"
                body="These terms govern the use of this website and outline the basis for engaging Aperture photography services."
            />
            <Reveal className="section prose surface-card">
                <h2>Website Use</h2>
                <p>
                    All content is provided for informational and portfolio purposes. You may not reproduce or reuse
                    imagery without written permission.
                </p>
                <h2>Booking & Scope</h2>
                <p>
                    Project bookings are confirmed through written agreement defining usage, schedule, deliverables, and
                    fees. Availability is not guaranteed until confirmation.
                </p>
                <h2>Intellectual Property</h2>
                <p>
                    Unless otherwise agreed in writing, all photographs remain the intellectual property of August
                    Renner. Licensing terms are specified per project.
                </p>
                <h2>Liability</h2>
                <p>
                    While reasonable care is taken in all production stages, Aperture is not liable for losses caused
                    by force majeure, location restrictions, or third-party delays.
                </p>
                <h2>Contact</h2>
                <p>Questions regarding these terms can be directed to studio@aperture-photo.com.</p>
            </Reveal>
        </div>
    )
}