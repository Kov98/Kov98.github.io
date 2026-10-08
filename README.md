# KOV Web Studio — Freelance Web Developer Portfolio

A professional, responsive portfolio website created for **KOV Web Studio**, with a focus on selling straightforward websites to international small-business clients.

## Website preview

Open `index.html` in a browser, or publish it with GitHub Pages. The project is static: **no build process, paid service, or framework installation is required**.

## What's inside

- A full English-language freelance portfolio (home, services, process, about, FAQ, contact)
- Three independent, responsive website demos to show prospective clients:
  - **Meridian Interiors:** an editorial interior-design studio website
  - **Solstice Coffee:** a warm, modern café website with a sample menu
  - **Evergreen Landscapes:** a service-based website with a sample quote-request form
- Mobile navigation, keyboard-accessible links, semantic HTML, and responsive layouts
- Plain HTML, CSS, and JavaScript

**Important:** These are **original portfolio concepts** for fictional companies, not paying client projects. They should remain labeled as demos until replaced or supplemented by commissioned work. No fake testimonials, client logos, sales numbers, or years of experience are claimed.

## Setup before publishing

1. **Add a business email address.** Edit `site-config.js` and change:

   ```js
   window.KOV_CONTACT_EMAIL = 'you@yourdomain.com';
   ```

   Until this value is set, the email button is hidden; GitHub remains visible. Choose an address you are comfortable making **public**. This site does not collect visitor data.

2. **Replace details if needed.** The name shown is `KOV Web Studio`. Personalize the copy in `index.html` for your own working style, availability and capabilities.
3. **Check all claims.** Only list services you can reliably deliver. Practice the demos before approaching clients.
4. **Images and fonts require internet.** The site uses public Unsplash image URLs and Google Fonts CDN, with fallback colors and system fonts. If you need an offline, production-quality package, download the images with permission, optimize and serve them locally.
5. **If the email address isn't configured, don't advertise the site as ready to take inquiries.** GitHub links alone aren't a substitute for an easy client contact channel.

## Publishing

See [PUBLISH.md](PUBLISH.md) for the exact GitHub Pages process and the profile README.

## Contact form behavior

The example quote form on the Evergreen demo is deliberately **non-submitting**. It displays an explicit preview notice. The actual portfolio uses a configurable `mailto:` link; it does not provide a backend. A real paying client would need a proper form integration or hosted submission service.

## Project structure

```text
kov-web-studio/
├── index.html
├── style.css
├── script.js
├── site-config.js
├── assets/
│   └── favicon.svg
├── demos/
│   ├── demo-shared.css
│   ├── demo-shared.js
│   ├── meridian/index.html
│   ├── solstice/index.html
│   └── evergreen/index.html
├── README.md
├── PUBLISH.md
├── GITHUB_PROFILE_README.md
└── LINKEDIN_PROFILE.md
```

## Visual asset licensing

Demo photos are referenced remotely from **Unsplash**. Unsplash's license permits images to be used in commercial and noncommercial websites, with some restrictions. See https://unsplash.com/license and review rights before adapting for real clients. Avoid claiming that depicted work belongs to the fictional demo businesses. The demos contain illustrative stock photography, not actual studio/café/garden client work.

## Copyright

Custom website code and copy created for this portfolio. Photos remain under their respective owners' licenses.