# Intorza content review — 4 November 2026

## Verdict

The site has useful, distinct material, especially the quotation guides and practical sample quotation. It also has an oversized set of service variants whose shared explanations and generic conversion copy weaken their differentiation. Improve the existing pages before publishing more variations. This audit does not establish a Google penalty or predict traffic.

## Scope and method

- Compared 116 public pages from the existing local production build, corresponding to the recently built application. Main content only; excluded global header/footer, scripts and styles.
- Reviewed representative source data, templates and rendered paragraphs. Spot-checked public quotation pages through web search.
- Measured exact five-word sequence overlap. Jaccard is intersection divided by union; smaller-page overlap is intersection divided by the smaller sequence set. These are editorial diagnostics, not Google scores, plagiarism percentages or semantic similarity measures. Shared tables, related links and legitimate boilerplate contribute to these values.
- Full page inventory, headings, paragraphs, 100 highest-overlap pairs and repeated paragraphs: `content-uniqueness-audit.json`.
- No Search Console, analytics, backlink data, keyword-volume research or exhaustive external plagiarism check was available. Search-result presence is not a complete indexing audit. Dynamic contact/admin pages are outside the static HTML comparison.

## Inventory

| Group | Pages, including group landing where present | Assessment |
| --- | ---: | --- |
| Quotation articles | 11 | Stronger differentiation: format-specific guidance, scope examples, checklists and mistakes. |
| 2D working drawings | 15 | High priority: short child pages reuse substantial process and FAQ copy. |
| 3D rendering | 26 | Some audience-specific value, but many service pages repeat brief, pricing and CTA paragraphs. |
| Walkthrough / 360 visualization | 17 | Room-specific content exists; stronger evidence and actual sample sequences would help justify variants. |
| BOQ / estimation | 18 | Highest literal overlap and several closely related intents. |
| Website development | 9 | Audience-specific structures and priorities; real implementation examples would make the claims more useful. |
| Other static pages | 20 | Mixed product, hub and legal pages. Legal-page length is not a content-quality target. |

## Priority findings

### 1. BOQ pages need clearer boundaries

`boq-from-floor-plans` and `quantity-takeoff` share 50.3% Jaccard overlap; 67.9% of the smaller page's distinct five-word sequences occur in the other. `boq-from-drawings` and `quantity-takeoff` score 49.8% Jaccard and 66.9% smaller-page overlap. The pages have different introductions, but share section headings, examples, process, caveats and conversion copy.

Keep separate pages if each supports a different task:

- Floor-plan BOQ: show what a plan can establish, what requires elevations, and a worked room-level preliminary schedule.
- Drawing-based BOQ: demonstrate reconciling plan/elevation/detail references and resolving missing or conflicting information.
- Quantity takeoff: demonstrate a dimension-to-quantity calculation, measurement convention, exclusions and output schedule before rates are applied.

If the business cannot provide separate useful deliverables, consider merging overlapping pages into a stronger guide. Check actual query and conversion data first; any consolidation needs explicit URL mapping and permanent redirects. No redirects or indexing changes were made in this audit.

### 2. Drawing pages repeat more than they demonstrate

Kitchen and wardrobe drawing pages share 44.5% Jaccard overlap and 61.7% smaller-page overlap. Fourteen drawing pages repeat the same source-information paragraph. A common workflow is reasonable, but should not dominate the explanation of the service.

Add drawing-specific annotated samples: kitchen module/appliance coordination; wardrobe elevation and internal arrangement; ceiling lighting/service coordination. State exactly which sheets and details the visitor receives, what input is required, and what the service excludes. Use real deliverables with permission, or clearly label illustrative examples.

### 3. Rendering pages need evidence beyond brief preparation

Nineteen rendering/service-guide pages repeat the same input-review paragraph, and nineteen repeat the same general scope/pricing answer. Some of this is legitimate boilerplate. The greater weakness is insufficient first-hand evidence of what distinguishes the assignments.

Add selected project images, supplied input versus delivered view, design constraints, agreed scope and a short explanation of the decisions. Do not present generated illustrations as completed client work. Replace repeated FAQs only when a page has a genuinely different question to answer; synonym changes add little value.

### 4. Quotation-format pages may compete for similar queries

`/interior-quotation-format` and `/articles/interior-quotation-format` are not identical copies. However, both address the same broad phrase. The first is a practical sample; the second is an explanatory guide. This is a potential intent conflict, not proof of ranking cannibalization.

Make the sample page the primary destination for a usable template/sample. Make the article a how-to guide for preparing and checking a quotation, with clear contextual links between the two. Compare query-level impressions, clicks and landing pages in Search Console before merging or changing canonicals.

PDF, Excel and Word guides already give different advice. Strengthen their utility with real downloadable files when offering a template, tested spreadsheet formulas, and screenshots of the output. Distinguish a downloadable template from an article about creating one.

### 5. Trust and product evidence need strengthening

The About page names Revenuxe but mostly describes mission, vision and workflow. Add verified people, their relevant experience, business background and genuine product/service examples. Articles currently use the organization byline; a named writer/reviewer is useful when truthful and supported by a profile.

`src/lib/site.ts` contains a “Trusted by 500+” claim. Verify that figure against business records and define what it measures, or revise it. This review does not establish that the claim is false. Avoid adding unverified customer counts, testimonials or performance statistics.

## Recommended order of work

1. Differentiate the three closely overlapping BOQ pages and the highest-value drawing pages with task-specific worked examples and deliverables.
2. Clarify sample-versus-guide intent for the two quotation-format URLs; improve useful files/examples on format articles.
3. Add authentic product screenshots, service samples and credible business/editorial context.
4. Inspect Search Console indexing, queries and landing-page performance; decide which low-value variants should be expanded or consolidated.
5. Measure qualified organic leads alongside clicks. Prioritize relevant visitors who need quotation software or a service the business actually sells. No defensible traffic forecast is possible from copy analysis alone.

Do not use a fixed word count or overlap percentage as a pass/fail target. A shared visual template is acceptable. The editorial test is whether each URL solves a distinct problem with enough original evidence or practical help to justify a separate visit.

## Guidance used

- Google: Helpful, reliable, people-first content — https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google: SEO Starter Guide; duplicate content itself is not a spam-policy violation — https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google: Spam policies; doorway and scaled-content abuse — https://developers.google.com/search/docs/essentials/spam-policies
- Google: Canonicalization — https://developers.google.com/search/docs/crawling-indexing/canonicalization

Analysis artifacts only. No website content, URLs or SEO directives changed, and nothing was committed or pushed for this audit.
