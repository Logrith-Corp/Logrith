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
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [License](#license)
- [Contact](#contact)

---

## 🎯 Overview

**Logrith** is a comprehensive online tools platform offering 30+ free, browser-based utilities designed to solve everyday digital tasks instantly. All tools run entirely in your browser with zero server dependencies, ensuring complete privacy and lightning-fast performance.

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

2. **Open in browser:**
```bash
# Simply open the HTML files in your browser
# Or use a local server for best results

# Using Python 3:
python -m http.server 8000

# Using Node.js (http-server):
npx http-server

# Using PHP:
php -S localhost:8000
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
│   │   ├── image-tools/        # Category pages (coming soon)
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
└── SECURITY.md                 # Security policy

```

---

## 🚀 Usage

### For End Users

1. **Visit the site:** [logrith.in](https://logrith.in)
2. **Browse tools:** Explore tools by category or search
3. **Use instantly:** No login or installation needed
4. **Your data stays private:** All processing happens in your browser

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
2. **No Tracking** - Only essential analytics (privacy-focused)
3. **No Cookies** - No tracking cookies used
4. **No Third-Party APIs** - All tools are self-contained
5. **HTTPS Only** - Encrypted connection to the server

### Security Practices

- **Content Security Policy** - Prevents injection attacks
- **No Inline Scripts** - All scripts are external
- **Sanitized Input** - User input is validated
- **Regular Updates** - Security patches applied promptly
- **Transparency** - Full disclosure policy

### Data Handling

- ✅ Images are never uploaded to servers
- ✅ PDFs are processed locally
- ✅ Text data never leaves your device
- ✅ No personal information collected
- ✅ No analytics tracking of usage

*See [SECURITY.md](./SECURITY.md) for detailed security information.*

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

- **Logrith Corp** - Original Creator & Maintainer

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
- **Email:** support@logrith.in
- **GitHub:** [github.com/Logrith-Corp](https://github.com/Logrith-Corp)
- **Issues:** [Report on GitHub](https://github.com/Logrith-Corp/Logrith/issues)

### Support

- **Documentation:** Available on [logrith.in/docs](https://logrith.in/docs)
- **FAQ:** Available on [logrith.in/faq](https://logrith.in/faq)
- **Blog:** Tips and tutorials on [logrith.in/blog](https://logrith.in/blog)

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

---

## 🔗 Quick Links

| Link | Purpose |
|------|---------|
| [Homepage](https://logrith.in) | Main website |
| [All Tools](https://logrith.in/en/categories/all-tools) | Complete tool list |
| [Categories](https://logrith.in/en/categories/categories) | Tools by category |
| [Blog](https://logrith.in/en/blog) | Guides and tutorials |
| [GitHub](https://github.com/Logrith-Corp/Logrith) | Source code |
| [Issues](https://github.com/Logrith-Corp/Logrith/issues) | Report bugs |

---

**Made with ❤️ by Logrith Corp**

*Last Updated: May 24, 2026*
