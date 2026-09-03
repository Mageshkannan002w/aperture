import React from "react"
import SectionLabel from "../components/SectionLabel"
import MasterButton from "../components/MasterButton"
import TextEffect from "../components/TextEffect"
import { siteInfo } from "../data/content"

export default function TermsPage() {
    return (
        <div className="legal-page-root">
            <div className="legal-container">
                <header className="legal-header">
                    <SectionLabel>Legal</SectionLabel>
                    <h1 className="legal-title">
                        <TextEffect text="Terms & Conditions" tokenization="character" delay={0.5} />
                    </h1>
                    <p className="legal-subtitle">
                        These terms govern the use of this website and outline the general engagement standards for commissioning photography services from August Renner.
                    </p>
                </header>

                <div className="legal-prose-content">
                    <section className="legal-section">
                        <h2>1. Intellectual Property & Copyright</h2>
                        <p>
                            All photographs, visual media, text, layout designs, and graphics appearing on this website are the exclusive intellectual property of August Renner unless credited otherwise. Unauthorized reproduction, digital scraping, generative model training, or commercial distribution of any image without prior written authorization is strictly prohibited.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>2. Commissioning & Commercial Licensing</h2>
                        <p>
                            All commissioned assignments are executed under bespoke written production agreements. Usage rights, media channels (print, digital, out-of-home), geographical territories, and duration terms are specified individually per project. Usage rights transfer only upon receipt of full settlement.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>3. Booking Deposits and Cancellations</h2>
                        <p>
                            Due to crew scheduling, location bookings, and equipment reservations, commissions are confirmed upon signature and receipt of the designated production deposit. In the event of client postponement or cancellation, standard industry terms apply as detailed in individual production estimates.
                        </p>
                    </section>

                    <section className="legal-section">
                        <h2>4. Governing Law</h2>
                        <p>
                            Agreements are governed by and construed in accordance with the applicable laws of Germany and the United Kingdom, respective of shoot territory.
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