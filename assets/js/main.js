/* ===== LOGRITH MAIN JS ===== */

// All tools data for search
const ALL_TOOLS = [
  // Image Tools
  { name: 'Image Converter',           cat: 'Image',   url: 'tools/image-converter.html',       icon: '🔄' },
  { name: 'Image Compressor',          cat: 'Image',   url: 'tools/image-compressor.html',      icon: '📦' },
  { name: 'Image Resize',              cat: 'Image',   url: 'tools/image-resize.html',          icon: '↔️' },
  { name: 'Image Crop',                cat: 'Image',   url: 'tools/image-crop.html',            icon: '✂️' },
  { name: 'Image Rotate & Flip',       cat: 'Image',   url: 'tools/image-rotate.html',          icon: '🔃' },
  // PDF Tools
  { name: 'PDF Merge',                 cat: 'PDF',     url: 'tools/pdf-merge.html',             icon: '📎' },
  { name: 'PDF Split',                 cat: 'PDF',     url: 'tools/pdf-split.html',             icon: '✂️' },
  { name: 'JPG to PDF',                cat: 'PDF',     url: 'tools/jpg-to-pdf.html',            icon: '🖼️' },
  { name: 'PDF to JPG',                cat: 'PDF',     url: 'tools/pdf-to-jpg.html',            icon: '📄' },
  { name: 'PDF Rotate',                cat: 'PDF',     url: 'tools/pdf-rotate.html',            icon: '🔃' },
  // Dev Tools
  { name: 'JSON Formatter',            cat: 'Dev',     url: 'tools/json-formatter.html',        icon: '{ }' },
  { name: 'Base64 Encode/Decode',      cat: 'Dev',     url: 'tools/base64.html',                icon: '🔐' },
  { name: 'URL Encoder/Decoder',       cat: 'Dev',     url: 'tools/url-encoder.html',           icon: '🔗' },
  { name: 'Password Generator',        cat: 'Dev',     url: 'tools/password-generator.html',    icon: '🔑' },
  { name: 'Hash Generator',            cat: 'Dev',     url: 'tools/hash-generator.html',        icon: '#' },
  { name: 'UUID Generator',            cat: 'Dev',     url: 'tools/uuid-generator.html',        icon: '🆔' },
  { name: 'Regex Tester',              cat: 'Dev',     url: 'tools/regex-tester.html',          icon: '🔍' },
  // Text Tools
  { name: 'Word Counter',              cat: 'Text',    url: 'tools/word-counter.html',          icon: '📝' },
  { name: 'Case Converter',            cat: 'Text',    url: 'tools/case-converter.html',        icon: 'Aa' },
  { name: 'Character Counter',         cat: 'Text',    url: 'tools/character-counter.html',     icon: '🔢' },
  { name: 'Lorem Ipsum Generator',     cat: 'Text',    url: 'tools/lorem-ipsum.html',           icon: '📃' },
  { name: 'Text Diff Checker',         cat: 'Text',    url: 'tools/text-diff.html',             icon: '🔍' },
  { name: 'Duplicate Line Remover',    cat: 'Text',    url: 'tools/duplicate-remover.html',     icon: '🧹' },
  { name: 'Slug Generator',            cat: 'Text',    url: 'tools/slug-generator.html',        icon: '🔗' },
  // Utility Tools
  { name: 'QR Code Generator',         cat: 'Utility', url: 'tools/qr-generator.html',         icon: '▣' },
  { name: 'Color Converter',           cat: 'Utility', url: 'tools/color-converter.html',       icon: '🎨' },
  { name: 'Age Calculator',            cat: 'Utility', url: 'tools/age-calculator.html',        icon: '📅' },
  { name: 'Unit Converter',            cat: 'Utility', url: 'tools/unit-converter.html',        icon: '📐' },
  { name: 'Percentage Calculator',     cat: 'Utility', url: 'tools/percentage-calculator.html', icon: '%' },
  { name: 'GST Calculator',            cat: 'Utility', url: 'tools/gst-calculator.html',        icon: '💹' },
  { name: 'EMI Calculator',            cat: 'Utility', url: 'tools/emi-calculator.html',        icon: '💰' },
  { name: 'Password Strength Checker', cat: 'Utility', url: 'tools/password-strength.html',     icon: '🔒' },
];

/* ─────────────────────────────────────────────────────────────
   PATH PREFIX — Tumhara exact folder structure ke liye:
     /en/index.html            → '' (tools/ seedha kaam karta)
     /en/tools/xyz.html        → '../'
     /en/categories/xyz.html   → '../'
     /en/blog/xyz.html         → '../'
   ───────────────────────────────────────────────────────────── */
