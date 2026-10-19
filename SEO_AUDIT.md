# Intorza SEO audit — 18 October 2026

The local Next.js production build passes the SEO checks for all **10 public pages**. The new quotation landing page is ready at `/interior-quotation`. The deployed domain still serves the older website; the local changes have not been published.

This review covers source code, production HTML, metadata, structured data, internal navigation, media, indexability and public production HTTP responses. It does not include authenticated Search Console data, a backlink database, measured field performance.

## Quotation landing page and search intent

| Page                         | Main purpose                          | Search intent                                                  |
| ---------------------------- | ------------------------------------- | -------------------------------------------------------------- |
| `/`                          | Interior business software            | Project management, quotations, invoicing and clients          |
| `/interior-quotation`        | Quotation product landing page        | Interior quotation tool/software for designers and contractors |
| `/interior-quotation-format` | Sample document and template          | Interior quotation format, example and sample                  |
| `/interior-cost-calculator`  | Indicative budget planning            | Home interior cost estimation                                  |
| `/contact`                   | Customer support and business contact | Contact Intorza and its Bengaluru office                       |

The quotation page uses the homepage's actual hero, pricing, feature showcase and CTA components, with quotation-specific content rather than a copy of the homepage. Its single H1 is **“Best Interior Quotation Tool for Designers & Contractors.”** The title tag is **“Interior Quotation Tool for Designers & Contractors | Intorza.”** “Best” is marketing positioning; no independent comparison, award, rating or review score was invented.

