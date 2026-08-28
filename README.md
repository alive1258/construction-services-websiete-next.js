# Constructa — Construction Company Website

A production-grade web platform for a construction company, built with **Next.js 16 (App Router)**, **React 19**, and **TypeScript**. The public-facing site is a 5-page marketing site (Home, Services, Projects, About, Contact) with static content, styled after an industry-standard construction template (navy/orange/dark-green palette). The codebase also retains the full-stack infrastructure it was originally built with — **Stripe-powered checkout**, a **Socket.IO real-time support chat**, and a self-service **admin dashboard (CMS)** — carried over from this project's previous life as a yacht-charter platform (see [Legacy Platform Capabilities](#legacy-platform-capabilities-carried-over) below).

---

## Overview

| | |
|---|---|
| **Type** | Full-stack frontend (Next.js) consuming a REST API |
| **Audience** | Public marketing site (construction company) + internal content-management dashboard |
| **Stack** | Next.js 16, React 19, TypeScript, Tailwind CSS 4, Redux Toolkit |
| **Rendering** | App Router with route groups for layout separation |

The codebase is organized into two clearly separated experiences under a single Next.js App Router instance:

- **`(withCommonLayout)`** — the public construction site: **Home, Services, Projects, About, Contact** (each with 7 static, fully responsive sections), plus legacy routes carried over from the previous build (booking funnel, blog, experiences, privacy/terms/refund policy) that are no longer linked from navigation.
- **`(dashboardLayout)`** — the internal CMS: authenticated staff tooling originally built to manage yacht-charter content (hero sections, yachts, destinations, blog, gallery, testimonials, FAQs, employees, roles/permissions), plus operational tooling — **bookings**, **payments**, a **live support chat inbox**, and account settings. This was intentionally left untouched during the construction-site redesign (see below) and does not currently manage any content type rendered on the new public pages.

This route-group pattern keeps public and authenticated experiences on independent layouts, navigation, and data-fetching strategies while sharing the same build and deployment pipeline.

---

## Tech Stack

**Core**
- [Next.js 16](https://nextjs.org/) — App Router, file-based routing, image optimization, server/client component split
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/) — strict typing across pages, components, hooks, and API layer

