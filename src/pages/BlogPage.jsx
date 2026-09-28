import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import SectionLabel from "../components/SectionLabel"
import BlogPostCard from "../components/BlogPostCard"
import CTASection from "../components/CTASection"
import TextEffect from "../components/TextEffect"
import { blogPosts } from "../data/content"

export default function BlogPage() {
    const reduceMotion = useReducedMotion()
    const featuredPost = blogPosts.find((p) => p.mustRead) || blogPosts[0]
    const remainingPosts = blogPosts.filter((p) => p.id !== featuredPost.id)

    return (
        <div className="blog-page-root">
            {/* Scroll marker */}
            <div id="blog-scroll-marker" className="scroll-marker" aria-hidden="true" />

            <section className="blog-index-hero">
                <div className="section-center-header">
                    <SectionLabel>Journal</SectionLabel>

                    {/* Framer character text effect matching GQP85GRP_ */}
                    <h1 className="page-large-heading">
                        <TextEffect text="Behind the lens" tokenization="character" delay={0.5} />
                    </h1>

                    <p className="page-large-subtitle">
                        Practical writing on optical craft, camera gear, lighting direction, and the production rhythm of commercial fashion shoots.
                    </p>
                </div>

                {/* Must Read Section matching vZaUHxq7B (spring stiffness: 120, damping: 20, mass: 2) */}
                <motion.div
                    className="blog-must-read-wrap"
                    initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                    whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 20,
                        mass: 2,
                    }}
                >
                    <BlogPostCard post={featuredPost} featured={true} />
                </motion.div>

                {/* Remaining Post Collection Grid matching RvwHD318a (spring 120 20 2, y: 48) */}
                <div className="blog-collection-grid">
                    {remainingPosts.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={!reduceMotion ? { opacity: 0, y: 48 } : {}}
                            whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 20,
                                mass: 2,
                                delay: idx * 0.1,
                            }}
                        >
                            <BlogPostCard post={post} featured={false} />
                        </motion.div>
                    ))}
                </div>
            </section>

            <CTASection
                title="Have questions about photography or production?"
                subtitle="Reach out to discuss workshops, portfolio reviews, or editorial commission inquiries."
            />
        </div>
    )
}