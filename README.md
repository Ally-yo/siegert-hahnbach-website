# Siegert Hahnbach Static Website

Production-ready static website for GitHub Pages and Cloudflare.

## Structure

- `index.html` - homepage
- `impressum.html` - legal placeholder page
- `datenschutz.html` - privacy placeholder page
- `404.html` - GitHub Pages fallback
- `css/style.css` - all visual styling
- `js/script.js` - carousel, smooth scrolling, menu tabs and mobile navigation
- `assets/images` - local optimized images
- `assets/fonts` - local Playfair Display and Raleway font files
- `assets/icons` - favicon and touch icon

## Deployment

Upload the contents of this folder to the root of the GitHub Pages branch or repository. No build step, backend, database, framework or package install is required.

## Cloudflare

Point DNS to GitHub Pages, enable Cloudflare SSL/TLS in Full mode, and keep Cloudflare Web Analytics in automatic setup mode. The site does not set cookies and does not include Google Analytics.

## Maintenance

Replace images in `assets/images` with the same file names to update the slideshow, cards and section photos. Edit visible text directly in the HTML files. Opening hours, contact details and event dates appear in `index.html`; structured data appears in the JSON-LD block in the document head.

## Legal Pages

`impressum.html` and `datenschutz.html` are styled placeholders and must be legally reviewed before production publication.
