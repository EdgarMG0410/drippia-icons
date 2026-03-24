const fs = require('fs');
const path = require('path');

const dirsToClean = [
  path.join(__dirname, '../packages/react/src/icons'),
  path.join(__dirname, '../packages/flutter/assets/icons'),
];

const filesToClean = [
  path.join(__dirname, '../packages/react/src/index.ts'),
  path.join(__dirname, '../packages/flutter/lib/drippia_icons.dart'),
];

console.log('🧹 Cleaning build artifacts...\n');

dirsToClean.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`  ✓ Removed ${path.relative(process.cwd(), dir)}`);
  }
});

filesToClean.forEach(file => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`  ✓ Removed ${path.relative(process.cwd(), file)}`);
  }
});

console.log('\n✅ Clean completed');
