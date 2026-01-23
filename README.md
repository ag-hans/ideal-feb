# ideal-feb

A Valentine's Day themed SvelteKit web app with static site generation, deployed to GitHub Pages.

## 💕 Features

- **Page 1 (Home)**: "Will you be my Valentine?" question with only "Yes" options
- **Page 2 (Thank You)**: Confirmation page when user clicks yes
- **Page 3 (Letter)**: Personal letter with photo gallery scaffolding
- **Secret Button**: Hidden surprise that only appears on February 14th!

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── app.html          # HTML template
├── app.css           # Global styles (Valentine's theme)
├── app.d.ts          # TypeScript declarations
└── routes/
    ├── +layout.svelte    # Root layout
    ├── +layout.ts        # SSG configuration
    ├── +page.svelte      # Home - Valentine question
    ├── thank-you/
    │   └── +page.svelte  # Thank you page
    └── letter/
        └── +page.svelte  # Letter & photos page
```

## 🎨 Customization

### Adding Your Letter Content

Edit `src/routes/letter/+page.svelte` and replace the placeholder text in the `.letter-content` section.

### Adding Photos

1. Create images in `static/images/` directory
2. Uncomment the `<img>` tags in `src/routes/letter/+page.svelte`
3. Update the `src` paths to match your image filenames

### Testing the Secret Button

The secret button appears only on February 14th. To test it locally, temporarily modify the date check in `src/routes/+page.svelte`:

```ts
// Change this line to test:
isValentinesDay = true
```

## 🌐 Deployment

This project is configured for GitHub Pages deployment:

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Access at: `https://<username>.github.io/ideal-feb/`

### Manual Deployment

```bash
npm run build
# Upload the `build/` directory to your hosting provider
```

## 📝 Tech Stack

- **Framework**: SvelteKit 2 with Svelte 5
- **Styling**: CSS with custom properties (CSS variables)
- **Build**: Vite 6
- **Deployment**: Static adapter + GitHub Pages
