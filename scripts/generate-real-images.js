const fs = require('fs');
const path = require('path');
const https = require('https');

// Create real-images directory if it doesn't exist
const realImagesDir = path.join(__dirname, '../public/real-images');
if (!fs.existsSync(realImagesDir)) {
  fs.mkdirSync(realImagesDir, { recursive: true });
}

// Function to download image
const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {}); // Delete the file async
      reject(err);
    });
  });
};

// Generate realistic NFT and art images
const generateRealImages = async () => {
  const images = [
    // NFT Images - Abstract and Digital Art
    { name: 'nft-real-1', url: 'https://picsum.photos/600/600?random=1', category: 'Abstract' },
    { name: 'nft-real-2', url: 'https://picsum.photos/600/600?random=2', category: 'Digital' },
    { name: 'nft-real-3', url: 'https://picsum.photos/600/600?random=3', category: 'Modern' },
    { name: 'nft-real-4', url: 'https://picsum.photos/600/600?random=4', category: 'Contemporary' },
    { name: 'nft-real-5', url: 'https://picsum.photos/600/600?random=5', category: 'Minimalist' },
    { name: 'nft-real-6', url: 'https://picsum.photos/600/600?random=6', category: 'Expressionist' },
    
    // Gallery Images - Various Art Styles
    { name: 'gallery-real-1', url: 'https://picsum.photos/600/600?random=7', category: 'Portrait' },
    { name: 'gallery-real-2', url: 'https://picsum.photos/600/600?random=8', category: 'Landscape' },
    { name: 'gallery-real-3', url: 'https://picsum.photos/600/600?random=9', category: 'Still Life' },
    { name: 'gallery-real-4', url: 'https://picsum.photos/600/600?random=10', category: 'Abstract' },
    { name: 'gallery-real-5', url: 'https://picsum.photos/600/600?random=11', category: 'Modern' },
    { name: 'gallery-real-6', url: 'https://picsum.photos/600/600?random=12', category: 'Contemporary' },
    
    // Artist Profile Images
    { name: 'artist-real-1', url: 'https://picsum.photos/400/400?random=13', category: 'Portrait' },
    { name: 'artist-real-2', url: 'https://picsum.photos/400/400?random=14', category: 'Portrait' },
    { name: 'artist-real-3', url: 'https://picsum.photos/400/400?random=15', category: 'Portrait' },
    { name: 'artist-real-4', url: 'https://picsum.photos/400/400?random=16', category: 'Portrait' },
    
    // Hero Background Images
    { name: 'hero-real-1', url: 'https://picsum.photos/1200/800?random=17', category: 'Background' },
    { name: 'hero-real-2', url: 'https://picsum.photos/1200/800?random=18', category: 'Background' },
    { name: 'hero-real-3', url: 'https://picsum.photos/1200/800?random=19', category: 'Background' },
    
    // Exclusive Drops
    { name: 'exclusive-real-1', url: 'https://picsum.photos/600/600?random=20', category: 'Exclusive' },
    { name: 'exclusive-real-2', url: 'https://picsum.photos/600/600?random=21', category: 'Exclusive' },
    { name: 'exclusive-real-3', url: 'https://picsum.photos/600/600?random=22', category: 'Exclusive' },
  ];

  console.log('Downloading real images...');
  
  for (const image of images) {
    const filename = path.join(realImagesDir, `${image.name}.jpg`);
    try {
      await downloadImage(image.url, filename);
      console.log(`✅ Downloaded: ${image.name}.jpg`);
    } catch (error) {
      console.log(`❌ Failed to download: ${image.name}.jpg`);
    }
  }
  
  console.log('Real images generation completed!');
};

generateRealImages().catch(console.error); 