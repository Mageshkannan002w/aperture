import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Check, Clock, Eye, Sparkles, Star, Users } from "lucide-react";

import SectionLabel from "../components/SectionLabel";
import MasterButton from "../components/MasterButton";
import Corners from "../components/Corners";
import ImageFrame from "../components/ImageFrame";
import PortfolioCard from "../components/PortfolioCard";
import BlogPostCard from "../components/BlogPostCard";
import ServiceRow from "../components/ServiceRow";
import GroupedAccordion from "../components/GroupedAccordion";
import Testimonials from "../components/Testimonials";
import PolaroidStack from "../components/PolaroidStack";
import Preloader from "../components/Preloader";
import CTASection from "../components/CTASection";
import TextEffect from "../components/TextEffect";
import StickyBlurReveal from "../components/StickyBlurReveal";
import ExperienceSection from "../components/ExperienceSection";

import {
  portfolioProjects,
  blogPosts,
  services,
  testimonials,
  faqs,
  siteInfo,
  experiences,
} from "../data/content";

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const [preloaded, setPreloaded] = useState(false);

  // Parallax setup for Cloud (speed 90) and Head/Portrait (speed 106)
  const { scrollY } = useScroll();
  const cloudParallaxY = useTransform(scrollY, [0, 800], [0, 80]);
  const headParallaxY = useTransform(scrollY, [0, 800], [0, -40]);

  // Scroll progress for Sticky Philosophy section
  const introSectionRef = useRef(null);
  const { scrollYProgress: introProgress } = useScroll({
    target: introSectionRef,
    offset: ["start start", "end end"],
  });

  // Featured Must Read post and smaller posts
  const featuredPost = blogPosts.find((p) => p.mustRead) || blogPosts[0];
  const otherPosts = blogPosts
    .filter((p) => p.id !== featuredPost.id)
    .slice(0, 3);

  // Hero polaroids loose radial composition
  const heroPolaroids = [
    { src: "/images/hero-polaroid-1.svg", caption: "Paris I" },
    { src: "/images/hero-polaroid-2.svg", caption: "London II" },
    { src: "/images/hero-polaroid-3.svg", caption: "Comporta III" },
    { src: "/images/hero-polaroid-4.svg", caption: "Atelier IV" },
    { src: "/images/hero-polaroid-5.svg", caption: "Studio V" },
  ];

  return (
    <div className="home-page-root">
      {/* Preloader sequence */}
      <Preloader onComplete={() => setPreloaded(true)} />

      {/* 1. HERO SECTION */}
      <section className="home-hero-section">
        {/* Scroll activation marker */}
        <div
          id="hero-scroll-marker"
          className="scroll-marker"
          aria-hidden="true"
        />

        {/* Sky Layer (Full Bleed Background) */}
        <div className="hero-sky-wrap" aria-hidden="true">
          <img src="/images/sky.jpg" alt="" className="hero-sky-img" />
        </div>

        {/* Cloud Layer: Parallax Speed 90 */}
        <div className="hero-cloud-container" aria-hidden="true">
          <motion.div
            className="hero-cloud-motion-wrap"
            style={!reduceMotion ? { y: cloudParallaxY } : {}}
          >
            <img src="/images/cloud.png" alt="" className="hero-cloud-img" />
          </motion.div>
        </div>

        {/* Center Title Container: AUGUST + Camera Corners */}
        <div className="hero-title-container">
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
            <h1 className="hero-main-heading">AUGUST</h1>
          </motion.div>
        </div>

        {/* Head Cutout Layer: Parallax Speed 106 */}
        <div className="hero-head-container" aria-hidden="true">
          <motion.div
            className="hero-head-motion-wrap"
            style={!reduceMotion ? { y: headParallaxY } : {}}
          >
            <img
              src="/images/head.png"
              alt="August Renner"
              className="hero-head-img"
            />
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
            <svg
              viewBox="0 0 100 100"
              width="64"
              height="64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
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
                <img
                  src="/images/client-avatar-1.svg"
                  alt="Client avatar"
                  className="avatar-circle"
                />
                <img
                  src="/images/client-avatar-2.svg"
                  alt="Client avatar"
                  className="avatar-circle"
                />
                <img
                  src="/images/client-avatar-3.svg"
                  alt="Client avatar"
                  className="avatar-circle"
                />
              </div>
              <div className="stars-row" aria-label="5 star trusted rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    fill="var(--star-accent)"
                    color="var(--star-accent)"
                  />
                ))}
              </div>
            </div>

            <h2 className="trust-headline">
              Trusted by brands & creatives worldwide
            </h2>
            <p className="trust-description">
              Over 100 brands, magazines, and independent labels trust me to
              capture their stories through bold, refined imagery.
            </p>

            <div className="trust-label-row">
              <SectionLabel>Philosophy</SectionLabel>
            </div>
          </motion.div>

          {/* Right subtle wreath ornament */}
          <div className="trust-wreath trust-wreath-right" aria-hidden="true">
            <svg
              viewBox="0 0 100 100"
              width="64"
              height="64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M50 10 C65 25, 80 45, 75 75 C70 85, 55 92, 50 95" />
              <circle cx="70" cy="40" r="4" />
              <circle cx="74" cy="55" r="4" />
              <circle cx="72" cy="70" r="4" />
            </svg>
          </div>
        </div>
      </section>

      {/* 3. STICKY INTRODUCTION & ASYMMETRIC SCROLLING IMAGES */}
      <section ref={introSectionRef} className="intro-sticky-section">
        {/* Sticky Center Viewport: Philosophy Badge, Word Blur Reveal, © August Renner */}
        <div className="intro-sticky-viewport">
          <div className="intro-sticky-center-card">
            <div className="intro-badge-wrap">
              <SectionLabel>Philosophy</SectionLabel>
            </div>

            <StickyBlurReveal
              text="Every photograph should make an impact. I capture moments that blend artistry, storytelling, and emotion to create visuals that stand out."
              scrollProgress={introProgress}
            />

            <span className="intro-signature">© August Renner</span>
          </div>
        </div>

        {/* Flowing Images that scroll up and frame the sticky center */}
        <div className="intro-scroll-images-flow">
          {/* Row 1: Image 1 (Left: Jacket) & Image 2 (Right: Earrings) */}
          <div className="intro-img-row intro-row-1-2">
            <div className="intro-img-col intro-col-1">
              <img
                src="/images/intro-1.png"
                alt="Fashion portrait in white hood"
                className="intro-photo-card intro-photo-1"
              />
            </div>
            <div className="intro-img-col intro-col-2">
              <img
                src="/images/intro-2.png"
                alt="Gold hoop earrings on textured stone"
                className="intro-photo-card intro-photo-2"
              />
            </div>
          </div>

          {/* Row 2: Image 3 (Center) */}
          <div className="intro-img-row intro-row-3">
            <div className="intro-img-col intro-col-3">
              <img
                src="/images/intro-3.png"
                alt="Studio portraiture"
                className="intro-photo-card intro-photo-3"
              />
            </div>
          </div>

          {/* Row 3: Image 4 (Left) & Image 5 (Right) */}
          <div className="intro-img-row intro-row-4-5">
            <div className="intro-img-col intro-col-4">
              <img
                src="/images/intro-4.png"
                alt="Model on neon backdrop"
                className="intro-photo-card intro-photo-4"
              />
            </div>
            <div className="intro-img-col intro-col-5">
              <img
                src="/images/intro-5.png"
                alt="Artistic motion blur capture"
                className="intro-photo-card intro-photo-5"
              />
            </div>
          </div>

          {/* Row 4: Image 6 (Wide Portrait) */}
          <div className="intro-img-row intro-row-6">
            <div className="intro-img-col intro-col-6">
              <img
                src="/images/intro-6.png"
                alt="Expressive man portrait"
                className="intro-photo-card intro-photo-6"
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
              From editorial shoots to personal portraits, I bring your vision
              to life with precision, creativity, and a deep understanding of
              light and composition.
            </p>
            <div className="services-include-title">All services include:</div>
            <ul className="services-checklist">
              <li className="checklist-item">
                <span className="check-icon-circle">
                  <Check size={14} />
                </span>
                <span>Professional Editing</span>
              </li>
              <li className="checklist-item">
                <span className="check-icon-circle">
                  <Check size={14} />
                </span>
                <span>Edited & Unedited (RAW) Images</span>
              </li>
              <li className="checklist-item">
                <span className="check-icon-circle">
                  <Check size={14} />
                </span>
                <span>Personal and Commercial Licensing</span>
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
            Great photography is more than a service—it is an experience built
            on collaboration, trust, and creativity.
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
              <img
                src="/images/polaroid-stack.svg"
                alt="Over 10 years experience"
              />
              <Corners variant="all" />
            </div>
            <div className="bento-card-text">
              <h3>Over 10 years of experience</h3>
            </div>
          </motion.div>

          {/* Card 2: Camera gear with lens offset matching ek4LPjrTK */}
          <motion.div
            className="bento-card bento-card-gear"
            initial={!reduceMotion ? { opacity: 0, y: 80 } : {}}
            whileInView={!reduceMotion ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", duration: 1, bounce: 0.3 }}
            whileHover={!reduceMotion ? { y: -4 } : {}}
          >
            <div className="bento-card-text">
              <h3>Shot with the best camera gear</h3>
            </div>
            <div className="bento-card-img-wrap">
              <img src="/images/camera-lens.svg" alt="Camera optical lens" />
              <Corners variant="all" />
            </div>
          </motion.div>

          {/* Card 3: Split portrait retouching matching ArSUe9hkj */}
          <motion.div
            className="bento-card bento-card-retouching"
            initial={!reduceMotion ? { opacity: 0, scale: 1.2 } : {}}
            whileInView={!reduceMotion ? { opacity: 1, scale: 1 } : {}}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 900,
              damping: 60,
              mass: 1,
            }}
            whileHover={!reduceMotion ? { y: -4 } : {}}
          >
            <div className="bento-card-img-wrap">
              <img
                src="/images/split-portrait.svg"
                alt="Before and after retouching comparison"
              />
              <Corners variant="all" />
            </div>
            <div className="bento-card-text">
              <h3>Professional editing included</h3>
            </div>
          </motion.div>

          {/* Card 4: Hands touching / client journey matching A5RB7b8sS & hKPE01EDy */}
          <motion.div
            className="bento-card bento-card-hands"
            initial={!reduceMotion ? { opacity: 0, x: -70 } : {}}
            whileInView={!reduceMotion ? { opacity: 1, x: 0 } : {}}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", duration: 1, bounce: 0.3 }}
            whileHover={!reduceMotion ? { y: -4 } : {}}
          >
            <div className="bento-card-img-wrap">
              <img src="/images/hands.svg" alt="Seamless collaboration" />
              <Corners variant="all" />
            </div>
            <div className="bento-card-text">
              <h3>Seamless client experience</h3>
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
                  <Star
                    key={i}
                    size={18}
                    fill="var(--star-accent)"
                    color="var(--star-accent)"
                  />
                ))}
              </div>
              <span className="bento-stat-number">524</span>
              <span className="bento-stat-label">satisfied clients</span>
              <div className="avatar-overlap-group">
                <img
                  src="/images/client-avatar-1.svg"
                  alt="Client avatar"
                  className="avatar-circle"
                />
                <img
                  src="/images/client-avatar-2.svg"
                  alt="Client avatar"
                  className="avatar-circle"
                />
                <img
                  src="/images/client-avatar-3.svg"
                  alt="Client avatar"
                  className="avatar-circle"
                />
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
            <div className="turnaround-clock-visual">
              <Clock size={44} className="clock-symbol" />
            </div>
            <div className="bento-card-text">
              <h3>7-day turnaround</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. EXPERIENCE */}
      <ExperienceSection experiences={experiences} />

      {/* 7. PORTFOLIO PREVIEW */}
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
            Each frame tells a story, capturing genuine moments that showcase my
            style and vision. Browse through my favorite projects.
          </p>

          {/* Featured On Wordmarks */}
          <div className="featured-section-wrap">
            <span className="featured-on-label">Featured on:</span>
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
          </div>
        </motion.div>

        {/* Overlapping Sticky Portfolio Cards Deck matching Framer B5vUnMgYa */}
        <div className="portfolio-sticky-deck-container">
          {/* Top Row: Sticky cards 1 & 2 (Wild Bloom & Soft Metals) */}
          <div className="portfolio-deck-row portfolio-deck-top">
            <div className="portfolio-two-col-grid">
              {portfolioProjects.slice(0, 2).map((proj) => (
                <PortfolioCard
                  key={proj.id}
                  project={proj}
                  badgeText="Portfolio"
                />
              ))}
            </div>
          </div>

          {/* Bottom Row: Cards 3 & 4 (Coastal Slow & Sun Veil - smoothly overlaps top cards on scroll) */}
          <div className="portfolio-deck-row portfolio-deck-bottom">
            <div className="portfolio-two-col-grid">
              {portfolioProjects.slice(2, 4).map((proj) => (
                <PortfolioCard
                  key={proj.id}
                  project={proj}
                  badgeText="Portfolio"
                />
              ))}
            </div>
          </div>
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
            Direct feedback from fashion directors, creative leads, and brand
            directors.
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
              Notes on craft, camera gear, lighting direction, and production
              rhythm.
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
              Here are answers to the most frequent inquiries regarding
              equipment, turnaround, global travel, pricing, and hair & makeup.
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
  );
}
