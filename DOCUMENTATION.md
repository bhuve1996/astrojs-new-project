# Complete Documentation

## Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Configuration Guide](#configuration-guide)
4. [Section Templates](#section-templates)
5. [Animations](#animations)
6. [TypeScript & Linting](#typescript--linting)
7. [DRY Principles](#dry-principles)
8. [Testing Guide](#testing-guide)
9. [Deployment](#deployment)

---

## Quick Start

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Setup Husky (Git hooks):**
   ```bash
   npm run prepare
   ```

3. **Start dev server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   ```
   http://localhost:4321
   ```

### Available Commands

| Command                | Action                                       |
| :--------------------- | :------------------------------------------- |
| `npm install`          | Installs dependencies                        |
| `npm run dev`          | Starts local dev server at `localhost:4321`  |
| `npm run build`        | Build your production site to `./dist/`      |
| `npm run preview`      | Preview your build locally, before deploying |
| `npm run format`       | Format all files with Prettier               |
| `npm run format:check` | Check if files are formatted                 |
| `npm run lint`         | Check for linting issues                     |
| `npm run lint:fix`     | Fix linting issues automatically             |
| `npm run type-check`   | Type check TypeScript files                  |
| `npm run lint:full`    | Full lint (ESLint + TypeScript + Prettier)   |

---

## Project Structure

```
/
├── public/
│   └── images/          # Place images here
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── ScrollSection.astro
│   │   ├── HeroSection.astro
│   │   ├── ContentSection.astro
│   │   ├── TextReveal.astro
│   │   ├── BottomMenu.astro
│   │   ├── ImageCarousel.astro
│   │   └── ... (interactive components)
│   ├── config/
│   │   ├── site.ts      # All site content & configuration
│   │   └── theme.ts     # Colors, fonts, spacing
│   ├── layouts/
│   │   └── Layout.astro # Base layout
│   ├── pages/           # All pages
│   ├── styles/          # Global & shared styles
│   └── utils/           # Utility functions
└── package.json
```

---

## Configuration Guide

Everything in this website is **config-driven**. All text, images, links, and settings are in `src/config/site.ts`.

### Site Information

```typescript
{
  name: 'Your Site Name',
  title: 'Your Site - Tagline',
  description: 'Site description for SEO',
  url: 'https://yoursite.com',
  author: 'Your Name',
}
```

### Navigation & Footer

```typescript
nav: [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  // Add more...
],

footer: {
  quickLinks: [...],
  legal: [...],
}
```

### Homepage Configuration

```typescript
homepage: {
  hero: {
    title: 'Hero Title',
    subtitle: 'Hero subtitle',
    scrollText: 'Scroll to explore',
    backgroundImage: 'https://...', // Optional
  },
  sections: [
    {
      id: 'section-1',
      title: 'Section Title',
      text: 'Section content',
      backgroundImage: 'https://...', // Optional
      backgroundColor: '#1a1f2e',     // Optional
      stickyBackground: true,          // Optional
    },
    // Add more sections...
  ],
}
```

### Image Paths

Use `getImagePath()` helper for all images:

- **External URLs**: `'https://images.unsplash.com/photo-...'`
- **Absolute paths**: `'/images/hero.jpg'` (files in `public/images/`)
- **Relative paths**: `'hero.jpg'` (auto-resolves to `/images/hero.jpg`)

### Theme Configuration

Edit `src/config/theme.ts` for colors, fonts, spacing:

```typescript
export const theme = {
  colors: {
    primary: '#667eea',
    secondary: '#764ba2',
    // ...
  },
  fonts: { ... },
  spacing: { ... },
}
```

All theme values are available as CSS variables: `--color-primary`, `--gradient-primary`, etc.

### Complete Config Options

See `src/config/site.ts` for all available configuration:
- Site info, contact, navigation
- Homepage sections
- About, Blog, Contact pages
- Bottom menu state per page
- Toast notifications defaults
- Popup defaults and examples
- Component showcase examples
- FAQ items

---

## Section Templates

### Hero Section

```astro
<HeroSection
  id="hero"
  title="Page Title"
  subtitle="Page subtitle"
  backgroundImage="path/to/image.jpg"
  scrollText="Scroll to explore"
/>
```

### Content Section

```astro
<ContentSection
  id="section-1"
  title="Section Title"
  text="Section content"
  backgroundImage="path/to/image.jpg"
  backgroundColor="#0a0e1a"
  stickyBackground={true}
/>
```

### Scroll Section (Manual)

```astro
<ScrollSection
  id="unique-id"
  backgroundImage={getImagePath('image.jpg')}
  backgroundColor="#0a0e1a"
  stickyBackground={true}
>
  <TextReveal delay={0}>
    <h2 class="section-title">Title</h2>
  </TextReveal>
  <TextReveal delay={200}>
    <p class="section-text">Content</p>
  </TextReveal>
</ScrollSection>
```

### Grid Section

```astro
<ScrollSection id="grid-section" backgroundColor="#0a0e1a">
  <TextReveal delay={0}>
    <h2 class="section-title">Grid Title</h2>
  </TextReveal>
  <div class="values-grid">
    {items.map((item, index) => (
      <TextReveal delay={index * 100}>
        <div class="value-card">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      </TextReveal>
    ))}
  </div>
</ScrollSection>
```

### Typography Classes

- `.hero-title` / `.page-title` - Large gradient titles
- `.hero-subtitle` / `.page-subtitle` - Subtitle text
- `.section-title` - Section headings
- `.section-text` - Body text

### Shared Styles

- **Cards**: `.value-card`, `.blog-card`, `.values-grid`, `.cards-grid`
- **Forms**: `.contact-form`, `.form-group`, `.submit-button`

---

## Animations

### CSS Animations (Recommended)

```css
.button {
  transition: transform 0.3s ease;
}
.button:hover {
  transform: scale(1.1);
}
```

### Web Animations API

```javascript
const button = document.querySelector('.button');
button.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.1)' }], {
  duration: 300,
  fill: 'forwards',
});
```

### Scroll-Triggered Animations

Use `TextReveal` component:

```astro
<TextReveal delay={0}>
  <h2>Title</h2>
</TextReveal>
```

### Interactive Components

- **FlipCard** - 3D flip on hover/click
- **MagneticCard** - Follows mouse movement
- **GlassCard** - Glassmorphism effect
- **TiltCard** - 3D tilt on hover
- **HoverRevealCard** - Reveals content on hover
- **ParticleButton** - Particle explosion on click

All components are in `src/components/` and work without dependencies!

---

## TypeScript & Linting

### TypeScript Configuration

- Strict mode enabled
- Unused variables/parameters detection
- Type checking for all `.ts`, `.tsx`, `.astro` files

### ESLint Configuration

- TypeScript ESLint parser
- Astro plugin for `.astro` files
- Custom rules for unused vars, `any` types, etc.

### Type Checking

```bash
npm run type-check  # Type check only
npm run lint        # ESLint only
npm run lint:full   # Full check (ESLint + TypeScript + Prettier)
```

### Best Practices

✅ Use explicit types  
✅ Avoid `any` - use `unknown` if type is unknown  
✅ Use type guards for type narrowing  
✅ Remove unused variables

---

## DRY Principles

### Shared Components

- **HeroSection** - Reusable hero sections
- **ContentSection** - Reusable content sections
- **ScrollSection** - Base scroll section component

### Shared Styles

- `src/styles/typography.css` - All typography styles
- `src/styles/cards.css` - Card patterns
- `src/styles/forms.css` - Form patterns

### Benefits

- Single source of truth
- Easier maintenance
- Consistent styling
- Smaller bundle size

**Always check if a shared component/style exists before creating new ones!**

---

## Testing Guide

### Scroll Snapping

- **Homepage** (`/`) - Should snap to each section
- **Other Pages** - All pages with scroll sections should snap properly
- Test with mouse wheel, trackpad, or keyboard

### Interactive Components

1. **Bottom Menu** - Hover/click to expand, shows social icons when closed
2. **Image Carousel** - Continuously scrolling background images
3. **Flip Cards** - Hover/click to flip
4. **Magnetic Cards** - Follow mouse movement
5. **Toast Notifications** - Different types and positions
6. **Popups** - Different sizes, triggers, and content types
7. **FAQ** - Expand/collapse with smooth animations

### Responsive Testing

- **Mobile** (< 768px) - Test navigation, bottom menu, all components
- **Tablet** (768px - 1024px) - Test layout adaptation
- **Desktop** (> 1024px) - Test full layout

### SEO Testing

- Check page titles and meta descriptions
- Visit `/sitemap.xml`
- Visit `/robots.txt`

---

## Deployment

### Build for Production

```bash
npm run build
```

The `dist/` folder contains your production-ready site.

### Deploy To

- **Vercel** - Connect GitHub repo
- **Netlify** - Drag & drop `dist/` folder
- **Cloudflare Pages** - Connect Git repo
- **Any static hosting** - Upload `dist/` folder

### Pre-deployment Checklist

- [ ] Update `site.url` in `astro.config.mjs`
- [ ] Update site info in `src/config/site.ts`
- [ ] Test all pages and components
- [ ] Check SEO meta tags
- [ ] Verify sitemap and robots.txt
- [ ] Test on multiple browsers
- [ ] Test responsive design

---

## Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [ESLint TypeScript Rules](https://typescript-eslint.io/rules/)

---

**Everything is config-driven - edit `src/config/site.ts` to customize your site!** 🚀
