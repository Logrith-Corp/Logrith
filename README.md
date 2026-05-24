# Logrith

> **Fast, lightweight, and privacy-focused utilities. Tools for developers, creators, and everyday users.**

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-active-brightgreen.svg)
![Browser Support](https://img.shields.io/badge/browser-all%20modern-blue.svg)

**Live:** [logrith.in](https://logrith.in)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tool Categories](#tool-categories)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [Security & Privacy](#security--privacy)
- [Vibe Coding - Build Like We Did](#vibe-coding---build-like-we-did)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [License](#license)
- [Contact](#contact)

---

## 🎯 Overview

**Logrith** is a comprehensive online tools platform offering 30+ free, browser-based utilities designed to solve everyday digital tasks instantly. All tools run entirely in your browser with zero data uploads to servers.

### Why Logrith?

- ✅ **100% Free** - No subscriptions, no trial periods, no hidden charges
- ✅ **Privacy First** - All processing happens in your browser; no data uploads
- ✅ **Lightning Fast** - Instant results with no server round-trips
- ✅ **No Login Required** - Start using tools instantly without registration
- ✅ **Mobile Ready** - Works perfectly on phones, tablets, and desktops
- ✅ **Always Available** - Minimal dependencies, maximum uptime

---

## ✨ Features

### Core Features
- **30+ Free Tools** - Comprehensive utility collection across 8 categories
- **Browser-Based Processing** - All computations happen locally on your device
- **Responsive Design** - Seamless experience across all screen sizes
- **SEO Optimized** - Excellent search engine visibility with structured data
- **Accessibility** - Inclusive design following WCAG standards
- **No Dependencies** - Zero external APIs or third-party processing

### Tool Categories

#### 📷 **Image Tools** (5 Tools)
Convert, compress, resize, crop, and rotate images instantly.
- Image Converter (JPG, PNG, WEBP, BMP)
- Image Compressor (reduce file size)
- Image Resize (custom dimensions)
- Image Crop (interactive cropping)
- Image Rotate & Flip (90°, 180°, 270° rotations)

#### 📄 **PDF Tools** (5 Tools)
Merge, split, convert, and manipulate PDF files.
- PDF Merge (combine multiple PDFs)
- PDF Split (extract specific pages)
- JPG to PDF (convert images)
- PDF to JPG (extract pages)
- PDF Rotate (adjust page orientation)

#### 🔄 **Converter Tools** (2 Tools)
Convert between different formats and units.
- Color Converter (HEX, RGB, HSL, etc.)
- Unit Converter (length, weight, temperature, volume)

#### 🧮 **Calculator Tools** (3 Tools)
Quick financial and mathematical calculations.
- Percentage Calculator
- GST Calculator (inclusive/exclusive)
- EMI Calculator (loan payment estimation)

#### ✏️ **Text Tools** (9 Tools)
Text processing, formatting, and generation.
- Word Counter
- Case Converter (UPPER, lower, Title, Sentence)
- Character Counter
- Lorem Ipsum Generator
- Text Diff Checker
- Duplicate Line Remover
- Slug Generator
- QR Code Generator
- Password Generator

#### 👨‍💻 **Developer Tools** (6 Tools)
Essential utilities for programmers.
- JSON Formatter (format & validate)
- Base64 Encode/Decode
- URL Encoder/Decoder
- Hash Generator (MD5, SHA1, SHA256)
- UUID Generator (v4)
- Regex Tester

#### ⚡ **Daily Utilities** (2 Tools)
Essential tools for everyday tasks.
- Password Strength Checker
- Age Calculator (exact age calculation)

#### 🤖 **AI Tools** (2 Tools)
AI-powered analysis and optimization.
- Resume Analyzer
- Website Speed Analyzer

---

## 🛠 Tech Stack

### Frontend
- **HTML5** - Semantic markup for accessibility and SEO
- **CSS3** - Modern styling with responsive design
- **JavaScript (Vanilla)** - No frameworks, lightweight and fast

### Architecture
- **Static Site** - No backend required
- **Client-Side Processing** - All computations in browser
- **Progressive Enhancement** - Works on older browsers
- **Mobile-First Design** - Optimized for mobile devices

### Tools & Libraries
- **Canvas API** - Image processing (compression, resizing, rotating)
- **Web APIs** - File handling, Local Storage
- **SVG Icons** - Scalable vector graphics
- **Schema.org** - Structured data for SEO

---

## 📦 Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- No server or build tools required
- No database required

### Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/Logrith-Corp/Logrith.git
cd Logrith
```

2. **Run local server:**
   
Choose one of the following methods to serve the project locally:

```bash
# Using Python 3:
python -m http.server 8000

# Using Python 2:
python -m SimpleHTTPServer 8000

# Using Node.js (http-server):
npx http-server

# Using PHP:
php -S localhost:8000

# Using Live Server (VS Code Extension):
# Install "Live Server" extension in VS Code
# Right-click index.html → "Open with Live Server"
```

3. **Access the site:**
Open `http://localhost:8000/en/` in your browser

---

## 📁 Project Structure

```
Logrith/
├── en/                          # English language content
│   ├── index.html              # Main homepage
│   ├── load-components.js      # Dynamic component loader
│   ├── components/
│   │   ├── navbar.html         # Navigation bar
│   │   └── footer.html         # Footer component
│   ├── categories/
│   │   ├── categories.html     # All categories hub
│   │   ├── image-tools/        # Category pages
│   │   ├── pdf-tools/
│   │   ├── converter-tools/
│   │   ├── calculator-tools/
│   │   ├── text-tools/
│   │   ├── developer-tools/
│   │   ├── daily-utilities/
│   │   └── ai-tools/
│   ├── tools/                  # Individual tool pages
│   │   ├── image-converter.html
│   │   ├── pdf-merge.html
│   │   ├── json-formatter.html
│   │   └── ... (30+ tools)
│   ├── blog/
│   │   ├── index.html          # Blog landing page
│   │   └── ... (individual blog posts)
│   └── pages/
│       ├── about.html
│       ├── contact.html
│       └── privacy.html
├── assets/
│   ├── css/
│   │   └── style.css           # Global styles
│   ├── js/
│   │   └── main.js             # Global scripts
│   ├── svg/
│   │   └── icons.svg           # SVG icon sprite
│   └── images/                 # Static images
├── index.html                  # Root redirect
├── README.md                   # This file
├── LICENSE                     # MIT License
├── PRIVACY.md                  # Privacy Policy
├── SECURITY.md                 # Security policy
├── CONTRIBUTORS.md             # Contributors & License Credits
└── CHANGELOG.md                # Version history
```

---

## 🚀 Usage

### For End Users

1. **Visit the site:** [logrith.in](https://logrith.in)
2. **Browse tools:** Explore tools by category or search
3. **Use instantly:** No login or installation needed
4. **Your data stays private:** All processing happens in your browser
5. **Privacy guaranteed:** See our [Privacy Policy](./PRIVACY.md)
6. **Have questions?** Visit our [Contact Page](https://logrith.in/en/pages/contact.html)

### For Developers

#### Adding a New Tool

1. **Create tool HTML file** in `en/tools/`:
```html
<!-- en/tools/my-new-tool.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Tool - Logrith</title>
  <!-- ... SEO metadata ... -->
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
  <!-- Navbar -->
  <div id="navbar"></div>
  
  <!-- Tool content -->
  <section class="tool-container">
    <!-- Tool UI -->
  </section>
  
  <!-- Footer -->
  <div id="footer"></div>
  
  <script src="/en/load-components.js"></script>
  <script src="/assets/js/main.js"></script>
</body>
</html>
```

2. **Add to homepage** `en/index.html`:
```html
<a href="tools/my-new-tool" class="tool-item">
  <div class="ti-text">
    <h4><svg class="icon1"><use href="/assets/svg/icons.svg#icon-name"></use></svg> My New Tool</h4>
    <p>Tool description</p>
  </div>
</a>
```

3. **Add to category page** `en/categories/category-name/`:
```html
<a href="/en/tools/my-new-tool" class="tool-card">
  <!-- Card content -->
</a>
```

#### URL Structure

- Homepage: `/en/`
- Tool: `/en/tools/tool-name`
- Category: `/en/categories/category-name`
- Blog: `/en/blog/`
- Blog Post: `/en/blog/post-slug`

*Note: All URLs work without `.html` extension (server-side or via static hosting configuration)*

---

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Fully Supported |
| Firefox | Latest | ✅ Fully Supported |
| Safari | Latest | ✅ Fully Supported |
| Edge | Latest | ✅ Fully Supported |
| Opera | Latest | ✅ Fully Supported |
| Chrome Mobile | Latest | ✅ Fully Supported |
| Safari iOS | Latest | ✅ Fully Supported |

**Requirements:**
- ES6 JavaScript support
- Canvas API (for image tools)
- File API (for file handling)

---

## ⚡ Performance

### Optimization Strategies

- **Zero External Dependencies** - All code is self-contained
- **Minimal JavaScript** - Vanilla JS without frameworks
- **CSS3 Animations** - Hardware-accelerated where possible
- **Image Optimization** - Local Canvas processing
- **Lazy Loading** - Components load on demand
- **Compression** - Tools use browser native compression

### Metrics

- **Page Load:** < 2 seconds
- **Tool Response:** < 100ms
- **Bundle Size:** < 500KB total
- **Lighthouse Score:** 95+

---

## 🔒 Security & Privacy

### Privacy First Approach

1. **No Data Uploads** - All processing happens in your browser
2. **No Tracking** - No tracking cookies or analytics
3. **No Third-Party APIs** - All tools are self-contained
4. **HTTPS Only** - Encrypted connection to the server
5. **Frontend Only** - Completely frontend-based application (no backend processing)

### Security Practices

- **Content Security Policy** - Prevents injection attacks
- **No Inline Scripts** - All scripts are external
- **Sanitized Input** - User input is validated
- **Regular Updates** - Security patches applied promptly
- **Transparency** - Full disclosure policy

### Data Handling

- ✅ Images are never uploaded to servers
- ✅ PDFs are processed locally in your browser
- ✅ Text data never leaves your device
- ✅ No personal information collected
- ✅ No analytics tracking of usage
- ✅ 100% Frontend Application - No backend data storage

**For complete privacy details, see [PRIVACY.md](./PRIVACY.md)**

*For security details, see [SECURITY.md](./SECURITY.md)*

---

## 💻 Vibe Coding - Build Like We Did

**Logrith is pure vibe coding** - No AI copy-paste, no frameworks, no build tools. Just raw HTML, CSS, and JavaScript written with intuition and creativity.

### The Vibe Coding Philosophy

- **Direct Typing** - Code written naturally without generators
- **Zero Framework Bloat** - Vanilla JavaScript only
- **No Build Pipeline** - Edit → Save → Refresh
- **Pure Frontend** - Browser is your runtime
- **Creative Freedom** - Full control over every line

### How We Built It

```
1. Open HTML editor (VS Code, Sublime, Notepad++)
2. Type HTML structure directly
3. Style with CSS - no preprocessors
4. Write vanilla JS - no libraries needed
5. Test in browser immediately
6. Iterate and refine
```

### Why Vibe Coding?

✨ **Intuitive Development** - No learning curve for build tools  
✨ **Full Control** - Understand every line you write  
✨ **Lightweight Code** - Only what you actually need  
✨ **Fast Feedback** - Instant browser refresh  
✨ **Pure JavaScript** - Learn the fundamentals  

### Running Locally for Development

```bash
# Clone and navigate
git clone https://github.com/Logrith-Corp/Logrith.git
cd Logrith

# Start a simple server
python -m http.server 8000

# Open in browser
# http://localhost:8000/en/
```

### Edit and Refresh

1. Open `/en/tools/` and pick any tool
2. Edit the HTML/CSS/JavaScript directly
3. Save the file
4. Refresh browser (F5 or Ctrl+R)
5. See your changes immediately

**No npm. No webpack. No babel. Just code.**

### Project Stats

- 📁 **30+ Tools** - Each with pure HTML/CSS/JS
- 🎨 **Custom CSS** - No Bootstrap or Tailwind
- ⚡ **Vanilla JS** - No jQuery, React, Vue, etc.
- 📄 **Static Files** - Hosted as-is on GitHub Pages
- 💾 **Single Refresh** - All processing in browser

### Start Your Own Vibe Coding Project

This is the perfect template if you want to:
- Learn web development fundamentals
- Build without frameworks
- Keep projects lightweight
- Maintain complete code clarity
- Ship instantly with zero build complexity

**Copy our approach. Build your own vibes.**

---

## 🤝 Contributing

We welcome contributions! Here's how to help:

### Reporting Issues

Found a bug? Have a feature request? Please open an issue:
1. Go to [Issues](https://github.com/Logrith-Corp/Logrith/issues)
2. Click "New Issue"
3. Provide detailed description
4. Include browser and OS information

### Submitting Pull Requests

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/my-feature`
3. **Make your changes**
4. **Test thoroughly**
5. **Submit PR with description**

### Code Guidelines

- Use semantic HTML
- Write accessible CSS
- Keep JavaScript vanilla (no frameworks)
- Follow existing code style
- Add comments for complex logic
- Test on mobile devices

### Contributors

See [CONTRIBUTORS.md](./CONTRIBUTORS.md) for a list of contributors and license information.

---

## 🗺 Roadmap

### Completed ✅
- [x] Core tool infrastructure
- [x] 30+ tools across 8 categories
- [x] Responsive design
- [x] SEO optimization
- [x] Blog platform
- [x] Category organization
- [x] Mobile support

### In Progress 🔄
- [ ] Individual category landing pages
- [ ] Advanced blog with comments
- [ ] User accounts (optional)
- [ ] Dark mode theme
- [ ] Internationalization (multi-language)

### Planned 📝
- [ ] Mobile apps (iOS/Android)
- [ ] Browser extensions
- [ ] API for developers
- [ ] Advanced analytics dashboard
- [ ] Premium features (optional)
- [ ] Community tools gallery
- [ ] Tool versioning system
- [ ] Performance improvements

### Future Ideas 💡
- Video tutorials
- Live code collaboration
- Batch processing
- Scheduled tasks
- Tool combinations/workflows
- Leaderboards/achievements

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

**Full license information and credits available in [CONTRIBUTORS.md](./CONTRIBUTORS.md)**

### MIT License Summary
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ⚠️ Liability: Not liable
- ⚠️ Warranty: As-is without warranty

---

## 📧 Contact & Support

### Get In Touch

- **Website:** [logrith.in](https://logrith.in)
- **Contact Page:** [logrith.in/en/pages/contact.html](https://logrith.in/en/pages/contact.html)
- **Email:** support@logrith.in
- **GitHub:** [github.com/Logrith-Corp](https://github.com/Logrith-Corp)
- **Issues:** [Report on GitHub](https://github.com/Logrith-Corp/Logrith/issues)

### Support

- **Documentation:** Available on [logrith.in/docs](https://logrith.in/docs)
- **FAQ:** Available on [logrith.in/faq](https://logrith.in/faq)
- **Blog:** Tips and tutorials on [logrith.in/blog](https://logrith.in/blog)
- **Privacy Policy:** [logrith.in/en/pages/privacy.html](https://logrith.in/en/pages/privacy.html)

---

## 🙏 Acknowledgments

- Inspired by need for simple, private, fast online tools
- Built with ❤️ for developers and creators
- Community feedback and contributions appreciated

---

## 📊 Project Stats

- **Tools:** 30+
- **Categories:** 8
- **Pages:** 50+
- **Lines of Code:** 10,000+
- **Load Time:** < 2 seconds
- **Browser Support:** All modern browsers
- **Tech Stack:** HTML, CSS, JavaScript (100% Frontend)

---

## 🔗 Quick Links

| Link | Purpose |
|------|---------|
| [Homepage](https://logrith.in) | Main website |
| [All Tools](https://logrith.in/en/categories/all-tools) | Complete tool list |
| [Categories](https://logrith.in/en/categories/categories) | Tools by category |
| [Blog](https://logrith.in/en/blog) | Guides and tutorials |
| [Contact](https://logrith.in/en/pages/contact.html) | Get in touch |
| [Privacy Policy](https://logrith.in/en/pages/privacy.html) | Privacy information |
| [GitHub](https://github.com/Logrith-Corp/Logrith) | Source code |
| [Issues](https://github.com/Logrith-Corp/Logrith/issues) | Report bugs |

---

**Made with ❤️ by Logrith Corp**

*Last Updated: May 24, 2026*