function getRootPrefix() {
  const path = window.location.pathname;
  if (
    path.includes('/tools/') ||
    path.includes('/categories/') ||
    path.includes('/blog/')
  ) return '../';
  return '';
}

/* ─────────────────────────────────────────────────────────────
   CORE SEARCH ENGINE — 1 letter se kaam kare
   Priority:
   1. Tool name ka koi bhi word us letter/string se start kare  ← sabse pehle
   2. Naam mein kahi bhi match ho (includes)                    ← fir
   3. Category match                                            ← last
   ───────────────────────────────────────────────────────────── */
function searchTools(q, limit) {
  limit = limit || 8;
  if (!q || !q.trim()) return [];
  var lq = q.toLowerCase().trim();

  var tier1 = [], tier2 = [], tier3 = [];
  var seen  = {};

  ALL_TOOLS.forEach(function(t) {
    var nameLow = t.name.toLowerCase();
    var catLow  = t.cat.toLowerCase();

    // Tier 1 — koi bhi word us se start kare
    var words      = nameLow.split(/[\s\/\-]+/);
    var wordMatch  = words.some(function(w) { return w.indexOf(lq) === 0; });

    // Tier 2 — naam mein kahi bhi ho
    var nameMatch  = nameLow.indexOf(lq) !== -1;

    // Tier 3 — category se start ho
    var catMatch   = catLow.indexOf(lq) === 0;

    if (!seen[t.url]) {
      if (wordMatch)       { tier1.push(t); seen[t.url] = 1; }
      else if (nameMatch)  { tier2.push(t); seen[t.url] = 1; }
      else if (catMatch)   { tier3.push(t); seen[t.url] = 1; }
    }
  });

  return tier1.concat(tier2).concat(tier3).slice(0, limit);
}

/* ─────────────────────────────────────────────────────────────
   RENDER DROPDOWN — dono (nav + hero) ke liye shared
   Sirf DOM element alag, baaki sab same
   ───────────────────────────────────────────────────────────── */
function renderDropdown(containerEl, results, prefix) {
  if (!containerEl) return;
  if (!results || !results.length) {
    containerEl.style.display = 'none';
    return;
  }
  containerEl.innerHTML = results.map(function(t) {
    return '<a href="' + prefix + t.url + '">'
         + '<span class="sr-icon">' + t.icon + '</span>'
         + '<span class="sr-name">' + t.name + '</span>'
         + '<span class="sr-cat">'  + t.cat  + '</span>'
         + '</a>';
  }).join('');
  containerEl.style.display = 'block';
}

/* ─────────────────────────────────────────────────────────────
   ARROW KEY NAVIGATION — reuse karo dono mein
   ───────────────────────────────────────────────────────────── */
function handleArrowKeys(e, containerEl) {
  if (!containerEl) return;
  if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
  var links  = Array.prototype.slice.call(containerEl.querySelectorAll('a'));
  if (!links.length) return;
  var active = containerEl.querySelector('a.sr-active');
  var idx    = links.indexOf(active);
  if (e.key === 'ArrowDown') idx = (idx + 1) % links.length;
  else                       idx = (idx - 1 + links.length) % links.length;
  links.forEach(function(l) { l.classList.remove('sr-active'); });
  links[idx].classList.add('sr-active');
  e.preventDefault();
}

/* ─────────────────────────────────────────────────────────────
   NAV SEARCH
   UI: bilkul same — navbar ka existing input + #search-results
   Sirf logic fix ki — 1 letter se results
   ───────────────────────────────────────────────────────────── */
function initSearch() {
  var input   = document.getElementById('nav-search-input');
  var results = document.getElementById('search-results');
  if (!input || !results) return;

  var prefix = getRootPrefix();

  // 1 letter → results
  input.addEventListener('input', function() {
    var q = input.value.trim();
    if (!q) { results.style.display = 'none'; return; }
    renderDropdown(results, searchTools(q, 8), prefix);
  });

  // Bahar click → close
  document.addEventListener('click', function(e) {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.style.display = 'none';
    }
  });

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      results.style.display = 'none';
      input.blur();
      return;
    }
    if (e.key === 'Enter') {
      var active = results.querySelector('a.sr-active') || results.querySelector('a');
      if (active) window.location = active.href;
      return;
    }
    handleArrowKeys(e, results);
  });
}

