import React, { useMemo } from "react"
import { Link, useParams } from "react-router-dom"
import PageIntro from "../components/PageIntro"
import Reveal from "../components/Reveal"
import { portfolioProjects } from "../data/content"
export default function PortfolioDetailPage() {
    const { slug } = useParams()
    const project = useMemo(() => portfolioProjects.find((item) => item.slug === slug), [slug])
    if (!project) {
        return (
            <div className="page">
                <PageIntro
                    eyebrow="Portfolio"
                    title="Project not found"
                    body="The project link may be outdated. Browse all portfolio work below."
                />
                <Link to="/portfolio" className="button-pill">
                    Back to portfolio
                </Link>
            </div>
        )
    }
    return (
        <article className="page article-layout">
            <PageIntro eyebrow={project.category} title={project.title} body={project.intro} />
            <Reveal className="detail-cover-wrap">
                <img src={project.cover} alt={project.title} className="detail-cover" />
            </Reveal>
            <Reveal className="meta-grid section">
                <div>
                    <p className="eyebrow">Date</p>
                    <p>{project.date}</p>
                </div>
                <div>
                    <p className="eyebrow">Client</p>
                    <p>{project.client}</p>
                </div>
                <div>
                    <p className="eyebrow">Location</p>
                    <p>{project.location}</p>
                </div>
            </Reveal>
            <Reveal className="image-grid section">
                {project.gallery.map((img, i) => (
                    <img key={`${img}-${i}`} src={img} alt={`${project.title} frame ${i + 1}`} />
                ))}
            </Reveal>
            <Reveal className="section cta-line">
                <h2>Interested in a similar commission?</h2>
                <Link to="/contact" className="button-pill">
                    Get in touch
                </Link>
            </Reveal>
        </article>
    )
}