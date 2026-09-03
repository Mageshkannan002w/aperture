import React, { useMemo } from "react"
import { Link, useParams } from "react-router-dom"
import PageIntro from "../components/PageIntro"
import Reveal from "../components/Reveal"
import MediaCard from "../components/MediaCard"
import { blogPosts } from "../data/content"
export default function BlogDetailPage() {
    const { slug } = useParams()
    const post = useMemo(() => blogPosts.find((item) => item.slug === slug), [slug])
    const related = useMemo(() => blogPosts.filter((item) => item.slug !== slug).slice(0, 2), [slug])
    if (!post) {
        return (
            <div className="page">
                <PageIntro
                    eyebrow="Journal"
                    title="Article not found"
                    body="The article may have moved. Explore the latest journal entries."
                />
                <Link to="/blog" className="button-pill">
                    Back to blog
                </Link>
            </div>
        )
    }
    return (
        <article className="page article-layout">
            <PageIntro eyebrow={post.category} title={post.title} body={post.excerpt} />
            <Reveal className="detail-cover-wrap">
                <img src={post.cover} alt={post.title} className="detail-cover" />
            </Reveal>
            <Reveal className="section article-meta">
                <p className="muted">
                    {post.date} · {post.readTime}
                </p>
            </Reveal>
            <Reveal className="section prose">
                {post.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </Reveal>
            <Reveal className="section">
                <h2>Related Posts</h2>
                <div className="card-grid two">
                    {related.map((item) => (
                        <MediaCard
                            key={item.slug}
                            to={`/blog/${item.slug}`}
                            image={item.cover}
                            title={item.title}
                            meta={`${item.date} · ${item.readTime}`}
                            badge={item.category}
                        />
                    ))}
                </div>
            </Reveal>
        </article>
    )
}