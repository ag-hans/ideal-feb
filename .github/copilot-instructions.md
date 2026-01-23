# Copilot Instructions for ideal-feb

A Valentine's Day themed SvelteKit app with 3 mobile-first pages, SSG, and GitHub Pages deployment.

## Project Architecture

```
src/routes/           # File-based routing (SvelteKit convention)
├── +layout.svelte    # Root layout - imports global CSS
├── +layout.ts        # SSG config: prerender=true, trailingSlash='always'
├── +page.svelte      # Home: Valentine question (Yes/Yes + Feb 14 secret button)
├── thank-you/        # Thank you page after clicking Yes
└── letter/           # Letter page with photo gallery scaffolding
```

**Key architectural decisions:**

- **Static Site Generation (SSG)**: All routes prerendered via `@sveltejs/adapter-static`
- **Base path handling**: Use `import { base } from '$app/paths'` for ALL internal links
- **Mobile-first**: CSS designed for 320px+ screens, enhanced at 640px breakpoint

## SvelteKit Patterns Used

### File Naming Conventions

| File             | Purpose                           |
| ---------------- | --------------------------------- |
| `+page.svelte`   | Page component (route content)    |
| `+layout.svelte` | Shared layout wrapper             |
| `+layout.ts`     | Layout data/config (non-reactive) |
| `+page.ts`       | Page-specific data loading        |

### Svelte 5 Runes (this project uses Svelte 5)

```svelte
let isValentinesDay = $state(false);  // Reactive state
```

### GitHub Pages Links Pattern

```svelte
<script>
  import { base } from '$app/paths';
</script>
<a href="{base}/thank-you/">Link</a>  <!-- Always use {base} prefix -->
```

### Component-Scoped Styles

Styles in `<style>` blocks are automatically scoped to the component. Global styles go in `src/app.css`.

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:5173
npm run build        # Build static site to /build
npm run preview      # Preview production build locally
npm run check        # TypeScript/Svelte type checking
```

## Deployment

Automatic via GitHub Actions on push to `main`. See `.github/workflows/deploy.yml`.

**Important**: If you rename the repo, update `paths.base` in `svelte.config.js`.

## Key Files Reference

- [svelte.config.js](../svelte.config.js) - SSG adapter config + base path
- [src/app.css](../src/app.css) - Valentine theme CSS variables
- [src/routes/+page.svelte](../src/routes/+page.svelte) - Feb 14 date-check logic
- [src/routes/letter/+page.svelte](../src/routes/letter/+page.svelte) - Photo gallery scaffolding

## Content Customization

1. **Letter content**: Edit `src/routes/letter/+page.svelte`, replace placeholder text
2. **Photos**: Add to `static/images/`, uncomment `<img>` tags in letter page
3. **Test secret button**: Set `isValentinesDay = true` in `src/routes/+page.svelte`
