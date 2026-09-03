import React, { useMemo } from "react"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

import SectionLabel from "../components/SectionLabel"
import MasterButton from "../components/MasterButton"
import ImageFrame from "../components/ImageFrame"
import BlogPostCard from "../components/BlogPostCard"
import CTASection from "../components/CTASection"
import TextEffect from "../components/TextEffect"
import { blogPosts } from "../data/content"

export default function BlogDetailPage() {
    const { slug } = useParams()

    const post = useMemo(() => blogPosts.find((p) => p.slug === slug), [slug])
    const relatedPosts = useMemo(
        () => blogPosts.filter((p) => p.slug !== slug).slice(0, 2),
        [slug]
    )

    if (!post) {
        return (
            <div className="detail-not-found-page">
                <SectionLabel>Journal</SectionLabel>
                <h1>Article not found</h1>
                <p>The requested journal article could not be located in our archive.</p>
                <MasterButton to="/blog" variant="dark">
                    Back to articles
                </MasterButton>
            </div>
        )
    }

    return (
        <article className="blog-detail-root">
            {/* Top row with back link */}
            <div className="detail-top-nav-bar">
                <Link to="/blog" className="detail-back-link">
                    <ArrowLeft size={16} />
                    <span>Back to Journal</span>
                </Link>
                <div className="detail-badge-wrap">
                    <SectionLabel>{post.category}</SectionLabel>
                </div>
            </div>

            {/* Article Header with Word tokenized TextEffect matching zL1yBAApj */}
            <header className="blog-article-header">
                <h1 className="blog-article-title">
                    <TextEffect text={post.title} tokenization="word" delay={0.5} />
                </h1>
                <p className="blog-article-lead">{post.description}</p>
                <div className="blog-article-meta-row">
                    <span>By {post.author}</span>
                    <span className="meta-bullet">·</span>
                    <span>{post.date}</span>
                    <span className="meta-bullet">·</span>
                    <span>{post.readTime}</span>
                </div>
            </header>

            {/* Cover Image with Camera Corners */}
            <div className="blog-article-cover-wrap">
                <ImageFrame
                    src={post.image}
                    alt={post.title}
                    aspectRatio="16/9"
                    innerRadius={20}
                    cornersVariant="all"
                />
            </div>

            {/* Readable narrow prose column */}
            <div className="blog-prose-container">
                {post.content.map((paragraph, idx) => (
                    <p key={idx} className="blog-prose-paragraph">
                        {paragraph}
                    </p>
                ))}

                {/* Inline Quote Flourish */}
                <blockquote className="blog-inline-quote">
                    “Light is not merely illumination—it is the structural spine of an editorial story. Control the shadow rolloff, and the narrative takes care of itself.”
                    <cite>— August Renner</cite>
                </blockquote>

                <p className="blog-prose-paragraph">
                    Whether you are preparing for your first international assignment or refining an established commercial portfolio, embrace the discipline of intentional light. Your eye is your most valuable asset; protect it with patience, curiosity, and continuous experimentation.
                </p>
            </div>

            {/* Related Posts */}
            <section className="blog-related-section">
                <div className="section-center-header">
                    <SectionLabel>More Reading</SectionLabel>
                    <h2 className="section-title">Related Journal Entries</h2>
                </div>
                <div className="blog-related-grid">
                    {relatedPosts.map((related) => (
                        <BlogPostCard key={related.id} post={related} featured={false} />
                    ))}
                </div>
            </section>

            <CTASection
                title="Enjoyed this article?"
                subtitle="Join our quarterly newsletter or reach out for studio collaborations and editorial inquiries."
            />
        </article>
    )
}