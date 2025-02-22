const fs = require('fs');
const https = require('https');
const path = require('path');

const PLACEHOLDER_URL = 'https://placehold.co';

const images = [
  { path: '/25th-street-logo.jpg', width: 800, height: 200 },
  { path: '/new york dark.jpg', width: 1920, height: 1080 },
  { path: '/russ klinger.jpeg', width: 400, height: 500 },
  { path: '/skyline.svg', width: 1920, height: 200 },
  { path: '/Joel Smile@2x.png', width: 400, height: 500 },
  { path: '/Jos Final@2x.png', width: 400, height: 500 },
  { path: '/Mornington FINAL@2x.png', width: 400, height: 500 },
  { path: '/Hus live good@2x.png', width: 400, height: 500 },
  { path: '/Tom Wild@2x.png', width: 400, height: 500 },
  { path: '/Bill FINAL@2x.png', width: 400, height: 500 },
  { path: '/Jandira wide@2x.png', width: 400, height: 500 },
  { path: '/Ann gesture.png', width: 400, height: 500 },
  { path: '/Bitelli FINAL@2x.png', width: 400, height: 500 },
  { path: '/Henry FINAL.png', width: 400, height: 500 },
  { path: '/Ollie car.png', width: 400, height: 500 },
  { path: '/Linley FINAL 1@2x.png', width: 400, height: 500 },
  { path: '/brooklyn-bridge.jpg', width: 1920, height: 1080 },
  { path: '/band-members.jpg', width: 1920, height: 1080 },
  { path: '/about-image.jpg', width: 800, height: 800 }
];

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => reject(err));
      });
    }).on('error', reject);
  });
}

async function main() {
  const publicDir = path.join(process.cwd(), 'public');
  
  for (const image of images) {
    const { path: imagePath, width, height } = image;
    const url = `${PLACEHOLDER_URL}/${width}x${height}`;
    const filepath = path.join(publicDir, imagePath);
    
    console.log(`Downloading placeholder for ${imagePath}...`);
    try {
      await downloadImage(url, filepath);
      console.log(`✓ Downloaded ${imagePath}`);
    } catch (error) {
      console.error(`✗ Failed to download ${imagePath}:`, error);
    }
  }
}

main().catch(console.error); 