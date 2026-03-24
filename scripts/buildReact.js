const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '../icons');
const OUTPUT_DIR = path.join(__dirname, '../packages/react/src/icons');
const INDEX_FILE = path.join(__dirname, '../packages/react/src/index.ts');

function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function generateReactComponent(iconName, svgContent) {
  const componentName = toPascalCase(iconName);
  
  const pathsMatch = svgContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  const innerContent = pathsMatch ? pathsMatch[1].trim() : '';
  
  return `import React from 'react';

export interface ${componentName}Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

export const ${componentName} = React.forwardRef<SVGSVGElement, ${componentName}Props>(
  ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      ${innerContent}
    </svg>
  )
);

${componentName}.displayName = '${componentName}';
`;
}

function buildReactPackage() {
  console.log('🔨 Building React components...\n');
  
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  const iconFiles = fs.readdirSync(ICONS_DIR).filter(file => file.endsWith('.svg'));
  const exports = [];
  
  iconFiles.forEach(file => {
    const iconName = path.basename(file, '.svg');
    const componentName = toPascalCase(iconName);
    const svgContent = fs.readFileSync(path.join(ICONS_DIR, file), 'utf-8');
    
    const componentCode = generateReactComponent(iconName, svgContent);
    const outputPath = path.join(OUTPUT_DIR, `${componentName}.tsx`);
    
    fs.writeFileSync(outputPath, componentCode);
    exports.push(`export { ${componentName} } from './icons/${componentName}';`);
    exports.push(`export type { ${componentName}Props } from './icons/${componentName}';`);
    
    console.log(`  ✓ ${componentName}.tsx`);
  });
  
  const indexContent = exports.join('\n') + '\n';
  fs.writeFileSync(INDEX_FILE, indexContent);
  
  console.log(`\n✅ Generated ${iconFiles.length} React components`);
}

buildReactPackage();
