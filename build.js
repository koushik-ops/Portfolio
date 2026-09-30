const fs = require('fs');
const path = require('path');

function build() {
  if (!fs.existsSync('template.html')) {
    console.error('template.html not found!');
    return;
  }

  let template = fs.readFileSync('template.html', 'utf8');

  // Replace all <!-- INCLUDE:filePath -->
  template = template.replace(/<!--\s*INCLUDE:([^\s]+)\s*-->/g, (match, relPath) => {
    const fullPath = path.join(__dirname, relPath);
    if (fs.existsSync(fullPath)) {
      return fs.readFileSync(fullPath, 'utf8');
    } else {
      console.warn(`Warning: Included file not found: ${relPath}`);
      return match;
    }
  });

  fs.writeFileSync('index.html', template, 'utf8');
  console.log(`[${new Date().toLocaleTimeString()}] Successfully compiled index.html from sections/`);
}

module.exports = { build };

if (require.main === module) {
  build();
}