The page explains itemized scope, specifications, quantities, rates, terms, document differences, the quotation workflow and related tools. It links contextually to the format page, calculator and Contact page. The homepage links back through a resources section, both existing tools link back in their content, and the footer includes **Interior Quotation** throughout the public site. This keeps the tool, template and calculator useful for different tasks instead of creating interchangeable keyword pages. Crawlable links and descriptive context follow [Google's link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable).

## Implemented fixes

| Area                | Result                                                                                                                                                                     |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Titles and headings | Unique public titles, descriptions and H1s; shorter homepage/calculator titles; a dedicated quotation H1                                                                   |
| Canonicals          | One absolute, self-referencing production canonical per public page                                                                                                        |
| Rendering           | All ten public pages are prerendered HTML; quotation content does not depend on fetching text in the browser                                                               |
| Internal links      | New footer menu, homepage resources and contextual tool links; internal destinations and fragment targets checked                                                          |
| Crawl coverage      | Native sitemap includes the ten retained pages, including the quotation page; removed routes continue returning real 404s                                                  |
| Structured data     | Organization contact details, quotation application information, shared visible FAQ content and breadcrumb markup on every non-home public page                            |
| Contact consistency | Phone and full address centralized and reused in the footer, Contact page and structured data                                                                              |
| Pricing             | Corrected the broken `?499`/`?2,999` currency display; Pro price is sourced from one constant; offers use INR                                                              |
| Media               | Shared feature screenshots now use Next.js image optimization, real intrinsic dimensions, responsive sizes and lazy loading; hero stays preloaded                          |
| Social previews     | Open Graph dimensions corrected to the existing image's actual **1536 × 1024** pixels                                                                                      |
| Document structure  | Feature showcases now have an introductory H2; footer and Contact headings have a clearer hierarchy                                                                        |
| Usability           | Telephone links, address-to-map links, fixed-header anchor clearance, reduced-motion support and menu expansion state                                                      |
| Trust markup        | No invented aggregate ratings, unverified social profiles or unsupported founding date; existing testimonials remain owner-supplied content requiring factual confirmation |
| Admin               | Existing authentication, private responses, noindex directives and exclusion from the public sitemap remain in place                                                       |

Canonical consistency follows [Google's canonicalization guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls). Titles are descriptive and distinct rather than padded to a supposed fixed ranking length, in line with [Google's title-link guidance](https://developers.google.com/search/docs/appearance/title-link).

## Business identity and local signals

The visible business details are:

- **Name:** Intorza
- **Phone:** +91 9886579923; machine-readable `tel:+919886579923`
- **Address:** Shop No 1, 1st Floor, 10/1, 10th Cross, LR Bande C L Ramaiah Layout, RT Nagar Post, Bengaluru, Karnataka 560032
- **Support email:** intorza.com@gmail.com

The organization markup separates street address, locality, state, postcode and country. The Contact page references the same organization identity. Map links search the supplied address; no unverified coordinates, branch locations or Google place ID were added. An Organization is appropriate for the software business without asserting additional physical branches or retail classifications. See [Google's Organization documentation](https://developers.google.com/search/docs/appearance/structured-data/organization).

Business Profile ownership, public directory consistency, opening hours and customer visit arrangements were not verified through an account or edited by this task.

## Important structured-data limits

FAQ content remains useful to visitors and the JSON-LD matches the visible questions. It is **not** a promise of Google FAQ rich results: Google retired that search feature in May 2026. See [Google's documentation update history](https://developers.google.com/search/updates#may-2026).

SoftwareApplication markup describes the product and visible plans. Google's app rich-result requirements also call for a qualifying review or aggregate rating. No verified rating dataset was provided, so none was fabricated to satisfy a validator. The current markup is not a claim of app rich-result eligibility. See [Google's software app documentation](https://developers.google.com/search/docs/appearance/structured-data/software-app).

## Production observations — separate from local results

Public HTTP checks of the deployed domain returned:

| URL or check                      | Observed result                                                   |
| --------------------------------- | ----------------------------------------------------------------- |
| `https://www.intorza.com/`        | 200; old title still contains “2025”                              |
| `https://intorza.com/`            | 308 to the www HTTPS origin                                       |
| `http://www.intorza.com/`         | 308 to the www HTTPS origin                                       |
| `http://intorza.com/`             | 308 to HTTPS apex, then another redirect to www                   |
| `/robots.txt`                     | 200 text/plain; older policy is deployed                          |
| `/sitemap.xml`                    | 200 XML; **109 entries**, compared with **10** in the local build |
| `/contact`                        | 200; older title/contact presentation                             |
| `/interior-quotation`             | **404 on production**; 200 in the local production build          |
| An intentionally nonexistent path | Real 404                                                          |

The deployed homepage also still exposes retired blog/country navigation. Its existing canonical points to `https://www.intorza.com`. These are deployment differences, not a failure of the new local route. The public observations can be rechecked at the [homepage](https://www.intorza.com/), [robots file](https://www.intorza.com/robots.txt) and [sitemap](https://www.intorza.com/sitemap.xml).

## Prioritized remaining work

| Priority | Action                                                                                                                                      | Reason / verification                                                                                                |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Highest  | Deploy this Next.js build to the production domain                                                                                          | The new page and corrected contact details cannot affect crawling while the older build remains live                 |
| High     | After deployment, submit the current sitemap and inspect the homepage, quotation page and Contact page in Search Console                    | Verify Google's rendered HTML, canonical choice and indexing status rather than inferring them from local HTML       |
| High     | Check impressions, queries, CTR and conversions for the quotation, template and calculator pages after indexing                             | Keyword intent is mapped; actual query demand and rankings have not been measured                                    |
| Medium   | Review the edge rule for HTTP apex → HTTPS www                                                                                              | Current public configuration uses two redirects for that origin; a single canonical-origin redirect would be cleaner |
| Medium   | Confirm customer counts, efficiency percentages, testimonials, crossed-out pricing, plan limits and business hours against business records | These pre-existing marketing claims are not independently validated by a code audit                                  |
| Medium   | Measure mobile LCP, INP and CLS after deploying the new image/layout behavior                                                               | No field performance score is established by code checks alone                                                       |
| Optional | Prepare a dedicated wide social preview                                                                                                     | Current image dimensions are correct, but the existing 3:2 image may be cropped by some sharing surfaces             |

A public Google PageSpeed API request was attempted for the currently deployed homepage. It returned **HTTP 429 quota exceeded**, so no Lighthouse score or Core Web Vitals result is reported. No synthetic SEO score, traffic estimate, backlink count, domain-authority value or ranking improvement was invented.

Retired pages with no direct equivalent stay 404. Blanket redirects to the homepage would not preserve their former topic intent. Public legal pages remain accessible, uniquely titled and linked; they were not padded with unrelated product keywords.

## Validation and artifacts

- Production build, TypeScript, ESLint and the contact-validation tests.
- Site smoke checks: ten public pages, retired URLs, canonical metadata, structured data, admin access guards, sitemap and optimized hero image.
- Dedicated SEO checks: unique titles/descriptions/H1s; one canonical; image alt/dimensions; business contact consistency; breadcrumb JSON-LD; internal routes and anchors; quotation pricing/content; sitemap coverage and 404 responses.
- Machine-readable evidence: [`reports/seo-audit.json`](reports/seo-audit.json).
- Re-run after changes with `npm run build`, `npm run check:site` and `npm run check:seo`.

Search Console coverage, off-site links, server crawl logs and field performance were not available to this audit. Browser layout was checked locally as described below. These limitations do not change the recorded local test results; they define what remains to verify on the deployed site.

## Page-by-page content and internal linking review

The follow-up content pass removed heading/section eyebrow labels throughout public and admin pages, including the hero label shown in the supplied screenshot. Decorative feature labels and testimonial number badges were also removed. Functional labels, document headings, prices and navigation remain readable.

| Page               | Editorial decision and useful content                                                                                                               | Contextual destinations in the main content                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Home               | Added a connected-project explanation, designer/contractor/studio use cases and a practical project-based evaluation workflow                       | Quotation tool, sample format, calculator, About, Contact         |
| Interior quotation | Retained the existing substantial scope guidance, comparisons, feature explanations and FAQs; avoided adding repetitive keyword paragraphs          | Format, calculator, Contact, Home breadcrumb                      |
| About              | Replaced generic values with scope clarity, connected records and practical teamwork; added concrete product workflow and Bengaluru contact context | Home, quotation tool, format, calculator, Contact                 |
| Contact            | Clarified product support, sales, account/billing and planning inquiries; explained the information that helps the team respond                     | Quotation tool, format, calculator, About, Terms, Refund, Privacy |
| Quotation format   | Added scope-comparison and revision-review guidance beside the existing sample and document checklist                                               | Quotation tool, calculator, Contact                               |
| Calculator         | Explained editable inputs, fixed allocation assumptions, example tax arithmetic, limitations and the next step toward a measured proposal           | Quotation tool, format, Contact                                   |
| Privacy            | Added verified contact-form data context and relevant policy navigation, without expanding contractual promises                                     | Cookies, Terms, Contact                                           |
| Terms              | Kept the substantive service/account/subscription terms intact and added relevant policy navigation                                                 | Privacy, Refund, Contact                                          |
| Cookies            | Added the observed website administrator-session behavior and relevant policy navigation                                                            | Privacy, Terms, Contact                                           |
| Refund             | Added optional transaction context for a request; preserved the existing refund conditions and processing windows                                   | Terms, Privacy, Contact                                           |

The automated SEO check now isolates each page's **main content** from the header and footer. It requires at least two distinct relevant internal destinations per page and verifies at least one incoming contextual link for every page. All ten pages pass. The report records this graph and main-content word counts as diagnostic information; no word-count threshold is treated as a ranking requirement.

The calculator page now renders its explanations on the server and hydrates only the interactive calculator widget. Its original calculation was preserved; a real browser check changed the area and rate and verified the recomputed result. FAQs now accurately describe the example's fixed tax and room-allocation assumptions rather than presenting them as a definitive quotation or tax determination.

Content decisions follow [Google's people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) and [internal-link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable). Page usefulness, accurate descriptions and navigable topics guide the changes; no search position or SERP feature is guaranteed.

## Mobile browser evidence

An installed Microsoft Edge browser verified both hero pages at **320, 375, 390, 768 and 1280 pixels**. The hero actions remain two across, all three benefit points remain in a single row, and the summary feature cards remain at least two across. Short benefit labels preserve the full description as accessible text. The remaining eight public pages were checked at 375 pixels with no horizontal document overflow. Mobile menu navigation and calculator recomputation passed with no browser runtime errors.

- [Responsive results](reports/responsive-audit.json)
- [Homepage at 390px](reports/mobile-home-390.png)
- [Quotation page at 390px](reports/mobile-quotation-390.png)

These are local production-browser checks. They do not replace field Core Web Vitals or a full accessibility audit.

## AI Quotation Builder page

Added `/ai-quotation-builder` with the exact H1 **AI Interior Design Quotation Tool**, the homepage hero design, Pro pricing, connected feature showcases, an AI-specific workflow, review guidance and six FAQs. Copy follows the supplied demo: floor plan analysis or a project-details starting point, followed by an editable draft. AI credit usage is distinguished from the standard quotation allowance; generation time and accuracy are not promised in editorial copy.

The supplied 22.5-second, 1920-1080 MP4 is served locally from `public/videos/ai-interior-quotation-builder.mp4` (about 1.9 MB). A WebP poster was extracted from the actual demo. The hero uses muted, looping, inline autoplay with no native or custom playback controls and intrinsic dimensions to reserve space. Browser checks verified advancing playback, no controls, correct dimensions and HTTP 206 byte-range responses. Browser/device settings can still govern autoplay.

Added the **AI Quotation Builder** footer link and contextual incoming links from the homepage resource cards and the interior quotation guide. The page links to the quotation tool, sample format, calculator and contact page. It has a unique title, description, canonical, social metadata, breadcrumbs, descriptive FAQ markup and a sitemap entry. Standard free-plan offer markup is omitted for the AI landing page because a free AI credit allowance has not been established. Video rich-result markup is deferred until a real public upload date is known; the page is a product landing page with a supporting demo, not a dedicated video watch page. This avoids inventing publication data or implying video rich-result eligibility. See [Google's video guidance](https://developers.google.com/search/docs/appearance/video) and [autoplay behavior](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay).

Validation now covers **11 public pages** and all three hero pages at 320, 375, 390, 768 and 1280 pixels. Production build, lint, TypeScript, route checks, contextual linking and SEO checks passed; installed Edge verified the new demo playback and responsive layout. New previews: `reports/mobile-ai-quotation-builder-390.png` and `reports/desktop-ai-quotation-builder-1280.png`. This work remains local and has not been deployed.

## Production readiness follow-up

See `PRODUCTION_READINESS.md` for the later security and production audit. All three landing pages measured 100 in local Lighthouse SEO, Accessibility and Best Practices, with Performance 93-94. These lab scores do not guarantee search rankings or live Core Web Vitals. Mobile lab LCP remains 2.9-3.0 seconds. The live domain still serves the old deployment and its 109-URL sitemap; deployment and post-release Search Console/field checks remain outstanding.

## Media optimization - 19 October 2026

Audited all public image/video assets and their page references. All visible page images are WebP; the eight product screenshots were already only 25-49 KB and remain unchanged to avoid redundant lossy compression. Next Image provides responsive sizes, with eager/high-priority delivery for the hero and lazy loading for feature screenshots. JPEG remains for the social share preview, and ICO remains for the browser icon.

Optimized the H.264 demo from 1,959,242 to 669,484 bytes (65.8% smaller), preserving its 22.5-second duration at 1280x720/24fps. Removed the unused audio track and placed the MP4 moov metadata before media data for fast-start playback. Autoplay, mute, looping, inline playback and the absence of controls remain unchanged. Optimized the WebP poster from 30,026 to 17,308 bytes (42.4% smaller) and the transparent WebP logo from 38,798 to 32,774 bytes (15.5% smaller). The tested WebM candidate was larger than the optimized MP4 and is not shipped. See `reports/media-optimization.json` for exact sizes and MP4 atom order. Earlier Lighthouse reports describe the previous assets and remain historical measurements.

## Broken-link reports and legacy SERP URLs - 19 October 2026

All three supplied crawler exports identify the same URL, `/cdn-cgi/l/email-protection`; the internal-link report identifies 11 linking pages. A live read-only request confirmed Cloudflare is replacing an email anchor with this path, which returns 404. The public sitemap now contains the current 11 URLs, so this is a separate issue from the older deployment findings recorded above.

Added Cloudflare's documented `email_off` comment boundary around rendered body content. Every existing public mailto link is inside that boundary; origin HTML contains no email-protection href. This prevents Cloudflare from manufacturing the broken links and injecting its email decoder into the protected content. It uses constant HTML comments, not untrusted HTML input. References: [Cloudflare email opt-out](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/).

Per the requested visitor behavior, permanent server-side 308 redirects now send former country/city pages to the canonical homepage. The manifest covers all 57 country slugs and 57 country-code aliases accepted by the old router. Former blog, careers, auth and feed URLs also redirect home. The reported email-protection path has an origin redirect as a fallback. These redirects precede apex-host canonicalization to avoid an extra apex-to-www hop for legacy paths. Internal navigation and the sitemap continue to point directly to active pages.

Genuinely unknown paths, private file probes, retired APIs and unsupported private administrator routes continue to return real 404 responses. Blanket redirects for arbitrary missing URLs are avoided because Google can treat irrelevant homepage redirects as soft 404s; a homepage redirect is not a ranking guarantee. The blog/feed redirects implement the requested retirement behavior, not a claim that the homepage is an equivalent replacement for every old article. See [Google migration guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).

Production checks pass across 11 active pages and 240 legacy redirect requests. Each tested legacy response returns 308 with the canonical homepage destination. Checks also verify the mailto boundaries, absence of injected broken-link hrefs in origin HTML, active-page indexability, sitemap links, private-file denial and genuine unknown-route 404s. Evidence: `reports/broken-link-remediation.json` and `reports/broken-links-live-before.json`.

Deployment must publish these changes and purge stale Cloudflare HTML caches before the crawler is rerun. Cloudflare owns `/cdn-cgi/` and may handle requests before Next.js, so the origin-side redirect alone cannot establish that the live protection endpoint redirects. If that path still returns 404 after deployment, configure its redirect at the Cloudflare edge. If an HTML transformer strips the opt-out comments, turn Email Address Obfuscation off in Cloudflare Security Settings (Client-side abuse), then purge cached HTML. No Cloudflare dashboard settings were changed through this checkout.

## Dashboard and site measurement landing pages - 19 October 2026

Added two product landing pages for the headings highlighted in the supplied homepage screenshot:

| Homepage heading                 | Destination                  | Primary topic                      | Supporting search intent                                                                                               |
| -------------------------------- | ---------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Complete Business Overview       | `/interior-design-dashboard` | Interior design business dashboard | Interior studio business overview, quotation status, recorded payment tracking, project and client summaries           |
| Organize Site Visits Efficiently | `/interior-site-measurement` | Interior site measurement software | Interior site visit management, site project assignment, site measurement checklist, measurement-to-quotation workflow |

These are editorial keyword/intent choices based on the actual product screens and visitor tasks, not measured search volumes, difficulty scores or a traffic forecast. Both circled headings are now descriptive, keyboard-accessible Next Link anchors. The existing app CTAs remain separate conversion links. The two pages are also linked in the footer and cross-linked with relevant quotation, AI, sample-format, calculator and contact resources. They are included in the sitemap and have contextual incoming links from the homepage and shared feature showcases.

Both pages use the exact shared homepage hero component, existing WebP product screenshots, the two-across mobile actions and the single-row benefit points. Each has distinct feature explanations, a practical guide, a four-step workflow, a reference section, a checklist, Pro pricing, six visible FAQs, related resources and product/contact CTAs. The initial rendered-content audit records approximately 1,300 words per page as diagnostic information, not a ranking threshold. The dashboard copy explains recorded quotations, projects, clients and payments without claiming live bank reconciliation or profit calculation. The site page describes the demonstrated project-name/location/member setup and separates practical field guidance from actual product fields, automatic phone measurement and the separate AI floor-plan workflow.

Each page has its own title, description, H1, self-canonical, social metadata, visible breadcrumb, SoftwareApplication context and FAQ data shared with the rendered FAQ text. Standard plan offer markup is omitted because these screenshots do not establish which feature is included in each plan. No fabricated reviews, ratings, keyword volumes, efficiency claims or rich-result promises were added.

Validation: production build, lint, TypeScript, contact validation, HTTP/security checks, secret scan and SEO checks pass across 13 public pages. Browser checks cover both new heroes at 320, 375, 390, 768 and 1280px, feature columns, homepage heading navigation, FAQ expansion and the existing calculator, mobile menu and AI video. Updated evidence is in `reports/seo-audit.json`, `reports/responsive-audit.json`, and the new mobile/desktop feature-page screenshots. Existing Lighthouse audits remain historical; these new pages were not assigned unmeasured Lighthouse or field Core Web Vitals scores.

Content and links follow [Google's helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) and [crawlable-link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable). Publication and recrawling are required before the new content can appear in search; indexing, traffic and rankings are not guaranteed.

## Feature landing pages � 19 October 2026

Added dedicated, statically rendered pages for interior quotation management, interior project management, interior invoice software, CRM for interior designers, and team management for interior designers. These complement the dashboard and site measurement pages; quotation creation continues to use the existing interior quotation page.

All eight homepage showcase headings now link to their relevant guides. Feature summary cards also link to the appropriate guide or privacy policy. Each new page uses the homepage hero component, an existing optimized WebP product screenshot, distinct H1/title/description/canonical metadata, breadcrumbs, workflow guidance, practical examples, FAQs, pricing, contextual related links and calls to action. Pages are included in the XML sitemap and automated site, SEO and responsive checks. Copy describes visible product records and avoids claiming unverified payment integrations or search ranking outcomes.

Production build, lint, TypeScript, contact validation, rendered-page/link/sitemap, SEO, security-header and secret checks passed across 18 public pages. These checks verify implementation; search indexing and ranking require deployment and subsequent search-engine crawling.

## Mobile feature cards and feature-page SEO � 19 October 2026

The seven detailed feature guides now display one full-width feature card per row below 768px, two at tablet width and four on desktop. Hero buttons and compact homepage summary cards retain their existing layout. Browser assertions now check the mobile stacking and usable card width explicitly.

Added WebPage structured data with the page's canonical URL, visible heading and description, actual product screenshot, publisher, WebSite and software references, and related guides. Strengthened contextual links from dashboard and site measurement guides to project, invoice, client and team guides. The SEO audit additionally checks that feature-page schema matches the visible page, and each FAQ question and answer matches rendered content. Existing checks cover unique titles/descriptions/H1s, canonicals, indexability, sitemap membership, image dimensions, internal destinations and contact information across all 18 public pages.

Implementation follows Google's crawlable, descriptive link guidance: https://developers.google.com/search/docs/crawling-indexing/links-crawlable . Structured data is descriptive and does not guarantee a search appearance or rankings: https://developers.google.com/search/docs/appearance/structured-data/sd-policies . No FAQ rich-result eligibility is claimed for this commercial software site.

## Pricing assurance and internal navigation � 19 October 2026

The shared pricing assurance text remains a single line on small mobile screens using responsive font sizing and tighter tracking, with the complete wording retained. Browser checks measure the actual text range to confirm one line and viewport fit on the ten main landing pages at 320, 375, 390, 768 and 1280px.

The footer separates Product tools from Manage Your Business guides. All quotation, AI, format, calculator, dashboard, measurement, tracking, project, invoice, client and team guides are directly linked from every public page. Existing descriptive contextual links remain in the main content rather than relying on footer links alone.

The SEO audit traverses the rendered link graph from the homepage, records navigation and contextual click depth, requires every public page to be reachable within two navigation clicks, and requires every product guide to be within two contextual clicks with incoming body links from at least two pages. It also verifies complete product-guide coverage in each footer, valid internal URLs/anchors, sitemap coverage and no orphan pages. The graph metrics are recorded per page in reports/seo-audit.json. These are local production checks, not claims about live indexing or rankings.

## Original CRM and quotation article � 19 October 2026

Added `/interior-design-crm-quotation-software` as an editorial guide with the requested H1, Interior Design CRM & Quotation Software. The supplied competitor text was reviewed for topic coverage only. The original Intorza article focuses on client context, clear quotation specifications, recorded proposal decisions, project handover, invoice/payment records, AI draft review and software evaluation. It does not repeat competitor testimonials, performance figures, customer names or claim their procurement, inventory and communication capabilities for Intorza.

Meta title: Interior Design CRM & Quotation Software: A Practical Guide | Intorza

Meta description: Connect client records, interior quotations, projects and payment tracking. A practical guide to choosing and using CRM and quotation software with Intorza.

The article is intentionally distinct from the client-management feature page: it explains the cross-tool workflow and practical evaluation questions, while the feature page describes client records. The UI provides an anchored contents menu, readable single-column prose, actual product screenshot, organization byline, publication date, worked example, checklist, mid-article CTA, pricing and contact CTA. Article/OpenGraph metadata, breadcrumb and visible FAQ schemas accompany the content. Homepage, footer and CRM guide links make the article discoverable; contextual links lead to the relevant feature guides.

Production, lint, typecheck, contact, site, SEO, security and secret checks passed across 19 public pages. Article assertions verify the headline, canonical URL, author, visible date, description, OpenGraph type and FAQ/schema agreement. Live crawling, ranking and deployment are outside these local checks.
