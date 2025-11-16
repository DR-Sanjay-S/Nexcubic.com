# NexCubic - Tech Support for Startups

## Overview

NexCubic is a modern multi-page marketing website for a technology consultancy focused on serving startups and SMBs. The platform showcases services including web development, mobile app development, AI automation, UI/UX design, marketing, and tech consultancy. The website features a contact form system and internship/career application management, with a clean, conversion-focused design inspired by modern SaaS websites.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Client-side routing implemented with Wouter (lightweight React Router alternative)
- Single-page application architecture with code splitting via Vite

**UI Component Strategy**
- Radix UI primitives for accessible, unstyled component foundations
- shadcn/ui component library with "new-york" style variant
- Tailwind CSS utility-first styling with extensive custom design tokens
- Design system includes custom color palette (teal primary, violet accent), typography scale, and spacing system following generous whitespace principles

**State Management**
- TanStack Query (React Query) for server state management and API caching
- Local component state with React hooks for UI interactions
- Form state managed via react-hook-form with Zod schema validation

**Design Philosophy**
- Mobile-first responsive design with breakpoint-based layouts
- Reference-based inspiration from 21st.dev (clean spacing), Tailwind UI patterns, and "Loveable" warm interactions
- Generous whitespace, rounded cards (rounded-2xl), soft shadows, and hover lift effects
- Gradient CTAs combining teal-to-violet colors for visual emphasis

### Backend Architecture

**Server Framework**
- Express.js RESTful API server with TypeScript
- Development mode uses Vite middleware for hot reloading
- Production builds bundle server code with esbuild

**API Design**
- RESTful endpoints for contact submissions (`POST /api/contact`, `GET /api/contacts`)
- Job application endpoints (`POST /api/applications`, `GET /api/applications`)
- JSON request/response format with Zod schema validation
- Request logging middleware for API routes with duration tracking

**Data Layer**
- In-memory storage implementation (MemStorage class) for development
- Drizzle ORM configured with PostgreSQL dialect for production database
- Schema-first approach with shared TypeScript types between client and server
- Database migrations managed via drizzle-kit

**Data Models**
- Contacts table: id, name, email, company (optional), message, createdAt
- Applications table: id, name, email, phone (optional), position, resume (optional), coverLetter (optional), createdAt
- UUID primary keys generated via PostgreSQL gen_random_uuid()
- Timestamps with automatic defaultNow() on creation

### External Dependencies

**Database**
- PostgreSQL via Neon Database serverless driver (@neondatabase/serverless)
- Drizzle ORM for type-safe SQL queries and schema management
- Connection pooling handled by Neon's serverless architecture

**UI Libraries**
- Complete Radix UI component suite for dialogs, dropdowns, tooltips, accordions, tabs, etc.
- Lucide React for consistent icon system
- embla-carousel-react for carousel functionality
- cmdk for command palette interfaces
- date-fns for date formatting and manipulation

**Development Tools**
- Replit-specific plugins for development banner, cartographer, and runtime error overlay
- TypeScript with strict mode for type safety
- PostCSS with Tailwind CSS and autoprefixer for CSS processing

**Third-Party Services**
- Google Fonts preconnected for Inter, Poppins, DM Sans, Fira Code, and Geist Mono typefaces
- Session management via connect-pg-simple (PostgreSQL session store)

**Build & Deployment**
- Vite bundler for client-side code with React plugin
- esbuild for server bundling with ESM format
- Environment variable configuration for DATABASE_URL
- Path aliases configured (@/ for client/src, @shared for shared schemas, @assets for attached_assets)