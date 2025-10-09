# Setup Instructions

## Prerequisites

- Node.js 18+ installed
- PNPM 9+ installed

## Installation

1. Navigate to the project directory:
```bash
cd multi-layer-shadow-text-designer
```

2. Install dependencies:
```bash
pnpm install
```

## Development

Run the development server:
```bash
pnpm dev
```

The app will be available at `http://localhost:5173`

## Build for Production

Build the project:
```bash
pnpm build
```

Preview the production build:
```bash
pnpm preview
```

## Deploy to GitHub Pages

### Prerequisites
1. Create a GitHub repository named `multi-layer-shadow-text-designer`
2. Enable GitHub Pages in repository settings (Settings → Pages → Source: GitHub Actions)

### Deployment
The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `main` branch.

To deploy:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

The site will be available at: `https://heziode.github.io/multi-layer-shadow-text-designer/`

## Project Structure

```
multi-layer-shadow-text-designer/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                      # Static assets
├── src/
│   ├── components/             # Vue components
│   │   ├── ActionButtons.vue
│   │   ├── ColorControls.vue
│   │   ├── FontGrid.vue
│   │   ├── FontManager.vue
│   │   ├── Footer.vue
│   │   ├── ShadowSettings.vue
│   │   └── ThemeColorPicker.vue
│   ├── utils/                  # Utility functions
│   │   ├── colors.js          # Color palette
│   │   └── urlSync.js         # URL synchronization
│   ├── App.vue                # Main app component
│   ├── main.js                # Entry point
│   └── style.css              # Global styles
├── index.html                  # HTML entry point
├── package.json               # Dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── postcss.config.js          # PostCSS configuration
```

## Technologies Used

- **Vue 3**: Progressive JavaScript framework
- **Vite**: Next-generation frontend tooling
- **Tailwind CSS 4**: Utility-first CSS framework
- **PNPM**: Fast, disk space efficient package manager

## Troubleshooting

### Port already in use
If port 5173 is already in use, Vite will automatically try the next available port.

### Dependencies installation fails
Make sure you have PNPM installed:
```bash
npm install -g pnpm@9
```

### Build fails
Clear the cache and reinstall:
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```
