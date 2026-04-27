# Goyal Ji — Website

Marketing site for Goyal Ji (a JP Industries enterprise) — manufacturers of processed food products (3D Fryums, Jeera Papad, Soya Wadi, Makkai Poha) based in Nagpur, Maharashtra.

Static HTML, hosted on Vercel. Lead capture via Web3Forms → `jpindustries108@gmail.com`.

## Structure

```
.
├── index.html          # Home
├── about.html          # Heritage / story
├── products.html       # 4 products
├── quality.html        # Manufacturing & certifications
├── contact.html        # Contact form + map
├── privacy.html        # Privacy policy
├── terms.html          # Terms of use
├── 404.html            # Not-found page
├── robots.txt          # Search-engine directives
├── sitemap.xml         # Search-engine sitemap
├── vercel.json         # Caching + security headers
└── assets/
    └── goyal-ji.png    # Logo
```

## Configuration to fill in

Production domain is `https://goyalji.in` (GoDaddy, pointing at Vercel). Two placeholders remain — do a global find-and-replace in `*.html` for:

| Placeholder | Replace with |
|---|---|
| `YOUR_WEB3FORMS_ACCESS_KEY` | Web3Forms access key — get one at <https://web3forms.com> using `jpindustries108@gmail.com` |
| `G-XXXXXXXXXX` | Your GA4 Measurement ID from Google Analytics |

GSTIN, FSSAI, and Udyam (MSME) numbers are now live across the site (homepage trust bar, quality page certifications, footer tooltips, JSON-LD identifiers, privacy/terms legal pages).

## Local preview

Any static server works. Easiest:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

Pushes to `main` auto-deploy via Vercel. No build step — files are served as-is.

## Known follow-ups

- Replace placeholder product cards with real photos in `index.html` and `products.html` (search for `Product Image`).
- Add GSTIN, FSSAI license number, and Udyam registration number to `privacy.html` and the homepage trust bar once available.
- Optional: extract the duplicated nav, footer, `<style>`, and `<script>` blocks into shared partials with a static-site generator (Eleventy or Astro) when adding more pages becomes painful.
- Optional: replace Tailwind CDN with a built `styles.css` (`npx tailwindcss -i input.css -o styles.css --minify`) for a meaningful performance win.
