import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"
import PageIntro from "../components/PageIntro"
import Reveal from "../components/Reveal"
import MediaCard from "../components/MediaCard"
import FAQAccordion from "../components/FAQAccordion"
import { blogPosts, faqs, imageBank, portfolioProjects, testimonials } from "../data/content"
function FloatingPolaroids() {
    const reduceMotion = useReducedMotion()
    const imgs = [imageBank.hero1, imageBank.hero2, imageBank.hero3, imageBank.hero4, imageBank.hero5]
    return (
        <section className="hero-polaroid-wrap">
            <div className="hero-aperture" aria-hidden="true" />
            {imgs.map((src, i) => (
                <motion.img
                    key={src}
                    src={src}
                    alt=""
                    className={`polaroid p-${i + 1}`}
                    animate={
                        reduceMotion
                            ? {}
                            : {
                                  y: [0, -10, 0],
                                  rotate: [i - 2, i - 1, i - 2],
                              }
                    }
                    transition={{ repeat: Infinity, duration: 6 + i, ease: "easeInOut" }}
                />
            ))}
        </section>
    )
}
export default function HomePage() {
    return (
        <div className="page">
            <FloatingPolaroids />
            <Reveal>
                <PageIntro
                    eyebrow="Fashion & Editorial Photography"
                    title="Visual stories with precision, space, and lasting character."
                    body="I collaborate with magazines and fashion labels to create image systems that feel modern, tactile, and human."
                />
            </Reveal>
            <Reveal className="section split">
                <div>
                    <h2>Services</h2>
                    <p className="muted">Campaigns, editorials, lookbooks, and portraits from concept through final delivery.</p>
                </div>
                <ul className="service-list">
                    <li>Creative direction support</li>
                    <li>On-location and studio production</li>
                    <li>Retouching and visual consistency workflow</li>
                </ul>
            </Reveal>
            <Reveal className="section collage">
                <img src={imageBank.hero2} alt="Model in editorial pose" />
                <img src={imageBank.hero4} alt="Fashion portrait detail" />
                <img src={imageBank.hero5} alt="Outdoor styling frame" />
            </Reveal>
            <Reveal className="section">
                <div className="section-head">
                    <h2>Featured Portfolio</h2>
                    <Link to="/portfolio" className="button-pill">
                        View all work
                    </Link>
                </div>
                <div className="card-grid">
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
                </div>
            </Reveal>
            <Reveal className="section testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial-grid">
                    {testimonials.map((item) => (
                        <blockquote key={item.name} className="quote-card">
                            <p>“{item.quote}”</p>
                            <footer>
                                <strong>{item.name}</strong>
                                <span>{item.role}</span>
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </Reveal>
            <Reveal className="section">
                <div className="section-head">
                    <h2>From the Journal</h2>
                    <Link to="/blog" className="button-pill">
                        Read articles
                    </Link>
                </div>
                <div className="card-grid two">
                    {blogPosts.slice(0, 2).map((post) => (
                        <MediaCard
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            image={post.cover}
                            title={post.title}
                            meta={`${post.date} · ${post.readTime}`}
                            badge={post.category}
                        />
                    ))}
                </div>
            </Reveal>
            <Reveal className="section">
                <h2>Frequently Asked Questions</h2>
                <FAQAccordion items={faqs} />
            </Reveal>
            <Reveal className="section cta">
                <div className="layer-card">
                    <h2>Planning a new story?</h2>
                    <p className="muted">Share your timeline, concept, and team details. I’ll follow up with an approach tailored to your production.</p>
                    <Link to="/contact" className="button-pill">
                        Start a conversation
                    </Link>
                </div>
                <div className="layer-card muted-card" />
            </Reveal>
        </div>
    )
}