## 💵 Estimated Costs — Detailed Breakdown

This document extracts and expands only the Estimated Costs section from the proposal, adding succinct descriptions for each stage to clarify scope and deliverables.

---

### Option A: Full Development

| Item | Cost (SAR) |
| --- | --- |
| UI/UX Design | 15,000 – 20,000 |
| Web Development | 30,000 – 45,000 |
| Mobile Applications | 40,000 – 55,000 |
| Backend & APIs | 25,000 – 35,000 |
| Testing & Deployment | 10,000 – 15,000 |
| **Total** | **120,000 – 170,000** |

#### Stage Descriptions

1) UI/UX Design (2–4 weeks)
- Research & Requirements: stakeholder interviews, journey mapping, primary use-cases.
- Information Architecture: sitemap, navigational flows, content structure.
- Wireframes & Prototypes: low-to-high fidelity flows for Patient, Provider, and Admin.
- Design System: tokens, components (inputs, cards, lists, modals), states and accessibility.
- Handoff: annotated specs and assets for engineering.

2) Web Development (3–6 weeks)
- Frontend Setup: Next.js App Router, TypeScript, Tailwind, UI components.
- Core Screens: auth, listings/search, booking, orders, profile, dashboards.
- State & Data: server requests, caching, optimistic updates where applicable.
- Integrations: payments (stubs), maps, notifications (client hooks).
- Hardening: responsive layouts, RTL support, i18n hooks, error states.

3) Mobile Applications (4–6 weeks)
- Approach: React Native/Expo or PWA hardening for mobile parity.
- Patient App: search, booking, payments, notifications, history.
- Provider App: schedule management, route planning, earnings dashboard.
- Native Capabilities: push notifications, location, offline queues as feasible.
- Store Readiness: app icons, splash screens, build pipelines (where applicable).

4) Backend & APIs (3–5 weeks)
- Architecture: Node.js, PostgreSQL schema, Prisma ORM, API modules.
- Features: authentication, user roles, bookings, payments, ratings, records.
- Integrations: payment gateway adapters, maps/geocoding, email/SMS providers.
- Reliability: input validation, rate-limiting, logging, backup strategy.
- Security: JWT, RBAC, basic audit logs, environment/config management.

5) Testing & Deployment (2–3 weeks)
- Testing: unit, integration, user acceptance cycles; performance tuning.
- Security Review: basic threat modeling, secrets handling, access checks.
- CI/CD: build pipelines, environment promotion, rollback plan.
- Launch: soft launch, monitors/alerts, support playbooks.

---


