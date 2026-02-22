# Implementation Plan - Social Work Platform Revamp

This plan outlines the development of a modern, secure, and feature-rich platform for social work and counseling, building upon the ACTV Uganda foundation.

## 1. Design System & Aesthetics
- **Color Palette**: Deep Professional Blue (#1e3a8a), Trusting Teal (#0d9488), and Clean Slate (#f8fafc).
- **Typography**: `Inter` for readability and `Outfit` for a modern, friendly feel.
- **Visual Styles**: Soft shadows, 12px border radii, glassmorphism for the client portal, and smooth micro-animations.

## 2. Core Structure (HTML5)
- **Single Page Application (SPA) approach**: Use Vanilla JS to swap views (Home, Portal, Booking) for an app-like feel.
- **Semantic Tags**: Use `<header>`, `<main>`, `<footer>`, `<section>`.
- **Unique IDs**: For testing and navigation as per SEO/Testing requirements.

## 3. Key Feature Implementation
### A. Client Portal & Auth (✔️ 1, 4)
- Simulated Authentication system using `localStorage`.
- Dashboard view with "Upcoming Appointments", "Recent Messages", and "Resources".
- Secure messaging UI (simulated).

### B. Online Booking (✔️ 2, 3)
- Interactive Calendar component.
- Intake form integration (Multi-step process).
- Link to Video Session (Simulated Zoom/Jitsi link).

### C. Content & Information (✔️ 5, 6, 7, 8, 9)
- **Therapist Profiles**: Dynamic card gallery.
- **Service Pages**: Icon-based grid with detailed descriptions.
- **Blog/FAQ**: Searchable resource section.

### D. Contact & Conversion (✔️ 10, 12)
- Encrypted-looking secure contact forms.
- Sticky "Book Now" CTA in the header and footer.

## 4. Technical Details
- **Architecture**: Modular Vanilla JS (ES Modules).
- **Responsiveness**: Flexbox/Grid-based layout (Mobile-first).
- **SEO**: Meta tags, OpenGraph data, and structured data.

## 5. Timeline
1.  **Foundation**: CSS Design System & Layout.
2.  **Home & Services**: Static content implementation.
3.  **Client Portal**: Auth logic and Dashboard UI.
4.  **Booking**: Calendar and Intake workflows.
5.  **Final Polish**: Animations, SEO, and Mobile testing.
