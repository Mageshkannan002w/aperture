import React from "react"
import PageIntro from "../components/PageIntro"
import Reveal from "../components/Reveal"
import MediaCard from "../components/MediaCard"
import { portfolioProjects } from "../data/content"
export default function PortfolioPage() {
    return (
        <div className="page">
            <PageIntro
                eyebrow="Portfolio"
                title="Selected campaign, editorial, and lookbook assignments."
                body="A concise edit of recent work focused on texture, shape, and human presence."
            />
            <Reveal className="section card-grid">
                {portfolioProjects.map((project) => (
                    <MediaCard
                        key={project.slug}
                        to={`/portfolio/${project.slug}`}
                        image={project.cover}
                        title={project.title}
                        meta={project.date}
                        badge={project.category}
                    />
                ))}
            </Reveal>
        </div>
    )
}