const http = require('http');
const fs = require('fs');
const path = require('path');
const { build } = require('./build');

const PORT = 3000;

// Initial build on startup
build();

// Watch sections and template.html for changes
if (fs.existsSync('sections')) {
  fs.watch('sections', { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.html')) {
      console.log(`[Watch] Detected change in sections/${filename}, rebuilding...`);
      build();
    }
  });
}
if (fs.existsSync('template.html')) {
  fs.watch('template.html', () => {
    console.log('[Watch] Detected change in template.html, rebuilding...');
    build();
  });
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0];
  try {
    cleanUrl = decodeURIComponent(cleanUrl);
  } catch (e) {}
  if (cleanUrl === '/' || cleanUrl === '/en' || cleanUrl === '/index.html') {
    cleanUrl = '/index.html';
    // Always build fresh from sections/ on every page reload
    build();
  }

  let filePath = path.join(__dirname, cleanUrl);

  if (!fs.existsSync(filePath)) {
    const baseName = path.basename(filePath).toLowerCase();
    const dir = path.dirname(filePath);
    if (fs.existsSync(dir)) {
      try {
        const files = fs.readdirSync(dir);
        const match = files.find(f => f.toLowerCase() === baseName);
        if (match) filePath = path.join(dir, match);
      } catch (e) {}
    }
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });

    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n========================================`);
  console.log(`🚀 Portfolio Dev Server Running!`);
  console.log(`👉 http://localhost:${PORT}/`);
  console.log(`Watching /sections/ and rebuilding automatically!`);
  console.log(`========================================\n`);
});