**State & Data**
- [Redux Toolkit](https://redux-toolkit.js.org/) + `react-redux` — global state, RTK Query API slices
- `redux-persist` — persisted client state (e.g. auth session)
- [Axios](https://axios-http.com/) — typed HTTP client / API service layer
- `js-cookie` / `cookies-next` — cookie-based session handling
- `jwt-decode` — client-side token inspection

**Payments & Real-Time** *(legacy infrastructure — see [Legacy Platform Capabilities](#legacy-platform-capabilities-carried-over))*
- [Stripe Checkout](https://stripe.com/) — redirect-based deposit/balance payment flow (no card data touches the client)
- [Socket.IO Client](https://socket.io/) — persistent WebSocket connection (`/chat` namespace) powering the live support chat widget and staff inbox, with typing indicators, read receipts, and presence

**UI & Forms**
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling
- [react-hook-form](https://react-hook-form.com/) — form state and validation
- [react-datepicker](https://reactdatepicker.com/), `react-paginate`, `lucide-react`, `react-icons`
- `sweetalert2`, `react-toastify` — user feedback / alerts
- `recharts` — dashboard analytics and charts
- `html2canvas` + `jspdf` — client-side document/PDF export

**Tooling**
- ESLint 9 (flat config) with `eslint-config-next`
- `date-fns` for date formatting/manipulation

---

## Project Structure

```
src/
├── app/
│   ├── (withCommonLayout)/
│   │   ├── page.tsx            # Home
│   │   ├── services/           # Services page
│   │   ├── projects/           # Projects page
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   └── booking/ blog/ experiences/ my-bookings/ privacy-policy/ ...
│   │                           # legacy routes, unlinked from the new nav
│   ├── (dashboardLayout)/
│   │   └── dashboard/           # legacy CMS — see Legacy Platform Capabilities
│   └── login/ signup/ otp/      # Authentication flows (shared by customers & staff)
├── components/
│   ├── Common/                  # Shared form controls, modals, auth UI
│   ├── Shared/
│   │   ├── MessageWidget/       # Floating real-time chat widget (legacy, still wired)
│   │   └── Navbar/ Footer/ PageHero/ Logo   # restyled for the construction site
│   └── Ui/
│       ├── HomePage/            # Hero, Services Overview, Why Choose Us, Process,
│       │                        # Stats Band, Featured Projects, Testimonials
│       ├── ServicesPage/        # Services Grid, How We Work, Pricing, FAQ, ...
│       ├── ProjectsPage/        # Project Categories, filterable Projects Grid, ...
│       ├── AboutPage/           # Story, Stats, Core Values, Leadership Team, ...
│       ├── ContactPage/         # Info Cards, Form, Map, FAQ, Testimonials, ...
│       └── Dashboard/           # legacy CMS modules — see Legacy Platform Capabilities
├── redux/
│   ├── api/                     # RTK Query API slices (incl. chatApi)
│   └── features/auth/           # Auth state slice
├── services/                    # API service functions (Axios)
├── hooks/
│   └── useChatSocket.ts         # Socket.IO connection, message state, typing/read-receipt logic
├── helpers/ lib/ utils/         # Utilities, providers, shared constants/data
└── types/                       # Shared TypeScript types
```

---

## Key Features

- **5-page construction marketing site** — Home, Services, Projects, About, and Contact, each built from 7 static, fully responsive sections (mobile/tablet/desktop) matching an industry-standard construction template: hero banners, service grids, work-process bands, stats strips, filterable project galleries, pricing plans, team/values sections, FAQs, and CTA banners.
- **Consistent design system** — navy/orange/dark-green theme tokens (`globals.css`), a shared `PageHero` for every inner-page banner, and a restyled `Navbar`/`Footer`/`Logo` under the "Constructa" brand.
- **Fully static content** — no backend/API calls on any of the 5 public pages; all copy and imagery is hardcoded, making the site trivial to preview and deploy standalone.

### Legacy Platform Capabilities (carried over)

The project was originally a yacht-charter booking platform. The features below still exist in the codebase and remain functional, but are **not** used by or linked from the new construction-site pages:

- **End-to-end booking & Stripe payments** — date/capacity-aware booking requests and redirect-based Stripe Checkout, with `/my-bookings` for customer-side tracking. *(Known issue: `/booking/confirmation` and `/booking/cancelled` currently fail to build — they import a component module that no longer exists in the repo; this predates the construction-site redesign.)*
- **Real-time support chat (Socket.IO)** — floating chat widget (still present in the Navbar) and a staff inbox in the dashboard, with typing indicators, read receipts, and presence.
- **Full CMS/admin dashboard** — role-based staff access for managing hero content, yachts/services, destinations, blog, gallery, testimonials, FAQs, employees, bookings, and payments. None of these content types currently feed the public construction pages, which are static.
- **Authentication & accounts** — email/OTP-based signup and login, JWT session handling, protected dashboard routes, and account settings.
- **Role & permission management** — configurable staff roles for dashboard access control.
- **Document generation** — client-side PDF export via `html2canvas` + `jspdf`.

If the construction site is going to keep evolving, the natural next step is either wiring these 5 pages to the existing CMS (adding construction-appropriate content types) or trimming the unused legacy booking/chat/CMS code entirely.

---

## Getting Started

### Prerequisites
- Node.js 18.18+ (recommended: latest LTS)
- npm (project is committed with `package-lock.json`)
- A running instance of the backend API (only required for the legacy dashboard/booking/chat features — the 5 public pages render without it)

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_API_URL=https://your-api-host/api
```

The Socket.IO client derives its connection origin from this same variable (stripping the `/api/v1` suffix), so no separate chat/socket URL needs to be configured.

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) for the public site, and `/dashboard` for the legacy CMS (requires authentication).

### Production Build

```bash
npm run build
npm run start
```

> Note: a full production build currently fails due to the pre-existing `/booking/confirmation` and `/booking/cancelled` issue described above — unrelated to the public construction pages, which compile and serve cleanly on their own.

### Linting

```bash
npm run lint
```

---

## Deployment

The app builds as a standard Next.js application and deploys cleanly to [Vercel](https://vercel.com/) or any Node-compatible host. Ensure `NEXT_PUBLIC_API_URL` and any additional remote image hostnames (see `next.config.ts` → `images.remotePatterns`) are configured per environment. `images.unsplash.com` is already allowlisted for the photography used across the 5 public pages.

---

## Author

Built and maintained by **Zamirul Kabir** — frontend engineer specializing in Next.js/React platforms with integrated CMS tooling for non-technical stakeholders.
