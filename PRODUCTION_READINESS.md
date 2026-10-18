# Production readiness review

Reviewed 18 October 2026. **Status: local application checks pass; public production launch is not signed off yet.** Database security fixes described below are already applied to the linked Supabase project. Website/configuration changes are local and are not deployed.

## Launch findings

| Priority                  | Finding                                                                                                                                                                                                                                                           | Required action                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Launch blocker            | The public deployment still serves the old 2025 homepage, the AI quotation page returns 404, and the sitemap contains 109 URLs instead of the local build's 11.                                                                                                   | Deploy this Next.js build to the intended Node.js host with server environment variables; repeat HTTPS, routes, metadata, cache, form and administrator checks against that deployment.                                                                                                                                                                            |
| Launch blocker            | Public inquiry/feedback inserts remain available through Supabase REST. RLS validates data and blocks public reads, but valid repeated submissions can bypass the website honeypot. No durable application rate limiter or server-verified CAPTCHA is configured. | Protect both the website form and direct database write path. Use a restricted server-side submission path with durable abuse controls, or equivalent gateway controls covering the exposed database endpoint. A CAPTCHA only on the visible form does not close the direct REST path. Do not rely on per-process memory limits for multiple production instances. |
| Pre-launch verification   | Production hosting configuration and Supabase auth attack protection, backup/restore arrangements, monitoring and administrator MFA enforcement are not verified.                                                                                                 | Verify these in the hosting/Supabase control planes; configure trusted public URLs, HTTPS termination, environment secrets, auth limits, alerts and recovery. The current login supports confirmed password-authenticated administrators; MFA is not required by the application.                                                                                  |
| SEO/performance follow-up | Mobile lab LCP is 2.9-3.0 seconds. Search Console, live indexing and field Core Web Vitals are not verified.                                                                                                                                                      | Check deployed cache/asset delivery, monitor real users, and work toward LCP at or below 2.5 seconds. Submit the 11-URL sitemap after deployment and inspect the new pages in Search Console.                                                                                                                                                                      |
| Editorial verification    | Existing testimonials, customer counts, efficiency percentages and promotional video timing claims lack supporting evidence in this checkout.                                                                                                                     | Confirm factual support and testimonial publication permission, or replace unsupported claims before launch. The supplied video was preserved.                                                                                                                                                                                                                     |

## Fixes completed

- Added Content Security Policy, frame denial, Permissions Policy and HSTS alongside existing MIME-sniffing and referrer protections. Production CSP disallows eval, external scripts, objects, third-party frames, external form submissions and arbitrary connections. Inline hydration scripts/styles remain allowed to preserve prerendered Next.js pages; this is a baseline CSP, not strict nonce-based XSS protection. HSTS omits includeSubDomains and preload so it does not impose policy on the separate product app.
- Added a permanent apex-to-www redirect that preserves the path and query. HTTP tests use a real Host header and verify the 308 destination.
- Removed `.env` from Git tracking while preserving the local configuration. Removed unused Vite variables. The tracked file contained public Supabase configuration, not a service-role credential. Published history was not rewritten; private credentials must still be supplied through the production host. The staged `.env` deletion should be included when committing the reviewed changes.
- Added a repeatable scan for tracked environment files, private credential patterns and environment values leaking into browser JavaScript. No findings in the reviewed current sources/browser bundles. This is a targeted scan, not proof that every historical commit or third-party system is secret-free.
- Applied `20261018190000_security_review.sql`: anonymous callers cannot query another account's role membership; administrators retain role-management/account-list access. Public feedback now rejects invalid ratings, malformed email and oversized fields. Existing rows are preserved.
- Improved text contrast without changing the layout: darker orange tokens, a readable green hero value, and full-opacity CTA body text. Optimized header/footer logos using responsive Next Image delivery and set explicit high fetch priority for the hero image.
- Added `.nvmrc` for Node 24 and package engines compatible with the TypeScript validation scripts. Added `npm run check:production`, `check:security`, `check:secrets` and `check:live`.

## Verification evidence

