# Intorza

Next.js App Router marketing website with React 19, TypeScript, Tailwind CSS 4, and self-hosted fonts.

## Run locally

Use Node.js 24 LTS (`.nvmrc`); Node.js 22.18 or later is required by the validation scripts. Use npm and the committed `package-lock.json`.

```sh
npm ci
npm run dev
```

## Production and validation

```sh
npm run build
npm run typecheck
npm run lint
npm run check:site
npm start
```

`check:site` requires a completed production build. It starts and stops a local server on port 3197 and checks rendered content, metadata, structured data, links, sitemap, robots, optimized images, and retired URLs.

## Pages

- `/`
- `/about`
- `/contact`
- `/ai-quotation-builder` - AI quotation landing page with the supplied silent autoplay demo
- `/interior-design-dashboard` - Business dashboard feature guide
- `/interior-site-measurement` - Site visit and measurement workflow guide
- `/interior-quotation-management` - Quotation status and follow-up guide
- `/interior-project-management` - Converted project handover guide
- `/interior-invoice-software` - Invoice and payment tracking guide
- `/interior-design-crm` - Client and billing record guide
- `/interior-team-management` - Project team and attendance guide
- `/interior-quotation`
- `/interior-cost-calculator`
- `/interior-quotation-format`
- `/privacy`
- `/terms`
- `/cookies`
- `/refund`

Next.js prerenders these pages to HTML on the server during the production build. The calculator, mobile menu, and print button hydrate in the browser. Content and SEO metadata are present without JavaScript. Changes to page content require a rebuild.

## Deployment

Deploy to a host supporting the Next.js Node.js runtime and image optimization, such as Vercel or a Node.js server running `npm run build` followed by `npm start`. The application uses the standard Next.js build and start commands.

The public marketing pages remain prerendered. Contact submissions and the private admin area use Supabase. The external product remains linked at `https://app.intorza.com`. The canonical production origin is configured in `src/lib/site.ts`; update that file before using another domain.

The database schema is tracked in `supabase/migrations/`. Local timestamps are aligned with the connected project. Historical content tables remain preserved; no blog pages or admin publishing tools are included. The retired daily content-publishing job is disabled. Images are served from `public/`, and private `.env` files and CLI state remain ignored.

See `WEBSITE_REVIEW.md` for migration findings and verification limits.

## Admin and database

- Login: `/admin/login`; dashboard: `/admin`.
- Owner: `admin@intorza.com`. Use the existing password; it was not reset.
- Features: inquiry inbox with read/unread controls and deletion, feedback review, administrator grants/revocation, and database-recorded activity.
- Put `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` in the server environment. The current checkout already has these in its ignored environment file. See `.env.example` for names. No service-role key is required by the application.
- Auth uses server-verified sessions, secure HTTP-only cookies, Next.js Proxy refresh, and database role checks on every protected page and mutation. Admin responses are private, uncached, and excluded from search indexing and the sitemap.
- The owner role cannot be removed through the role table or the access-management RPC. Other confirmed accounts can receive administrator access from the dashboard. No public signup flow was added.
- Contact messages are validated on the server and by the anonymous database-insert policy, stored as unread inquiries, and inaccessible to non-admin readers.

Additional checks (requires an authenticated CLI account and network access):

```sh
npm test
npm run check:admin
npm run check:rls
```

`check:admin` temporarily creates and deletes an auth test account and contact message, verifies real password login and role revocation, and creates an in-memory owner test session without sending email or changing the owner password. It reads a privileged key through the CLI for testing only; keys and tokens are never printed or written to files. `check:rls` uses a database transaction and rolls back all test writes.

Two new migrations were applied and recorded on the connected project: `20261018160000_admin_dashboard.sql` and `20261018163000_contact_and_retired_automation.sql`. For a brand-new project, create and confirm the owner auth account before applying the owner-bootstrap migration. The historical scheduler migration is an intentional no-op marker, preventing obsolete content automation and its old embedded token from being recreated.

Auth integration follows the [Supabase SSR guide](https://supabase.com/docs/guides/auth/server-side/creating-a-client?framework=nextjs). Configure production HTTPS and the environment variables on the Next.js host before deploying.

## SEO audit

The Interior Quotation landing page uses the homepage layout with dedicated content and links to the format and calculator tools. Business contact details and pricing live in `src/lib/site.ts`. See `SEO_AUDIT.md` for findings, production/deployment differences and remaining checks. Run `npm run build` followed by `npm run check:seo` to regenerate `reports/seo-audit.json`.

## Content and mobile review

Heading and section eyebrow labels have been removed. Public pages have page-specific body links and an audited contextual-link graph. The calculator explanation renders on the server while its controls use a separate client widget. Run `npm run check:responsive` after building to test the installed Edge browser on Windows (override with `PLAYWRIGHT_CHANNEL=chrome` if needed). The check covers hero rows at 320?1280px, every public page at 375px, calculator updates and mobile navigation. Results and representative screenshots are saved in `reports/`. On other systems, install a supported Playwright browser before using this optional check.

## Production security review

See `PRODUCTION_READINESS.md` for findings, fixes, final mobile Lighthouse measurements and launch blockers. Run `npm run check:production` after configuring the server environment; run `npm run check:responsive` with a supported browser. Connected backend verification uses `check:admin` and `check:rls` with authorized Supabase CLI access. `check:live` reports the current public deployment independently of local changes. Production public-form abuse protection and operational settings still need verification before launch.

Article guide: `/interior-design-crm-quotation-software` explains the client-to-quotation-to-billing workflow, with a responsive contents menu, worked example, checklist, FAQs and calls to action. Content and FAQ data live in `src/data/crm-article.ts`; the statically rendered page includes Article metadata and schema.
