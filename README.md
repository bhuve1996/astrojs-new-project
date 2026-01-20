# Astro.js Website

A modern, animated website built with Astro.js featuring scroll snapping, smooth animations, SEO optimization, and **fully config-driven content**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Setup Git hooks
npm run prepare

# Start dev server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

## ✨ Features

- **Config-Driven** - All text, images, and settings in one place (`src/config/`)
- **Scroll Snapping** - Smooth section-by-section scrolling experience
- **Sticky Background Images** - Images stay fixed while text changes
- **Text Reveal Animations** - Content animates in as you scroll
- **Interactive Components** - Flip cards, magnetic cards, toasts, popups, FAQ
- **SEO Optimized** - Meta tags, sitemap, and robots.txt
- **TypeScript** - Full type safety with strict mode
- **DRY Architecture** - Reusable components and shared styles
- **Responsive Design** - Works beautifully on all devices
- **Zero Dependencies** - Pure CSS and vanilla JavaScript animations

## 📁 Project Structure

```
src/
├── components/      # Reusable components
├── config/         # Site content & theme (edit here!)
├── layouts/        # Page layouts
├── pages/          # All pages
├── styles/         # Global & shared styles
└── utils/          # Utility functions
```

## 🎨 Customization

**Everything is config-driven!** Edit `src/config/site.ts` to change:

- Site name, title, description
- Navigation items
- Homepage sections
- Page content (About, Blog, Contact, etc.)
- Images and backgrounds
- Toast notifications
- Popups
- FAQ items
- Component examples

Edit `src/config/theme.ts` for colors, fonts, and spacing.

## 📚 Documentation

See [DOCUMENTATION.md](./DOCUMENTATION.md) for complete guide including:

- Configuration options
- Section templates
- Animation guide
- TypeScript & linting
- Testing guide
- Deployment instructions

## 🧞 Commands

| Command                | Action                                       |
| :--------------------- | :------------------------------------------- |
| `npm run dev`          | Starts local dev server                      |
| `npm run build`        | Build production site to `./dist/`          |
| `npm run preview`      | Preview production build                     |
| `npm run format`       | Format all files with Prettier               |
| `npm run lint`         | Check for linting issues                     |
| `npm run lint:fix`     | Fix linting issues automatically             |
| `npm run type-check`   | Type check TypeScript files                  |

## 📄 Pages

- **Home** (`/`) - Animated homepage with scroll sections
- **About** (`/about`) - Company information and values
- **Blog** (`/blog`) - Blog post listings
- **Contact** (`/contact`) - Contact form
- **FAQ** (`/faq`) - Interactive FAQ accordion
- **Components** (`/components-showcase`) - Interactive component demos
- **Toast Demo** (`/toast-demo`) - Toast notification examples
- **Popup Demo** (`/popup-demo`) - Popup/modal examples
- **Terms** (`/terms`) - Terms and Conditions
- **Privacy** (`/privacy`) - Privacy Policy

## 🔍 SEO Features

- Meta tags (Open Graph, Twitter Cards)
- Sitemap generation (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- Canonical URLs
- Semantic HTML

## 🚀 Deployment

```bash
npm run build
```

Deploy the `dist/` folder to:
- Vercel
- Netlify
- Cloudflare Pages
- Any static hosting service

## 📦 Dependencies

- `astro` - The Astro framework
- `@astrojs/sitemap` - Automatic sitemap generation
- `typescript` - TypeScript support

## 🛠️ Development Tools

- `prettier` - Code formatter
- `eslint` - Code linter
- `husky` - Git hooks
- `lint-staged` - Run linters on staged files

## 👀 Learn More

- [Complete Documentation](./DOCUMENTATION.md)
- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)

---

**Edit `src/config/site.ts` to customize everything!** 🎉
