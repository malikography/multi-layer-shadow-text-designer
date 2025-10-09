# Multi-Layer Shadow Text Designer

Create stunning multi-layer shadow text effects with customizable fonts, colors, angles, and depth. Design beautiful typography with Tailwind CSS colors and share your creations via URL.

![Multi-Layer Shadow Text Designer](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🎨 Features

- **Custom Text**: Enter any text to preview with your chosen effects
- **Multi-Layer Shadows**: Configure 1-6 layers of shadow for depth and dimension
- **Shadow Customization**:
  - Adjustable angle (0-360°)
  - Variable distance between layers (1-10px)
  - Direction control (darken/lighten)
  - Shadow depth adjustment (0-3)
- **Extensive Color Palette**: Full Tailwind CSS 4 color palette including:
  - 22 color families (slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose)
  - 11 shades per color (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950)
  - Black and white
  - **266 total colors available**
- **Font Manager**: Add Google Fonts on the fly and compare them instantly
- **Light/Dark Theme Previews**: See your designs in both light and dark contexts
- **URL Sharing**: All settings are stored in the URL for easy sharing
- **Copy CSS Style**: One-click copy of the complete CSS for each design
- **Reset to Defaults**: Quickly start fresh with default settings

## 🚀 Getting Started

### 🌐 Live Demo

**Try it now:** [https://heziode.github.io/multi-layer-shadow-text-designer/](https://heziode.github.io/multi-layer-shadow-text-designer/)

### 💻 Local Development

#### Prerequisites

- Node.js 18+ 
- PNPM 9+ (or use `npm install -g pnpm`)

#### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Heziode/multi-layer-shadow-text-designer.git
   cd multi-layer-shadow-text-designer
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser at `http://localhost:5173/multi-layer-shadow-text-designer/`

#### Build for Production

```bash
pnpm build
```

The production-ready files will be in the `dist/` directory.

## 📖 How to Use

### Basic Workflow

1. **Enter Your Text**: Type the text you want to design in the "Display Text" field
2. **Adjust Shadow Settings**:
   - Set the number of shadow layers
   - Choose the shadow angle (direction)
   - Adjust the distance between layers
3. **Choose Colors**: 
   - Select text color from the Tailwind CSS palette
   - Choose shadow color
   - Adjust shadow depth and direction (darken/lighten)
4. **Add Fonts**: Enter Google Font names to preview your design with different typefaces
5. **Preview**: Scroll down to see your text rendered with both light and dark backgrounds
6. **Copy & Share**:
   - Click "Copy Style" to get the CSS code
   - Click "Copy Share Link" to share your configuration

### URL Parameters

All settings are automatically saved to the URL, making it easy to share your designs. Parameters include:

- `text`: Display text
- `layers`: Number of shadow layers (1-6)
- `angle`: Shadow angle (0-360)
- `distance`: Shadow distance (1-10)
- `lightText`: Light theme text color
- `lightShadow`: Light theme shadow color
- `lightDepth`: Light theme shadow depth (0-3)
- `lightDirection`: Light theme shadow direction (darken/lighten)
- `darkText`: Dark theme text color
- `darkShadow`: Dark theme shadow color
- `darkDepth`: Dark theme shadow depth (0-3)
- `darkDirection`: Dark theme shadow direction (darken/lighten)
- `fonts`: Comma-separated list of fonts
- `colorExpanded`: Whether color section is expanded (true/false)

**Example URL:**
```
https://heziode.github.io/multi-layer-shadow-text-designer/?text=Hello&layers=4&angle=135&distance=3&lightText=blue-600&lightShadow=cyan-300
```

### Copying CSS Styles

Each preview card has a "Copy Style" button that copies the complete CSS to your clipboard:

```css
font-family: 'Geist', sans-serif;
color: var(--color-purple-600);
text-shadow: 2px 2px 0 var(--color-yellow-300), 4px 4px 0 var(--color-yellow-400), 6px 6px 0 var(--color-yellow-500);
```

**Note:** To use the Tailwind CSS color variables in your project, you'll need Tailwind CSS configured with the appropriate color palette.

## 🛠️ Technologies Used

- **Vue 3** (Composition API): Modern reactive UI framework
- **Vite**: Next-generation frontend build tool with lightning-fast HMR
- **Tailwind CSS 4**: Utility-first CSS framework with full color palette
- **PNPM**: Fast, disk space efficient package manager
- **Google Fonts API**: Dynamic font loading
- **GitHub Actions**: Automated deployment to GitHub Pages

## 🎯 Use Cases

- Logo design and branding
- Header and title typography
- Social media graphics
- Web design mockups
- Typography experimentation
- Teaching CSS text-shadow effects
- Creating retro or 3D text effects

## 📋 Browser Support

Works in all modern browsers that support:
- ES6+ JavaScript
- CSS custom properties
- CSS Grid
- Clipboard API

Tested on:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## 📁 Project Structure

```
multi-layer-shadow-text-designer/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/                      # Static assets
├── src/
│   ├── components/             # Vue components
│   │   ├── ActionButtons.vue   # Reset and Copy Link buttons
│   │   ├── ColorControls.vue   # Color section container
│   │   ├── FontGrid.vue        # Preview grid for all fonts
│   │   ├── FontManager.vue     # Add/remove Google Fonts
│   │   ├── Footer.vue          # Footer with links
│   │   ├── ShadowSettings.vue  # Shadow configuration controls
│   │   └── ThemeColorPicker.vue # Color picker for each theme
│   ├── utils/
│   │   ├── colors.js           # Tailwind color palette (266 colors)
│   │   └── urlSync.js          # URL state synchronization
│   ├── App.vue                 # Root component
│   ├── main.js                 # Application entry point
│   └── style.css               # Global styles with Tailwind
├── index.html                   # HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── postcss.config.js           # PostCSS configuration
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test locally: `pnpm dev`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the amazing color system
- [Vue.js](https://vuejs.org/) for the reactive framework
- [Google Fonts](https://fonts.google.com/) for the extensive font library

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ for designers and developers
