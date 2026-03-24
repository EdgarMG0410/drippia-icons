const { execSync } = require('child_process');

console.log('🚀 Building drippia Icons...\n');

try {
  console.log('📦 Building React package...');
  execSync('node scripts/buildReact.js', { stdio: 'inherit' });
  
  console.log('\n📦 Building Flutter package...');
  execSync('node scripts/buildFlutter.js', { stdio: 'inherit' });
  
  console.log('\n✅ Build completed successfully!');
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
