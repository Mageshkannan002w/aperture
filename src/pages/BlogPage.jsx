import React from "react"
import { Link } from "react-router-dom"
import PageIntro from "../components/PageIntro"
import Reveal from "../components/Reveal"
import MediaCard from "../components/MediaCard"
import { blogPosts } from "../data/content"
export default function BlogPage() {
    const [featured, ...rest] = blogPosts
    return (
        <div className="page">
            <PageIntro
                eyebrow="Journal"
                title="Notes on craft, direction, and production rhythm."
                body="Practical writing for brands and teams building image-led fashion narratives."
            />
            <Reveal className="featured-article section">
                <img src={featured.cover} alt={featured.title} />
                <div>
                    <p className="pill">{featured.category}</p>
                    <h2>{featured.title}</h2>
                    <p className="muted">
                        {featured.date} · {featured.readTime}
                    </p>
                    <p className="muted">{featured.excerpt}</p>
                    <Link to={`/blog/${featured.slug}`} className="button-pill">
                        Read article
                    </Link>
                </div>
            </Reveal>
            <Reveal className="section card-grid">
                {rest.map((post) => (
                    <MediaCard
                        key={post.slug}
                        to={`/blog/${post.slug}`}
                        image={post.cover}
                        title={post.title}
                        meta={`${post.date} · ${post.readTime}`}
                        badge={post.category}
                    />
                ))}
            </Reveal>
        </div>
    )
}