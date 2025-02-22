const fs = require('fs');
const path = require('path');

// Function to normalize image paths
function normalizeImagePath(imagePath) {
  return imagePath.toLowerCase().replace(/\s+/g, '-');
}

// Get all files in public directory
const publicDir = path.join(process.cwd(), 'public');
const files = fs.readdirSync(publicDir);

// Process each file
files.forEach(file => {
  if (file.match(/\.(jpg|jpeg|png|gif|svg)$/i)) {
    const oldPath = path.join(publicDir, file);
    const newPath = path.join(publicDir, normalizeImagePath(file));
    
    if (oldPath !== newPath) {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${file} -> ${normalizeImagePath(file)}`);
    }
  }
}); 