| Check                          | Result                                                                                                                                                                                                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Production build               | Pass; 11 public pages prerendered, administrator pages dynamically server-rendered                                                                                                                                                                                  |
| ESLint / TypeScript            | Pass                                                                                                                                                                                                                                                                |
| Contact validation tests       | 3 tests pass                                                                                                                                                                                                                                                        |
| npm vulnerability audit        | 0 known vulnerabilities at review time; does not exclude undisclosed vulnerabilities                                                                                                                                                                                |
| Route/SEO audit                | All 11 public pages pass; 14 retired URLs return 404; unique H1/title/description, canonicals, JSON-LD, sitemap, links and image dimensions checked                                                                                                                 |
| HTTP security checks           | Pass; headers on public/admin/404 responses, private-file 404s, uncached/noindex admin pages, cross-origin action rejection, apex canonical redirect                                                                                                                |
| Source/browser credential scan | No tracked private environment files, private-key/service-role patterns or relevant environment values found in browser bundles                                                                                                                                     |
| Connected admin integration    | Owner authentication, five private dashboards, password login, secure HTTP-only SameSite cookies, role grants/revocation, forged-cookie denial, unauthenticated mutation denial and sign-out pass                                                                   |
| Database isolation             | All 7 public tables have RLS; no storage buckets. Transactional checks verify owner protection, administrator management/audit records, non-admin isolation, anonymous isolation, role-probing rejection and malformed-feedback rejection. Test writes rolled back. |
| Browser regression             | Three hero pages at 320, 375, 390, 768 and 1280px; all public pages at 375px; calculator, mobile navigation, contact action under CSP and silent autoplay tested. See the latest responsive report.                                                                 |

Admin integration verification uses temporary test accounts/records that are cleaned up. No email is sent and the owner password is not changed. The password of the owner's account was not requested or inspected.

## Mobile Lighthouse results

Local production build, installed Microsoft Edge, Lighthouse's simulated mobile settings, one final run per page. Scores are diagnostics, not ranking guarantees or a full accessibility assessment.

| Page                 | Performance | Accessibility | Best Practices | SEO |   LCP |   TBT |   CLS |
| -------------------- | ----------: | ------------: | -------------: | --: | ----: | ----: | ----: |
| Home                 |          94 |           100 |            100 | 100 | 2.9 s | 50 ms | 0.013 |
| Interior Quotation   |          93 |           100 |            100 | 100 | 3.0 s | 50 ms | 0.001 |
| AI Quotation Builder |          94 |           100 |            100 | 100 | 3.0 s | 30 ms |     0 |

The initial homepage audit exposed button/link contrast, oversized logo delivery and missing explicit hero priority; those were fixed and remeasured. No field INP or live Core Web Vitals claim is made. The user's requested autoplay demo has no playback controls; a perfect automated accessibility score does not constitute a manual WCAG certification.

Reports:

- `reports/security-http-audit.json`
- `reports/live-production-audit.json`
- `reports/edge-function-audit.json`
- `reports/seo-audit.json`
- `reports/responsive-audit.json`
- `reports/lighthouse-home.json`
- `reports/lighthouse-interior-quotation.json`
- `reports/lighthouse-ai-quotation-builder.json`

## Integration boundary

The marketing website's contact database, administrator login, permissions, inquiry inbox, feedback review and audit log were verified against the connected backend. Public CTAs lead to `https://app.intorza.com`, which responded HTTP 200. That separately hosted product's source, billing, AI generation, credit deduction, quotation export and project workflows are outside this checkout and were not tested end to end. Video content and link availability do not prove those product workflows work in production. Existing legacy blog/job database records remain preserved; their website routes and publishing UI remain removed.

## Reproduce

Use Node 24, `npm ci`, and configure `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` in the server environment. Run `npm run check:production`. With an installed supported browser, run `npm run check:responsive`. Authorized Supabase CLI access is required for `npm run check:admin` and `npm run check:rls`. `npm run check:live` is a read-only check of the currently published domain; it intentionally reports a different deployment until release.

Lighthouse lab commands use the installed browser through CHROME_PATH, for example `npx --yes lighthouse http://127.0.0.1:3207 --chrome-flags=--headless --output=json --output-path=reports/lighthouse-home.json` while a local production server is running. The port is arbitrary; raw reports record the actual audit setup and version.

Review guidance: [Next.js CSP](https://nextjs.org/docs/app/guides/content-security-policy), [Supabase production checklist](https://supabase.com/docs/guides/deployment/going-into-prod), [Supabase Auth rate limits](https://supabase.com/docs/guides/auth/rate-limits), [Google helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
