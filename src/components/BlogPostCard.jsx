import React from "react"
import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "framer-motion"
import ImageFrame from "./ImageFrame"
import MasterButton from "./MasterButton"

export default function BlogPostCard({ post, featured = false }) {
    const reduceMotion = useReducedMotion()

    if (featured) {
        return (
            <motion.article
                className="blog-card blog-card-featured"
                whileHover={!reduceMotion ? { y: -4 } : {}}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
                <div className="blog-featured-grid">
                    <div className="blog-featured-image-col">
                        <Link to={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true">
                            <ImageFrame
                                src={post.image}
                                alt={post.title}
                                aspectRatio="16/10"
                                innerRadius={16}
                                cornersVariant="all"
                            />
                        </Link>
                    </div>
                    <div className="blog-featured-content-col">
                        <div className="blog-card-badges">
                            <span className="category-badge">{post.category}</span>
                            <span className="must-read-badge">Must Read</span>
                        </div>
                        <h2 className="blog-featured-title">
                            <Link to={`/blog/${post.slug}`} className="blog-title-link">
                                {post.title}
                            </Link>
                        </h2>
                        <p className="blog-featured-excerpt">{post.description}</p>
                        <div className="blog-card-meta">
                            <span>{post.date}</span>
                            <span className="meta-bullet">·</span>
                            <span>{post.readTime}</span>
                            <span className="meta-bullet">·</span>
                            <span>By {post.author}</span>
                        </div>
                        <div className="blog-featured-cta">
                            <MasterButton to={`/blog/${post.slug}`} variant="dark">
                                Read article
                            </MasterButton>
                        </div>
                    </div>
                </div>
            </motion.article>
        )
    }

    return (
        <motion.article
            className="blog-card blog-card-standard"
            whileHover={!reduceMotion ? { y: -4 } : {}}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
        >
            <Link to={`/blog/${post.slug}`} className="blog-card-link" aria-label={`Read ${post.title}`}>
                <div className="blog-card-image-wrap">
                    <ImageFrame
                        src={post.image}
                        alt={post.title}
                        aspectRatio="3/2"
                        innerRadius={16}
                        cornersVariant="all"
                    />
                </div>
                <div className="blog-card-content">
                    <div className="blog-card-badges">
                        <span className="category-badge">{post.category}</span>
                    </div>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-desc">{post.description}</p>
                    <div className="blog-card-meta">
                        <span>{post.date}</span>
                        <span className="meta-bullet">·</span>
                        <span>{post.readTime}</span>
                    </div>
                </div>
            </Link>
        </motion.article>
    )
}
