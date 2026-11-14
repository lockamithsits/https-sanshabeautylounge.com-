# GSC + GTM — FILLED (owner-supplied 2026-11-14)

Both are now baked into the build. Nothing is pending.

## What is installed

1. **GSC verification** (both ways):
   - Meta tag `EcG3z_LiiugVp7Pq_E_8TK0lFiGBICYvk-e5kDGkXPI` in
     `src/app/layout.tsx` (`<meta name="google-site-verification">`),
     value from `src/data/siteConfig.ts` (`gscMetaTag`).
   - File `public/googleb7d79ba7b0fa42b4.html` — exactly one line:
     `google-site-verification: googleb7d79ba7b0fa42b4.html`
2. **GTM container `GTM-TNQJ5FLL`** in `src/app/layout.tsx`:
   gtm.js `<Script>` (beforeInteractive, async) + gtag init +
   noscript iframe after `<body>`. No GA4 measurement ID is
   hardcoded — GA4 config and tags are GTM-console work, not code.

## Owner-side (after deploy)

GSC Verify → submit sitemap.xml → Request Indexing ~10–20 pages/day.
