const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '../icons');
const FLUTTER_ASSETS_DIR = path.join(__dirname, '../packages/flutter/assets/icons');
const FLUTTER_LIB_FILE = path.join(__dirname, '../packages/flutter/lib/drippia_icons.dart');

function toSnakeCase(str) {
  return str.replace(/-/g, '_');
}

function buildFlutterPackage() {
  console.log('🔨 Building Flutter package...\n');
  
  if (!fs.existsSync(FLUTTER_ASSETS_DIR)) {
    fs.mkdirSync(FLUTTER_ASSETS_DIR, { recursive: true });
  }
  
  const iconFiles = fs.readdirSync(ICONS_DIR).filter(file => file.endsWith('.svg'));
  const iconPaths = [];
  
  iconFiles.forEach(file => {
    const sourcePath = path.join(ICONS_DIR, file);
    const destPath = path.join(FLUTTER_ASSETS_DIR, file);
    
    fs.copyFileSync(sourcePath, destPath);
    
    const iconName = path.basename(file, '.svg');
    const constantName = toSnakeCase(iconName);
    iconPaths.push(`  static const String ${constantName} = 'packages/drippia_icons/assets/icons/${file}';`);
    
    console.log(`  ✓ ${file}`);
  });
  
  const dartContent = `/// drippia Icons - Beautiful & consistent icon toolkit
///
/// Usage:
/// \`\`\`dart
/// import 'package:flutter_svg/flutter_svg.dart';
/// import 'package:drippia_icons/drippia_icons.dart';
///
/// SvgPicture.asset(
///   drippiaIcons.coffee,
///   width: 24,
///   height: 24,
/// );
/// \`\`\`
class drippiaIcons {
${iconPaths.join('\n')}
}
`;
  
  const libDir = path.dirname(FLUTTER_LIB_FILE);
  if (!fs.existsSync(libDir)) {
    fs.mkdirSync(libDir, { recursive: true });
  }
  
  fs.writeFileSync(FLUTTER_LIB_FILE, dartContent);
  
  console.log(`\n✅ Generated Flutter package with ${iconFiles.length} icons`);
}

buildFlutterPackage();
