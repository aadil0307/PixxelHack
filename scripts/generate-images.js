const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate SVG images with different colors and patterns
const generateSVG = (id, colors, pattern) => {
  const [color1, color2, color3] = colors;
  return `<svg width="600" height="600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad${id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
        <stop offset="50%" style="stop-color:${color2};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${color3};stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#grad${id})"/>
    ${pattern}
  </svg>`;
};

const imageConfigs = [
  {
    name: 'nft-1',
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
    pattern: '<circle cx="300" cy="300" r="150" fill="rgba(255,255,255,0.1)"/>'
  },
  {
    name: 'nft-2', 
    colors: ['#A8E6CF', '#DCEDC1', '#FFD3B6'],
    pattern: '<rect x="200" y="200" width="200" height="200" fill="rgba(255,255,255,0.2)"/>'
  },
  {
    name: 'nft-3',
    colors: ['#FF9A9E', '#FECFEF', '#FECFEF'],
    pattern: '<polygon points="300,150 450,350 150,350" fill="rgba(255,255,255,0.15)"/>'
  },
  {
    name: 'nft-4',
    colors: ['#667eea', '#764ba2', '#f093fb'],
    pattern: '<circle cx="200" cy="200" r="80" fill="rgba(255,255,255,0.1)"/><circle cx="400" cy="400" r="80" fill="rgba(255,255,255,0.1)"/>'
  },
  {
    name: 'nft-5',
    colors: ['#f093fb', '#f5576c', '#4facfe'],
    pattern: '<rect x="150" y="150" width="300" height="300" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="4"/>'
  },
  {
    name: 'nft-6',
    colors: ['#4facfe', '#00f2fe', '#43e97b'],
    pattern: '<polygon points="300,100 400,300 200,300" fill="rgba(255,255,255,0.2)"/>'
  },
  {
    name: 'exclusive-1',
    colors: ['#FFD700', '#FFA500', '#FF6347'],
    pattern: '<circle cx="300" cy="300" r="200" fill="rgba(255,255,255,0.1)"/>'
  },
  {
    name: 'exclusive-2',
    colors: ['#8A2BE2', '#9370DB', '#BA55D3'],
    pattern: '<rect x="100" y="100" width="400" height="400" fill="rgba(255,255,255,0.15)"/>'
  },
  {
    name: 'exclusive-3',
    colors: ['#00CED1', '#20B2AA', '#48D1CC'],
    pattern: '<polygon points="300,150 450,250 300,350 150,250" fill="rgba(255,255,255,0.2)"/>'
  },
  {
    name: 'artist-1',
    colors: ['#FF6B9D', '#C44569', '#F38181'],
    pattern: '<circle cx="300" cy="300" r="120" fill="rgba(255,255,255,0.1)"/>'
  },
  {
    name: 'artist-2',
    colors: ['#A8E6CF', '#DCEDC1', '#FFD3B6'],
    pattern: '<rect x="200" y="200" width="200" height="200" fill="rgba(255,255,255,0.2)"/>'
  },
  {
    name: 'artist-3',
    colors: ['#667eea', '#764ba2', '#f093fb'],
    pattern: '<polygon points="300,150 450,350 150,350" fill="rgba(255,255,255,0.15)"/>'
  },
  {
    name: 'artist-4',
    colors: ['#4facfe', '#00f2fe', '#43e97b'],
    pattern: '<circle cx="200" cy="200" r="80" fill="rgba(255,255,255,0.1)"/><circle cx="400" cy="400" r="80" fill="rgba(255,255,255,0.1)"/>'
  },
  // Additional images for more variety
  {
    name: 'hero-bg-1',
    colors: ['#FF6B6B', '#FF8E53', '#FFB347'],
    pattern: '<circle cx="300" cy="300" r="180" fill="rgba(255,255,255,0.08)"/>'
  },
  {
    name: 'hero-bg-2',
    colors: ['#667eea', '#764ba2', '#f093fb'],
    pattern: '<rect x="150" y="150" width="300" height="300" fill="rgba(255,255,255,0.12)"/>'
  },
  {
    name: 'hero-bg-3',
    colors: ['#4facfe', '#00f2fe', '#43e97b'],
    pattern: '<polygon points="300,120 420,280 180,280" fill="rgba(255,255,255,0.1)"/>'
  },
  {
    name: 'hero-bg-4',
    colors: ['#FF9A9E', '#FECFEF', '#FECFEF'],
    pattern: '<circle cx="250" cy="250" r="100" fill="rgba(255,255,255,0.15)"/><circle cx="350" cy="350" r="100" fill="rgba(255,255,255,0.15)"/>'
  },
  {
    name: 'hero-bg-5',
    colors: ['#A8E6CF', '#DCEDC1', '#FFD3B6'],
    pattern: '<rect x="200" y="200" width="200" height="200" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="3"/>'
  },
  {
    name: 'hero-bg-6',
    colors: ['#f093fb', '#f5576c', '#4facfe'],
    pattern: '<polygon points="300,100 400,200 300,300 200,200" fill="rgba(255,255,255,0.18)"/>'
  }
];

// Generate gallery images
for (let i = 1; i <= 12; i++) {
  const colors = [
    `hsl(${Math.random() * 360}, 70%, 60%)`,
    `hsl(${Math.random() * 360}, 70%, 60%)`,
    `hsl(${Math.random() * 360}, 70%, 60%)`
  ];
  const pattern = `<circle cx="${300 + Math.random() * 100}" cy="${300 + Math.random() * 100}" r="${50 + Math.random() * 100}" fill="rgba(255,255,255,0.2)"/>`;
  
  const svg = generateSVG(`gallery-${i}`, colors, pattern);
  fs.writeFileSync(path.join(imagesDir, `gallery-${i}.svg`), svg);
}

// Generate configured images
imageConfigs.forEach((config, index) => {
  const svg = generateSVG(index, config.colors, config.pattern);
  fs.writeFileSync(path.join(imagesDir, `${config.name}.svg`), svg);
});

console.log('Generated all images successfully!'); 