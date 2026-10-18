# Next.js migration and website review

## Final scope

The retained site consists of ten public pages: Home, About, Contact, the quotation template, the cost calculator, and Privacy, Terms, Cookies, and Refund policies. Country/city landing pages, blog content, RSS/Atom feeds, careers and the public database-seeding endpoint have been removed. A separate non-indexable admin area now manages inquiries, feedback, and access. Retired URLs return genuine HTTP 404 responses.

## Architecture

- The application uses Next.js App Router with no previous build-system or editor integration.
- Rebuilt the private backend integration with the Supabase SSR SDK and server-only configuration. Removed unused component packages and the old package-manager configuration. npm is now the package manager.
- Navigation uses next/link directly. No legacy router compatibility layer remains.
- Native Next.js metadata exports provide each page's title, description, canonical, Open Graph, Twitter card, and indexing settings.
- Pages are prerendered to HTML at build time. The calculator and mobile navigation use client components; the quotation page delegates printing to a small client component.
- Self-hosted fonts and WebP images are preserved. The hero uses next/image with its actual intrinsic dimensions, responsive sizes, and preloading.
- The contact form and admin dashboard use the connected database. Public marketing content remains prerendered. Duplicate source images were verified against public copies using SHA-256 and removed.

## SEO corrections

- Removed stale homepage title year, fabricated aggregate-rating markup, an unsupported SearchAction, and unverified social-profile schema links.
- Removed location schema, location hreflang links, and feed-discovery links alongside retired routes.
- FAQ text and structured data share the same source, and homepage FAQ content is visible in the rendered page.
- JSON-LD escapes less-than characters to prevent embedded content from terminating script tags.
- The native sitemap lists only retained pages and avoids invented modification timestamps.
- Removed dead navigation/footer/blog links, placeholder social buttons, and unused blog CSS.
- The production domain remains https://www.intorza.com. Production deployment must use a Next.js-capable host.

## Additional cleanup

- Removed the empty editor-integration directory and replaced its obsolete project instructions with the existing general Git-history safeguard.
- Removed obsolete formatting exclusions, unused component aliases, empty source directories, and the unreachable breadcrumbs component.
- Updated component-generator configuration for React Server Components.
- Removed superseded review notes that described pages and tools no longer present.

## Validation

Production build, TypeScript, ESLint, and automated HTTP smoke checks pass. The smoke test checks all ten public pages, 14 retired/missing URLs, server-rendered H1s, titles, descriptions, canonicals, social images, JSON-LD parsing, internal links, security headers, sitemap entries, robots.txt, and the optimized hero image.

No website deployment was performed. The two documented admin/contact migrations were applied to the connected database. Browser interaction, responsive visual rendering, printing, and measured Core Web Vitals have not been verified in a browser. Existing testimonials, user counts, product capabilities, and marketing claims still require the owner's factual validation. Technical SEO does not establish search rankings or indexing status.

## Admin integration verification

- Confirmed the connected project is `rehioexyiybgrxepajnb` and the existing owner account is confirmed, password-enabled, and already has the admin role. Its password remains unchanged.
- Added private SSR dashboard pages for overview, inquiries, feedback, account access, and audit activity. Every data page and mutation verifies the user and database role; no browser-visible service key is used.
- Verified owner login, actual password login with a temporary test administrator, secure HTTP-only cookies, immediate access loss after role revocation, forged-cookie rejection, and unauthorized server-action rejection.
- Verified the real contact form saves an unread inquiry. Temporary auth accounts, test role audit entries, and test messages were removed afterward.
- Transactional SQL checks prove owner-role protection, administrator inquiry management, audit triggers, anonymous/non-admin read isolation, restricted role-management RPCs, and rejection of malformed anonymous submissions. Every SQL test write was rolled back.
- Reconciled historical migration timestamps using exact SQL matches and restored missing original schema definitions from remote migration history. Preserved an intentional no-op marker for retired content scheduling rather than committing its embedded token. Local and remote migration versions now align.
- Disabled the retired daily content-publishing cron job. Existing content data and the database keepalive job remain intact.

Measured Core Web Vitals remain outside the verification performed here; local browser layout and interactions were checked in the later content review. Supabase platform/project-owner permissions are separate from website administrator privileges.

## Quotation page and SEO audit

Added `/interior-quotation` using the existing homepage hero, pricing, feature showcase and CTA components with dedicated quotation copy. Added contextual links among the homepage, quotation product page, format example and calculator. Centralized the supplied telephone number and complete Bengaluru address and synchronized visible contact details with Organization and ContactPage markup. Corrected pricing currency rendering, social image dimensions, screenshot dimensions, heading hierarchy and breadcrumbs. Detailed findings and the difference between local and deployed versions are recorded in `SEO_AUDIT.md`; automated results are in `reports/seo-audit.json`.

## Eyebrow removal and content review

Removed heading and section eyebrow labels throughout the site and updated mobile hero buttons to two columns and the three benefit points to one row. Added page-specific workflow and support explanations, review guidance for the tools, and contextual policy links. Every public page now has body links and incoming contextual links verified independently of the footer. Calculator explanations render on the server with controls isolated in a client widget. Browser checks cover both hero pages from 320?1280px, all public pages at 375px, mobile navigation and calculator recomputation. See `SEO_AUDIT.md` and the `reports/` artifacts for the per-page review and visual evidence.

## AI quotation landing page

Added `/ai-quotation-builder` and the footer menu **AI Quotation Builder**, with the requested H1, homepage styling, supplied autoplay video, Pro pricing, AI-specific explanation, workflow, review checklist, FAQs and contextual links. The source video is preserved; its local copy and an extracted WebP poster are in `public/videos/`. AI credits are described separately from standard quotations. All 11 public pages pass route and SEO checks; browser checks cover three hero pages at 320-1280px, silent inline video autoplay without controls and video byte-range delivery. No deployment was performed. See `SEO_AUDIT.md` for details and evidence.
