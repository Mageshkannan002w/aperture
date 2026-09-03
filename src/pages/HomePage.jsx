import React, { useState } from "react"
import { Link } from "react-router-dom"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { Check, Clock, Eye, Sparkles, Star, Users } from "lucide-react"

import SectionLabel from "../components/SectionLabel"
import MasterButton from "../components/MasterButton"
import Corners from "../components/Corners"
import ImageFrame from "../components/ImageFrame"
import PortfolioCard from "../components/PortfolioCard"
import BlogPostCard from "../components/BlogPostCard"
import ServiceRow from "../components/ServiceRow"
import GroupedAccordion from "../components/GroupedAccordion"
import Testimonials from "../components/Testimonials"
import PolaroidStack from "../components/PolaroidStack"
import Preloader from "../components/Preloader"
import CTASection from "../components/CTASection"
import TextEffect from "../components/TextEffect"

import {
    portfolioProjects,
    blogPosts,
    services,
    testimonials,
    faqs,
    siteInfo,
} from "../data/content"

export default function HomePage() {
    const reduceMotion = useReducedMotion()
    const [preloaded, setPreloaded] = useState(false)

    // Parallax setup for Cloud (speed 90) and Head/Portrait (speed 106)
    const { scrollY } = useScroll()
    const cloudParallaxY = useTransform(scrollY, [0, 800], [0, 80])
    const headParallaxY = useTransform(scrollY, [0, 800], [0, -40])

    // Featured Must Read post and smaller posts
    const featuredPost = blogPosts.find((p) => p.mustRead) || blogPosts[0]
    const otherPosts = blogPosts.filter((p) => p.id !== featuredPost.id).slice(0, 3)

    // Hero polaroids loose radial composition
    const heroPolaroids = [
        { src: "/images/hero-polaroid-1.svg", caption: "Paris I" },
        { src: "/images/hero-polaroid-2.svg", caption: "London II" },
        { src: "/images/hero-polaroid-3.svg", caption: "Comporta III" },
        { src: "/images/hero-polaroid-4.svg", caption: "Atelier IV" },
        { src: "/images/hero-polaroid-5.svg", caption: "Studio V" },
    ]

    return (
        <div className="home-page-root">
            {/* Preloader sequence */}
            <Preloader onComplete={() => setPreloaded(true)} />

            {/* 1. HERO SECTION */}
            <section className="home-hero-section">
                {/* Scroll activation marker */}
                <div id="hero-scroll-marker" className="scroll-marker" aria-hidden="true" />

                {/* Sky & Atmospheric Background Layer with Parallax */}
                <div className="hero-atmosphere-layer" aria-hidden="true">
                    <img src="/images/sky.svg" alt="" className="hero-sky-img" />
                    
                    {/* Cloud: Parallax Speed 90 */}
                    <motion.div
                        className="hero-cloud-img-wrap"
                        style={!reduceMotion ? { y: cloudParallaxY } : {}}
                    >
                        <img src="/images/cloud.svg" alt="" className="hero-cloud-img" />
                    </motion.div>

                    {/* Head Cutout: Parallax Speed 106 */}
                    <motion.div
                        className="hero-portrait-cutout-wrap"
                        style={!reduceMotion ? { y: headParallaxY } : {}}
                    >
                        <img
                            src="/images/portrait-cutout.svg"
                            alt="August Renner silhouette"
                            className="hero-portrait-img"
                        />
                    </motion.div>
                </div>

                {/* Radial Loose Polaroid Composition */}
                <PolaroidStack images={heroPolaroids} variant="radial" />

                {/* Center Title Container with Camera Corners matching vUl20BrAb & aiIkqX9bY */}
                <div className="hero-center-title-container">
                    <motion.div
                        className="hero-title-box"
                        initial={!reduceMotion ? { opacity: 0, y: 100 } : false}
                        animate={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            type: "spring",
                            duration: 2,
                            bounce: 0.2,
                            delay: preloaded ? 0.2 : 0.6,
                        }}
                    >
                        <h1 className="hero-main-heading">AUGUST RENNER</h1>
                        <p className="hero-sub-title">Aperture Photography · Berlin & London</p>
                        
                        {/* Decorative Corners with Scale 1.2 onMount effect */}
                        <motion.div
                            className="hero-corners-anim-wrap"
                            initial={!reduceMotion ? { opacity: 0, scale: 1.2 } : false}
                            animate={!reduceMotion ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                                type: "spring",
                                duration: 2,
                                bounce: 0.2,
                                delay: preloaded ? 0.4 : 0.9,
                            }}
                        >
                            <Corners variant="all" className="hero-corners-overlay" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom gradient mask and progressive blur layer */}
                <div className="hero-bottom-fade-mask" aria-hidden="true" />
                <div className="hero-progressive-blur" aria-hidden="true" />
            </section>

            {/* 2. TRUST / PHILOSOPHY STRIP */}
            <section className="trust-philosophy-section">
                <div className="trust-strip-inner">
                    {/* Left subtle wreath ornament */}
                    <div className="trust-wreath trust-wreath-left" aria-hidden="true">
                        <svg viewBox="0 0 100 100" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.2">
                            <path d="M50 10 C35 25, 20 45, 25 75 C30 85, 45 92, 50 95" />
                            <circle cx="30" cy="40" r="4" />
                            <circle cx="26" cy="55" r="4" />
                            <circle cx="28" cy="70" r="4" />
                        </svg>
                    </div>

                    <motion.div
                        className="trust-content-stack"
                        initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                        whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ type: "spring", duration: 1, bounce: 0.2 }}
                    >
                        <div className="trust-avatars-and-stars">
                            <div className="avatar-overlap-group">
                                <img src="/images/client-avatar-1.svg" alt="Client avatar" className="avatar-circle" />
                                <img src="/images/client-avatar-2.svg" alt="Client avatar" className="avatar-circle" />
                                <img src="/images/client-avatar-3.svg" alt="Client avatar" className="avatar-circle" />
                            </div>
                            <div className="stars-row" aria-label="5 star trusted rating">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={15} fill="var(--star-accent)" color="var(--star-accent)" />
                                ))}
                            </div>
                        </div>

                        <h2 className="trust-headline">Trusted by brands & creatives worldwide</h2>
                        <p className="trust-description">
                            Over 100 brands, magazines, and independent labels trust me to capture their stories through bold, refined imagery.
                        </p>

                        <div className="trust-label-row">
                            <SectionLabel>Philosophy</SectionLabel>
                        </div>
                    </motion.div>

                    {/* Right subtle wreath ornament */}
                    <div className="trust-wreath trust-wreath-right" aria-hidden="true">
                        <svg viewBox="0 0 100 100" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.2">
                            <path d="M50 10 C65 25, 80 45, 75 75 C70 85, 55 92, 50 95" />
                            <circle cx="70" cy="40" r="4" />
                            <circle cx="74" cy="55" r="4" />
                            <circle cx="72" cy="70" r="4" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* 3. STICKY INTRODUCTION & ASYMMETRIC IMAGE COMPOSITION */}
            <section className="intro-sticky-section">
                <div className="intro-sticky-container">
                    <div className="intro-sticky-panel">
                        <motion.div
                            className="intro-copy-block"
                            initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                            whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ type: "spring", duration: 1, bounce: 0.2 }}
                        >
                            <SectionLabel>Approach</SectionLabel>
                            <h2 className="intro-title">
                                Visual stories with precision, space, and lasting character.
                            </h2>
                            <p className="intro-body">
                                I collaborate with fashion labels, editorial magazines, and design-led brands to construct visual systems that feel modern, tactile, and human. Every frame is built on calibrated lighting, calm presence, and intentional negative space.
                            </p>
                        </motion.div>
                    </div>

                    {/* Asymmetric editorial image interlude */}
                    <div className="intro-image-flow">
                        {/* Pair 1: Large portrait left + small square right */}
                        <div className="asym-row asym-row-pair1">
                            <div className="asym-col asym-col-large">
                                <ImageFrame
                                    src="/images/intro-1.svg"
                                    alt="Editorial pose study"
                                    aspectRatio="4/5"
                                    innerRadius={20}
                                    cornersVariant="all"
                                />
                            </div>
                            <div className="asym-col asym-col-small">
                                <ImageFrame
                                    src="/images/intro-2.svg"
                                    alt="Detail texture"
                                    aspectRatio="1/1"
                                    innerRadius={16}
                                    cornersVariant="all"
                                />
                            </div>
                        </div>

                        {/* Wide landscape frame */}
                        <div className="asym-row asym-row-wide">
                            <ImageFrame
                                src="/images/intro-3.svg"
                                alt="Architectural location panorama"
                                aspectRatio="16/9"
                                innerRadius={22}
                                cornersVariant="all"
                            />
                        </div>

                        {/* Pair 2: Offset pair */}
                        <div className="asym-row asym-row-pair2">
                            <div className="asym-col asym-col-offset-left">
                                <ImageFrame
                                    src="/images/intro-4.svg"
                                    alt="Movement shift on set"
                                    aspectRatio="3/4"
                                    innerRadius={18}
                                    cornersVariant="all"
                                />
                            </div>
                            <div className="asym-col asym-col-offset-right">
                                <ImageFrame
                                    src="/images/intro-5.svg"
                                    alt="Studio silhouette study"
                                    aspectRatio="3/4"
                                    innerRadius={18}
                                    cornersVariant="all"
                                />
                            </div>
                        </div>

                        {/* Closing quiet frame */}
                        <div className="asym-row asym-row-wide">
                            <ImageFrame
                                src="/images/intro-6.svg"
                                alt="Quiet closure portrait"
                                aspectRatio="16/10"
                                innerRadius={20}
                                cornersVariant="all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SERVICES */}
            <section className="services-section">
                <div className="services-inner-grid">
                    {/* Left Column matching TBWnCk6pD */}
                    <motion.div
                        className="services-intro-col"
                        initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                        whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ type: "spring", duration: 1, bounce: 0.2 }}
                    >
                        <SectionLabel>Services</SectionLabel>
                        <h2 className="services-heading">How can I help?</h2>
                        <p className="services-paragraph">
                            From early creative treatments and casting through on-set production and final master retouching, I provide end-to-end visual leadership.
                        </p>
                        <ul className="services-checklist">
                            <li className="checklist-item">
                                <span className="check-icon-circle"><Check size={14} /></span>
                                <span>Complete creative direction & moodboard development</span>
                            </li>
                            <li className="checklist-item">
                                <span className="check-icon-circle"><Check size={14} /></span>
                                <span>Seamless on-location and studio production coordination</span>
                            </li>
                            <li className="checklist-item">
                                <span className="check-icon-circle"><Check size={14} /></span>
                                <span>Calibrated color-grading & artisanal retouching workflow</span>
                            </li>
                        </ul>
                        <div className="services-action-wrap">
                            <MasterButton to="/portfolio" variant="dark">
                                View portfolio
                            </MasterButton>
                        </div>
                    </motion.div>

                    {/* Right Column: 3 Horizontal Service Cards with delays 0.1s, 0.2s, 0.3s */}
                    <div className="services-list-col">
                        {services.map((srv, idx) => (
                            <ServiceRow key={srv.id} service={srv} index={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. BENEFITS COLLAGE (BENTO GRID WITH EXACT SCROLL TRANSFORMS) */}
            <section className="benefits-section">
                <motion.div
                    className="section-center-header"
                    initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                    whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", duration: 1, bounce: 0.2 }}
                >
                    <SectionLabel>Benefits</SectionLabel>
                    <h2 className="section-title">Why work with me?</h2>
                    <p className="section-subtitle">
                        An intentional workflow refined over a decade of international editorial and commercial assignments.
                    </p>
                </motion.div>

                <div className="benefits-bento-grid">
                    {/* Card 1: Experience with Polaroid stack matching r7i_fgoKq */}
                    <motion.div
                        className="bento-card bento-card-experience"
                        initial={!reduceMotion ? { opacity: 0, x: -48, y: -32 } : {}}
                        whileInView={!reduceMotion ? { opacity: 1, x: 0, y: 0 } : {}}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
                        whileHover={!reduceMotion ? { y: -4 } : {}}
                    >
                        <div className="bento-card-img-wrap">
                            <img src="/images/polaroid-stack.svg" alt="Over 10 years experience" />
                            <Corners variant="all" />
                        </div>
                        <div className="bento-card-text">
                            <h3>Over 10 years of experience</h3>
                            <p>Directing high-profile commissions across Europe and North America.</p>
                        </div>
                    </motion.div>

                    {/* Card 2: Camera gear / lens matching ek4LPjrTK */}
                    <motion.div
                        className="bento-card bento-card-gear"
                        initial={!reduceMotion ? { opacity: 0, y: 80 } : {}}
                        whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
                        whileHover={!reduceMotion ? { y: -4 } : {}}
                    >
                        <div className="bento-card-img-wrap">
                            <img src="/images/camera-lens.svg" alt="Prime camera gear" />
                            <Corners variant="all" />
                        </div>
                        <div className="bento-card-text">
                            <h3>Shot with prime glass</h3>
                            <p>High-resolution full-frame bodies and surgical optical primes.</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Split portrait / editing matching ArSUe9hkj */}
                    <motion.div
                        className="bento-card bento-card-retouching"
                        initial={!reduceMotion ? { opacity: 0, scale: 1.2 } : {}}
                        whileInView={!reduceMotion ? { opacity: 1, scale: 1 } : {}}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ type: "spring", stiffness: 900, damping: 60, bounce: 0.3 }}
                        whileHover={!reduceMotion ? { y: -4 } : {}}
                    >
                        <div className="bento-card-img-wrap">
                            <img src="/images/split-portrait.svg" alt="Professional editing included" />
                            <Corners variant="all" />
                        </div>
                        <div className="bento-card-text">
                            <h3>Professional editing included</h3>
                            <p>Tonal consistency and realistic skin grading without artificial presets.</p>
                        </div>
                    </motion.div>

                    {/* Card 4: Hands / client experience matching A5RB7b8sS */}
                    <motion.div
                        className="bento-card bento-card-hands"
                        initial={!reduceMotion ? { opacity: 0, x: -70 } : {}}
                        whileInView={!reduceMotion ? { opacity: 1, x: 0 } : {}}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
                        whileHover={!reduceMotion ? { y: -4 } : {}}
                    >
                        <div className="bento-card-img-wrap">
                            <img src="/images/hands.svg" alt="Seamless client experience" />
                            <Corners variant="all" />
                        </div>
                        <div className="bento-card-text">
                            <h3>Seamless client experience</h3>
                            <p>Transparent communication, rapid review links, and dedicated crew.</p>
                        </div>
                    </motion.div>

                    {/* Card 5: Eye banner / tailored vision matching jIXMUk6lZ */}
                    <motion.div
                        className="bento-card bento-card-banner"
                        initial={!reduceMotion ? { opacity: 0, scale: 1.15 } : {}}
                        whileInView={!reduceMotion ? { opacity: 1, scale: 1 } : {}}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
                        whileHover={!reduceMotion ? { y: -4 } : {}}
                    >
                        <div className="bento-card-img-wrap">
                            <img src="/images/eye-banner.svg" alt="Tailored to your vision" />
                            <Corners variant="all" />
                        </div>
                        <div className="bento-card-text">
                            <h3>Tailored to your vision</h3>
                            <p>Every assignment is shaped around your brand’s bespoke narrative identity.</p>
                        </div>
                    </motion.div>

                    {/* Card 6: Stats card with orange stars & client count matching jRcTuHh3d */}
                    <motion.div
                        className="bento-card bento-card-stats"
                        initial={!reduceMotion ? { opacity: 0, x: 48 } : {}}
                        whileInView={!reduceMotion ? { opacity: 1, x: 0 } : {}}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
                        whileHover={!reduceMotion ? { y: -4 } : {}}
                    >
                        <div className="bento-stats-inner">
                            <div className="stars-row">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="var(--star-accent)" color="var(--star-accent)" />
                                ))}
                            </div>
                            <span className="bento-stat-number">100+</span>
                            <span className="bento-stat-label">Commercial Commissions Completed</span>
                            <div className="avatar-overlap-group">
                                <img src="/images/client-avatar-1.svg" alt="Client avatar" className="avatar-circle" />
                                <img src="/images/client-avatar-2.svg" alt="Client avatar" className="avatar-circle" />
                                <img src="/images/client-avatar-3.svg" alt="Client avatar" className="avatar-circle" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 7: Turnaround card matching VN3RALsnw */}
                    <motion.div
                        className="bento-card bento-card-turnaround"
                        initial={!reduceMotion ? { opacity: 0, y: 30 } : {}}
                        whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
                        whileHover={!reduceMotion ? { y: -4 } : {}}
                    >
                        <div className="bento-turnaround-inner">
                            <div className="turnaround-clock-circle">
                                <Clock size={28} />
                            </div>
                            <h3>7-day turnaround</h3>
                            <p>Expedited delivery of retouched master selects for print and digital launch.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 6. PORTFOLIO PREVIEW */}
            <section className="portfolio-preview-section">
                <motion.div
                    className="section-center-header"
                    initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                    whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", duration: 1, bounce: 0.2 }}
                >
                    <SectionLabel>Portfolio</SectionLabel>
                    <h2 className="section-title">A look through my lens</h2>
                    <p className="section-subtitle">
                        Selected campaign, editorial, and lookbook commissions focused on texture, shape, and human presence.
                    </p>

                    {/* Featured On Wordmarks */}
                    <div className="featured-wordmarks-row">
                        <span className="wordmark-item">VOGUE</span>
                        <span className="wordmark-bullet">·</span>
                        <span className="wordmark-item">ELLE</span>
                        <span className="wordmark-bullet">·</span>
                        <span className="wordmark-item">KINFOLK</span>
                        <span className="wordmark-bullet">·</span>
                        <span className="wordmark-item">HARPER'S BAZAAR</span>
                        <span className="wordmark-bullet">·</span>
                        <span className="wordmark-item">ASTER MAGAZINE</span>
                    </div>
                </motion.div>

                {/* 2-Column Portfolio Grid */}
                <div className="portfolio-two-col-grid">
                    {portfolioProjects.slice(0, 4).map((proj) => (
                        <PortfolioCard key={proj.id} project={proj} />
                    ))}
                </div>

                <div className="section-bottom-action">
                    <MasterButton to="/portfolio" variant="dark">
                        Browse all projects
                    </MasterButton>
                </div>
            </section>

            {/* 7. TESTIMONIALS */}
            <section className="testimonials-section">
                <motion.div
                    className="section-center-header"
                    initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                    whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", duration: 1, bounce: 0.2 }}
                >
                    <SectionLabel>Testimonials</SectionLabel>
                    <h2 className="section-title">What my clients say</h2>
                    <p className="section-subtitle">
                        Direct feedback from fashion directors, creative leads, and brand directors.
                    </p>
                </motion.div>

                <Testimonials items={testimonials} />
            </section>

            {/* 8. BLOG PREVIEW (WITH EXACT SPRING PHYSICS 120 20 2) */}
            <section className="blog-preview-section">
                <motion.div
                    className="blog-preview-header-row"
                    initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                    whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", duration: 1, bounce: 0.2 }}
                >
                    <div className="blog-preview-header-text">
                        <SectionLabel>Blog</SectionLabel>
                        <h2 className="section-title">Behind the lens</h2>
                        <p className="section-subtitle">
                            Notes on craft, camera gear, lighting direction, and production rhythm.
                        </p>
                    </div>
                    <div className="blog-preview-header-action">
                        <MasterButton to="/blog" variant="light">
                            View all posts
                        </MasterButton>
                    </div>
                </motion.div>

                {/* Must Read Featured card matching k1F0m73_V */}
                <motion.div
                    className="blog-featured-wrap"
                    initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                    whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20, mass: 2 }}
                >
                    <BlogPostCard post={featuredPost} featured={true} />
                </motion.div>

                {/* Three smaller post cards matching dk6DbXZ6a */}
                <motion.div
                    className="blog-three-col-grid"
                    initial={!reduceMotion ? { opacity: 0, y: 48 } : {}}
                    whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20, mass: 2 }}
                >
                    {otherPosts.map((post) => (
                        <BlogPostCard key={post.id} post={post} featured={false} />
                    ))}
                </motion.div>
            </section>

            {/* 9. FAQ */}
            <section className="faq-section">
                <div className="faq-two-col-layout">
                    <motion.div
                        className="faq-left-intro"
                        initial={!reduceMotion ? { opacity: 0, y: 40 } : {}}
                        whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ type: "spring", duration: 1, bounce: 0.2 }}
                    >
                        <SectionLabel>FAQ</SectionLabel>
                        <h2 className="faq-heading">Got questions?</h2>
                        <p className="faq-desc">
                            Here are answers to the most frequent inquiries regarding equipment, turnaround, global travel, pricing, and hair & makeup.
                        </p>
                        <div className="faq-direct-prompt">
                            <p>Have a custom project inquiry?</p>
                            <MasterButton to="/contact" variant="light">
                                Contact directly
                            </MasterButton>
                        </div>
                    </motion.div>

                    <div className="faq-right-accordion">
                        <GroupedAccordion items={faqs} />
                    </div>
                </div>
            </section>

            {/* 10. CLOSING CTA */}
            <CTASection />
        </div>
    )
}