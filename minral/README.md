# MINRAL — Digital Products Store

A static, premium, black/white/grey digital-goods storefront. No build step —
open `index.html` directly in a browser, or upload the whole folder to any
static host (Vercel, Netlify, GitHub Pages, or your `logrith.in/minral` path).

## What to edit first

### 1. Checkout links (most important)
Open `js/data.js`. Every product has a `checkoutLink` field:

```js
checkoutLink: "https://gumroad.com/l/your-product-link",
```

Replace each placeholder with your real Gumroad, Payhip, or other seller
checkout URL. That's the only thing required to make "Buy Now" /
"Get Instant Access" buttons redirect to your real product pages.

Every Buy button on every page (cards, product pages, related strips) calls
the same `goToCheckout(url)` function in `js/app.js` — it shows a brief
"Redirecting to secure checkout…" toast, then opens the link in a new tab.

### 2. Product content
Still in `js/data.js` — edit title, price, descriptions, included items,
FAQ, and category for each product in the `PRODUCTS` array. Add a new
product by copying an existing object and giving it a unique `slug`.

If you add a brand-new product, also run:
```
python3 generate_pages.py
```
(included in the project root before zipping — regenerate if you add
products, since each product gets its own static HTML file for SEO/canonical
tags).

### 3. Images
Drop real files into:
- `assets/logo/` — logo.svg, logo.png, logo-dark.png, logo-light.png
- `assets/favicon/` — already has a placeholder generated
- `assets/products/` — product cover images (product-1-cover.jpg, etc.)
- `assets/og/` — social preview images

Then update the `.card-cover` / `.product-cover` divs to use `<img>` tags
instead of the monospace placeholder mark, and update `og:image` tags in
each page's `<head>`.

### 4. Domain / canonical tags
Every page has a `<link rel="canonical">` tag already pointed at
`https://logrith.in/minral/...`. If your final domain differs, find-and-replace
`logrith.in` across all HTML files.

## Structure

```
minral/
├── index.html          Home
├── products.html        All products (search + filter + sort)
├── categories.html       All categories
├── about.html
├── faq.html
├── contact.html
├── privacy.html
├── terms.html
├── product/[slug].html   One page per product (generated)
├── category/[slug].html  One page per category (generated)
├── css/style.css         Design system
├── js/data.js            EDIT THIS — products, categories, checkout links
├── js/app.js             Shared behavior (nav, FAQ, checkout redirect)
└── assets/                logo, favicon, product images, og images
```

## Notes
- Pure HTML/CSS/JS — no framework, no build tools, no dependencies besides
  Google Fonts (loaded via CDN in `style.css`).
- Fully responsive down to small phones.
- Buy buttons open checkout in a **new tab** so the user doesn't lose their
  place in your store.
