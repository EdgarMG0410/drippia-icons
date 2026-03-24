# ☕ Digibite Icons

Beautiful & consistent icon toolkit for coffee and beverage applications.

## 🎯 Features

- **Single Source of Truth**: All icons are SVG-based
- **Multi-Platform**: Automatic generation for React and Flutter
- **Consistent Design**: Strict design rules ensure visual harmony
- **24x24 Grid**: Optimized for clarity at any size
- **Customizable**: Uses `currentColor` for easy theming

## 📦 Packages

### React

```bash
npm install @digibite/icons-react
# or
pnpm add @digibite/icons-react
```

```tsx
import { Coffee, GrinderManual, PourOver } from '@digibite/icons-react';

function App() {
  return (
    <div>
      <Coffee size={24} color="currentColor" />
      <GrinderManual size={32} />
      <PourOver size={48} strokeWidth={1.5} />
    </div>
  );
}
```

### Flutter

```yaml
dependencies:
  digibite_icons: ^0.1.0
```

```dart
import 'package:digibite_icons/digibite_icons.dart';
import 'package:flutter_svg/flutter_svg.dart';

SvgPicture.asset(
  DigibiteIcons.coffee,
  width: 24,
  height: 24,
  colorFilter: ColorFilter.mode(Colors.black, BlendMode.srcIn),
);
```

## 🎨 Design Rules

All icons follow strict guidelines:

- **Size**: 24x24px
- **ViewBox**: `0 0 24 24`
- **Stroke**: `currentColor`, width `2`
- **Style**: `stroke-linecap="round"`, `stroke-linejoin="round"`
- **Fill**: `none` (unless absolutely necessary)

## 🚀 Development

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Setup

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Build specific package
pnpm build:react
pnpm build:flutter
```

### Adding New Icons

1. Create SVG file in `/icons` directory (kebab-case naming)
2. Ensure it follows design rules
3. Run `pnpm build`
4. Generated components appear in respective packages

## 📁 Project Structure

```
digibite-icons/
├── icons/                  # Source SVG files
├── scripts/                # Build scripts
├── packages/
│   ├── react/             # React package
│   └── flutter/           # Flutter package
└── digibite_icons_development_rules.md
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details

## 🙏 Credits

Inspired by [Lucide Icons](https://lucide.dev) architecture.

---

Made with ☕ by Digibite
