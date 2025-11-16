# NexCubic Design Guidelines

## Design Approach
**Reference-Based Inspiration**: Clean, modern aesthetic drawing from 21st.dev (generous spacing, readable layouts), Tailwind UI patterns, and "Loveable" warm micro-interactions with friendly copy. Professional yet approachable tech consultancy positioning.

## Color Palette
- **Primary**: `#0EA5A4` (Teal/Cyan) - main brand color
- **Accent**: `#7C3AED` (Deep Violet) - secondary highlights
- **Dark**: `#0F172A` (Slate) - text and dark elements
- **Light Surfaces**: `#F8FAFC` (Near White) - backgrounds
- **Gradients**: Combine teal-to-violet for CTAs and featured elements

## Typography
- **Headings**: Inter or Poppins (weights: 600, 700, 800)
- **Body**: System font stack for performance
- **Hierarchy**: 
  - Hero H1: text-3xl sm:text-4xl, extrabold, tight tracking
  - Section H2: text-2xl, bold
  - Card H3/H4: font-semibold
  - Body: text-base, text-slate-600

## Layout System
- **Spacing Units**: Tailwind default scale with generous whitespace
- **Containers**: max-w-7xl for main content, max-w-4xl for forms/about
- **Sections**: py-12 to py-16 vertical rhythm
- **Cards**: rounded-2xl with soft shadows, p-6 to p-8 padding
- **Grid**: Single column mobile, 2-column tablet (md:), 3-column desktop (lg:) for service cards

## Core Components

### Navigation
- Sticky header (top-0 z-40) with backdrop-blur effect (bg-white/60)
- Logo + brand name on left
- Horizontal nav links (desktop), hamburger menu (mobile)
- Gradient CTA button in nav ("Get Quote")
- h-16 height, items centered

### Hero Section
- Split layout: 50/50 text/visual on desktop, stacked mobile
- Text: Eyebrow label (teal), large heading, descriptive paragraph, dual CTAs
- Visual: Illustration/mockup with floating card overlay (bottom-left)
- Trust indicator: "Trusted by 20+ startups" text below CTAs
- Background: Clean white, let content breathe

### Service Cards
- Grid layout (1/2/3 columns responsive)
- Icon in colored background circle (teal-50) + title horizontal layout
- Short description below
- Hover: lift effect (translateY -4px) + shadow increase
- White background cards on gray-50 section background

### Case Studies/Metrics
- 3-column grid (stacks mobile)
- Mix of gradient card (teal-to-violet with white text showing key metric) + white cards with case details
- Large numbers (text-3xl bold) for metrics
- Concise outcome descriptions

### Blog Cards
- Thumbnail image (h-40, object-cover) above content
- Metadata: Category + read time (text-xs, slate-500)
- Title (font-semibold) + excerpt
- 3-column grid desktop, 2-column tablet, single mobile
- Rounded corners (rounded-lg)

### Careers/Internships Listings
- Full-width cards (max-w-4xl container)
- Horizontal layout: Info left, Apply CTA right
- Role title (bold), metadata below (stipend, location, type)
- Teal CTA button
- White cards on gray-50 background, space-y-4 stacking

### Contact Form
- Single-column form (max-w-3xl)
- Full-width inputs with border, rounded-lg, p-3
- Textarea for message (rows-4)
- Primary CTA button + helper text ("We reply in 24-48 hrs")
- Labels with sr-only for accessibility

### Footer
- Multi-column layout (logo/about | quick links | contact info | newsletter)
- Social icons row
- Legal links bottom row
- Dark background (bg-slate-900) with light text

## Animations & Interactions
- **Entrance**: Fade + translateY(8px) with staggered delays (0.06s increments) using Framer Motion
- **Hero CTA**: Animated gradient background (background-size animation) + subtle scale on hover
- **Cards**: Transform translateY(-4px) on hover with shadow transition
- **Buttons**: Standard lift on hover
- **Microinteractions**: Icon reveals on service card hover (subtle)
- **Performance**: Respect prefers-reduced-motion

## Images

### Required Images:
1. **Hero Illustration** (right side): Modern tech/startup themed illustration or 3D render showcasing web development, AI automation concepts. Clean, colorful, professional aesthetic.

2. **Blog Post Thumbnails**: Relevant images for each blog article (16:9 aspect ratio preferred)

3. **Team Photos** (About page): Headshots or casual team photos on clean backgrounds

4. **Logo**: SVG format, works on light backgrounds (primary version) and dark backgrounds (footer version)

5. **Trust/Client Logos**: Grayscale logos of client companies or partners

**Hero Section**: Yes, large hero image/illustration on right side (50% width desktop), full-width stacked on mobile.

## Mobile-First Principles
- Single-column layouts default, expand on md: and lg: breakpoints
- Large, tappable CTAs (min height 48px)
- Sticky bottom CTA bar on mobile for high-conversion actions
- Touch-friendly spacing (minimum 44x44px tap targets)
- Hamburger menu for mobile navigation
- Fast loading: lazyload images, minimal blocking scripts

## Trust & Conversion Elements
- Client/partner logos strip (grayscale, subtle)
- Quantified outcomes in case study cards
- Testimonial snippets where relevant
- "Trusted by X+" social proof
- Clear, action-oriented CTAs throughout
- Response time promises on contact form

## Accessibility Requirements
- Semantic HTML5 elements (header, nav, main, article, footer)
- ARIA labels for interactive elements
- Alt text for all images
- 4.5:1 minimum contrast ratios
- Visible focus states
- Form labels (visible or sr-only)
- Keyboard navigation support