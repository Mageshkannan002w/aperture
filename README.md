# Aperture — August Renner Photography Portfolio

A high-end, editorial, image-led photography portfolio website for **August Renner** (fashion, portrait, editorial, and commercial photographer based between Berlin and London). Built with **Vite**, **React**, **React Router**, **Framer Motion**, and custom vanilla CSS design tokens.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🏛️ Project Architecture & Routes

| Route | Page Component | Description |
|---|---|---|
| `/` | `HomePage.jsx` | Hero with atmospheric layers, radial polaroids, trust strip, sticky intro, services, bento benefits, portfolio preview, testimonials, blog preview, FAQ accordion, and closing CTA |
| `/portfolio` | `PortfolioPage.jsx` | Stacked list of extra-large project cards with floating bottom navigation |
| `/portfolio/:slug` | `PortfolioDetailPage.jsx` | Full case study with meta specs, large cover, mixed-aspect 8-image gallery, and prev/next links |
| `/blog` | `BlogPage.jsx` | Featured "Must Read" 2-column article card and responsive post collection |
| `/blog/:slug` | `BlogDetailPage.jsx` | Editorial article with pull-quotes, author meta, and related posts |
| `/about` | `AboutPage.jsx` | Circular portrait hero, 2-column narrative with drop cap biography, client quote, and gear list |
| `/contact` | `ContactPage.jsx` | Production inquiry form with client-side validation, direct email, and studio locations |
| `/privacy-policy` | `PrivacyPolicyPage.jsx` | Studio privacy practices and data retention policy |
| `/terms-and-conditions` | `TermsPage.jsx` | Commercial licensing, copyright, and booking terms |
| `*` | `NotFoundPage.jsx` | Custom 404 page with camera-cornered framing and navigation return |

---

## 🧩 Reusable Components (`src/components/`)

- **`TopNavigation.jsx`**: Airy full-width header with brand lockup, center camera shutter aperture mark, inline navigation, and responsive mobile drawer.
- **`BottomNavigation.jsx`**: Floating black pill navigation with 3-layer shadow fixed 70px above viewport bottom.
- **`MasterButton.jsx`**: Full-pill button with vertical label-swap reveal on hover (4 variants: `dark`, `light`, `dark-text`, `light-text`).
- **`Corners.jsx`**: Camera L-bracket overlays with 1.5px white strokes (`all` corners and `top` corners).
- **`ImageFrame.jsx`**: Image container with rounded corners, camera brackets, and smooth hover zoom.
- **`PortfolioCard.jsx`**: 16px radius cool-gray card with 10px inner radius image and camera corners.
- **`BlogPostCard.jsx`**: 3:2 standard cards and featured 2-column "Must Read" layout.
- **`ServiceRow.jsx`**: Horizontal service card with thumbnail preview and arrow affordance.
- **`GroupedAccordion.jsx`**: Accessible FAQ accordion with circular plus/minus indicator.
- **`PolaroidStack.jsx`**: Radial floating compositions and 3-card overlapping trio.
- **`Testimonials.jsx`**: Client reviews with 5 warm orange-red stars, quotes, and avatars.
- **`CTASection.jsx`**: Closing conversion block with overlapping polaroid trio.
- **`Preloader.jsx`**: Smooth entrance coordinator with aperture animation.

---

## 📷 Local Asset Manifest (`public/images/`)

All placeholder assets are stored locally in `public/images/`. Replace any placeholder file with your final high-resolution client photography:

| Asset File | Target Resolution | Section / Usage |
|---|---|---|
| `sky.svg` | 1200 × 800 | Hero background sky atmosphere |
| `cloud.svg` | 816 × 445 | Hero ambient diffusion cloud layer |
| `portrait-cutout.svg` | 632 × 882 | Hero foreground photographer silhouette |
| `hero-polaroid-1.svg` to `5.svg` | 400 × 500 | Hero loose radial polaroid composition |
| `intro-1.svg` to `6.svg` | Mixed (800×1000, 1200×700) | Sticky intro asymmetric image composition |
| `project-wild-bloom-cover.svg` | 1200 × 800 | Project 1: Wild Bloom (Aster Magazine) Cover |
| `project-wild-bloom-1.svg` to `8.svg` | 900×1100 / 1200×800 | Project 1 Gallery (8 frames) |
| `project-soft-metals-cover.svg` | 1200 × 800 | Project 2: Soft Metals (Nōr Studio Paris) Cover |
| `project-soft-metals-1.svg` to `8.svg` | 900×1100 / 1200×800 | Project 2 Gallery (8 frames) |
| `project-coastal-slow-cover.svg` | 1200 × 800 | Project 3: Coastal Slow (Pale Form) Cover |
| `project-coastal-slow-1.svg` to `8.svg` | 900×1100 / 1200×800 | Project 3 Gallery (8 frames) |
| `project-sun-veil-cover.svg` | 1200 × 800 | Project 4: Sun Veil (Aura Eyewear) Cover |
| `project-sun-veil-1.svg` to `8.svg` | 900×1100 / 1200×800 | Project 4 Gallery (8 frames) |
| `polaroid-stack.svg` | 600 × 600 | Benefits bento: Over 10 years experience |
| `camera-lens.svg` | 600 × 500 | Benefits bento: Prime camera gear |
| `split-portrait.svg` | 600 × 700 | Benefits bento: Professional editing |
| `hands.svg` | 600 × 500 | Benefits bento: Client experience |
| `eye-banner.svg` | 1200 × 450 | Benefits bento: Tailored vision banner |
| `service-fashion.svg` | 500 × 380 | Services thumbnail: Fashion & Editorial |
| `service-brand.svg` | 500 × 380 | Services thumbnail: Brand & Commercial |
| `service-portrait.svg` | 500 × 380 | Services thumbnail: Portrait & Studio |
| `blog-fullframe.svg` | 1200 × 800 | Blog Must Read: Full-frame vs Crop |
| `blog-natural-light.svg` | 800 × 533 | Blog: Finding Natural Light |
| `blog-editing-style.svg` | 800 × 533 | Blog: Approach to Editing |
| `blog-pricing-strategies.svg` | 800 × 533 | Blog: Pricing Your Photography |
| `august-portrait.svg` | 600 × 600 | About page circular headshot |
| `client-avatar-1.svg` to `3.svg` | 200 × 200 | Client testimonial and trust avatars |
| `cta-polaroid-1.svg` to `3.svg` | 450 × 550 | CTA & footer overlapping portrait trio |

---

## 🎨 Theme & Typography Tokens

- **Palette**: Pure white (`#ffffff`), near-black ink (`#000000` / `#0a0a0a`), muted gray (`#6b7280`), pale cool-gray card surface (`#f5f6f8`), warm orange accent (`#f97316`).
- **Typography**: Inter primary with generous line height and tight negative tracking (`-0.03em` to `-0.05em`) on editorial titles.
- **Breakpoints**: Desktop (`≥1200px`), Tablet (`810px–1199px`), Mobile (`≤809px`).
- **Accessibility**: Full keyboard navigability, semantic tags, ARIA states for drawers and accordions, and `prefers-reduced-motion` compliance.
