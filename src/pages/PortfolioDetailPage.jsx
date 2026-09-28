import React, { useMemo } from "react"
import { Link, useParams } from "react-router-dom"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

import SectionLabel from "../components/SectionLabel"
import MasterButton from "../components/MasterButton"
import ImageFrame from "../components/ImageFrame"
import CTASection from "../components/CTASection"
import TextEffect from "../components/TextEffect"
import { portfolioProjects } from "../data/content"

export default function PortfolioDetailPage() {
    const { slug } = useParams()
    const reduceMotion = useReducedMotion()

    // Parallax on hero cover matching speed: 80 in y26VXuGZj
    const { scrollY } = useScroll()
    const coverParallaxY = useTransform(scrollY, [0, 600], [0, 60])

    const projectIndex = useMemo(
        () => portfolioProjects.findIndex((p) => p.slug === slug),
        [slug]
    )

    const project = portfolioProjects[projectIndex]

    const prevProject =
        projectIndex > 0
            ? portfolioProjects[projectIndex - 1]
            : portfolioProjects[portfolioProjects.length - 1]

    const nextProject =
        projectIndex < portfolioProjects.length - 1
            ? portfolioProjects[projectIndex + 1]
            : portfolioProjects[0]

    if (!project) {
        return (
            <div className="detail-not-found-page">
                <SectionLabel>Portfolio</SectionLabel>
                <h1>Project not found</h1>
                <p>The project you requested could not be located in our portfolio archive.</p>
                <MasterButton to="/portfolio" variant="dark">
                    Back to portfolio
                </MasterButton>
            </div>
        )
    }

    // Gallery groups 1 and 2 (4 images each)
    const galleryGroupOne = [project.image1, project.image2, project.image3, project.image4]
    const galleryGroupTwo = [project.image5, project.image6, project.image7, project.image8]

    return (
        <article className="portfolio-detail-root">
            {/* Top breadcrumbs & back link */}
            <div className="detail-top-nav-bar">
                <Link to="/portfolio" className="detail-back-link">
                    <ArrowLeft size={16} />
                    <span>All Projects</span>
                </Link>
                <div className="detail-badge-wrap">
                    <SectionLabel>{project.category}</SectionLabel>
                </div>
            </div>

            {/* Project Header with Framer character textEffect matching KG8Plb_1Y */}
            <header className="detail-header-block">
                <h1 className="detail-title">
                    <TextEffect text={project.title} tokenization="character" delay={0.5} />
                </h1>
                <p className="detail-description">{project.description}</p>
            </header>

            {/* Meta specification grid */}
            <div className="detail-meta-table">
                <div className="meta-cell">
                    <span className="meta-label">Client</span>
                    <strong className="meta-value">{project.client}</strong>
                </div>
                <div className="meta-cell">
                    <span className="meta-label">Date</span>
                    <strong className="meta-value">{project.date}</strong>
                </div>
                <div className="meta-cell">
                    <span className="meta-label">Location</span>
                    <strong className="meta-value">{project.location}</strong>
                </div>
                <div className="meta-cell">
                    <span className="meta-label">Discipline</span>
                    <strong className="meta-value">{project.category} Photography</strong>
                </div>
            </div>

            {/* Cover Image with Parallax speed 80 */}
            <motion.div
                className="detail-cover-container"
                style={!reduceMotion ? { y: coverParallaxY } : {}}
            >
                <ImageFrame
                    src={project.cover}
                    alt={`${project.title} master cover`}
                    aspectRatio="16/9"
                    innerRadius={20}
                    cornersVariant="all"
                />
            </motion.div>

            {/* Gallery Group One with 3D tilt enter (rotateX: -40deg, spring 209 46 1) matching UqdZHTvPJ */}
            <section className="detail-gallery-section" style={{ perspective: 1200 }}>
                <div className="detail-section-label-row">
                    <span className="detail-gallery-index-label">01 / Studio Selects</span>
                </div>
                <div className="detail-gallery-grid-mixed">
                    {galleryGroupOne.map((img, i) => (
                        <motion.div
                            key={i}
                            className={`gallery-item-wrap ${i % 3 === 0 ? "gallery-item-span2" : ""}`}
                            initial={!reduceMotion ? { opacity: 0, y: 40, rotateX: -40 } : false}
                            whileInView={!reduceMotion ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                type: "spring",
                                stiffness: 209,
                                damping: 46,
                                mass: 1,
                                delay: i * 0.1,
                            }}
                        >
                            <ImageFrame
                                src={img}
                                alt={`${project.title} frame ${i + 1}`}
                                aspectRatio={i % 2 === 0 ? "4/5" : "16/10"}
                                innerRadius={16}
                                cornersVariant="all"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Gallery Group Two */}
            <section className="detail-gallery-section" style={{ perspective: 1200 }}>
                <div className="detail-section-label-row">
                    <span className="detail-gallery-index-label">02 / Narrative Sequences</span>
                </div>
                <div className="detail-gallery-grid-mixed">
                    {galleryGroupTwo.map((img, i) => (
                        <motion.div
                            key={i}
                            className={`gallery-item-wrap ${i % 2 === 1 ? "gallery-item-span2" : ""}`}
                            initial={!reduceMotion ? { opacity: 0, y: 40, rotateX: -40 } : false}
                            whileInView={!reduceMotion ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                type: "spring",
                                stiffness: 209,
                                damping: 46,
                                mass: 1,
                                delay: i * 0.1,
                            }}
                        >
                            <ImageFrame
                                src={img}
                                alt={`${project.title} frame ${i + 5}`}
                                aspectRatio={i % 2 === 1 ? "16/10" : "4/5"}
                                innerRadius={16}
                                cornersVariant="all"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Previous / Next Project Navigation */}
            <div className="detail-prev-next-nav">
                <Link to={`/portfolio/${prevProject.slug}`} className="prev-next-link prev-link">
                    <ArrowLeft size={18} />
                    <div className="prev-next-text">
                        <span className="prev-next-sub">Previous project</span>
                        <strong className="prev-next-title">{prevProject.title}</strong>
                    </div>
                </Link>

                <Link to={`/portfolio/${nextProject.slug}`} className="prev-next-link next-link">
                    <div className="prev-next-text next-align-right">
                        <span className="prev-next-sub">Next project</span>
                        <strong className="prev-next-title">{nextProject.title}</strong>
                    </div>
                    <ArrowRight size={18} />
                </Link>
            </div>

            <CTASection
                title="Like the aesthetic of this commission?"
                subtitle="Get in touch to discuss tailoring this visual style to your brand’s upcoming campaign or editorial release."
            />
        </article>
    )
}