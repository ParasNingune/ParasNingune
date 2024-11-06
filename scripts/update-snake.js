// scripts/update-snake.js

const fs = require('fs');

// Read the generated snake.svg
fs.readFile('dist/snake.svg', 'utf8', (err, data) => {
  if (err) throw err;

  // Replace <rect> with <circle>
  const updatedSvg = data.replace(/<rect/g, '<circle')
                          .replace(/width="(\d+)"/g, 'r="3"') // set radius for circle
                          .replace(/height="(\d+)"/g, '') // remove height for circles
                          .replace(/x="(\d+)"/g, 'cx="$1"') // set center x for circle
                          .replace(/y="(\d+)"/g, 'cy="$1"'); // set center y for circle

  // Write the updated SVG back to file
  fs.writeFile('dist/snake.svg', updatedSvg, 'utf8', (err) => {
    if (err) throw err;
    console.log('SVG updated successfully!');
  });
});