/* ─────────────────────────────────────────────────────────────
   HERO SEARCH
   UI: bilkul same — hero ka existing .hero-search (input + button)
   Extra: input ke neeche #hero-search-results div se dropdown
   (Ye div index.html mein add karna hai — neeche bataya)
   ───────────────────────────────────────────────────────────── */
function initHeroSearch() {
  var input   = document.getElementById('hero-search');
  var btn     = document.getElementById('hero-search-btn');
  var results = document.getElementById('hero-search-results');
  if (!input) return;

  var prefix = getRootPrefix();

  // 1 letter → results in hero dropdown
  input.addEventListener('input', function() {
    if (!results) return;
    var q = input.value.trim();
    if (!q) { results.style.display = 'none'; return; }
    renderDropdown(results, searchTools(q, 6), prefix);
  });

  // Bahar click → close hero results
  document.addEventListener('click', function(e) {
    if (!results) return;
    var clickedOutside =
      !input.contains(e.target) &&
      !results.contains(e.target) &&
      !(btn && btn.contains(e.target));
    if (clickedOutside) results.style.display = 'none';
  });

  // Navigate function
  function doNavigate() {
    var q = input.value.trim();
    if (!q) return;

    // Pehle highlighted/active result dekho
    if (results) {
      var active = results.querySelector('a.sr-active') || results.querySelector('a');
      if (active) { window.location = active.href; return; }
    }

    // Warna best match
    var found = searchTools(q, 1);
    if (found.length) window.location = prefix + found[0].url;
    else window.location = '#all-tools';
  }

  if (btn) btn.addEventListener('click', doNavigate);

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (results) results.style.display = 'none';
      return;
    }
    if (e.key === 'Enter') {
      doNavigate();
      return;
    }
    if (results) handleArrowKeys(e, results);
  });
}

/* ─────────────────────────────────────────────────────────────
   HAMBURGER — bilkul same
   ───────────────────────────────────────────────────────────── */
function initHamburger() {
  var btn   = document.getElementById('hamburger');
  var mNav  = document.getElementById('mobile-nav');
  var close = document.getElementById('mobile-close');
  if (!btn || !mNav) return;
  btn.addEventListener('click',   function() { mNav.classList.add('open'); });
  if (close) close.addEventListener('click', function() { mNav.classList.remove('open'); });
}

/* ─────────────────────────────────────────────────────────────
   FAQ ACCORDION — bilkul same
   ───────────────────────────────────────────────────────────── */
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(function(q) {
    q.addEventListener('click', function() {
      q.closest('.faq-item').classList.toggle('open');
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   UTILITIES — bilkul same, kuch nahi badla
   ───────────────────────────────────────────────────────────── */
function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(function() {
    var orig = btn.textContent;
    btn.textContent = '✓ Copied!';
    btn.style.background = 'var(--success)';
    btn.style.color = 'white';
    setTimeout(function() {
      btn.textContent = orig;
      btn.style.background = '';
      btn.style.color = '';
    }, 2000);
  });
}

function showStatus(el, type, msg) {
  el.className = 'status-msg ' + type;
  var icons = { success: '✅', error: '❌', info: 'ℹ️' };
  el.innerHTML = (icons[type] || '') + ' ' + msg;
  el.style.display = 'flex';
  if (type === 'success') setTimeout(function() { el.style.display = 'none'; }, 4000);
}

function formatSize(bytes) {
  if (bytes < 1024)        return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

function checkFileSize(file, maxMB) {
  maxMB = maxMB || 20;
  if (file.size > maxMB * 1024 * 1024) {
    alert('File too large. Max ' + maxMB + 'MB allowed.');
    return false;
  }
  return true;
}

function initDragDrop(zone, onFiles) {
  zone.addEventListener('dragover', function(e) { e.preventDefault(); zone.classList.add('dragover'); });
  zone.addEventListener('dragleave', function() { zone.classList.remove('dragover'); });
  zone.addEventListener('drop', function(e) {
    e.preventDefault();
    zone.classList.remove('dragover');
    if (e.dataTransfer.files.length) onFiles(e.dataTransfer.files);
  });
}

function downloadCanvas(canvas, filename) {
  var link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

function downloadBlob(blob, filename) {
  var url  = URL.createObjectURL(blob);
  var link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(function() { URL.revokeObjectURL(url); }, 5000);
}

/* ─────────────────────────────────────────────────────────────
   INIT
   ───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  initSearch();
  initHeroSearch();
  initHamburger();
  initFAQ();
});
