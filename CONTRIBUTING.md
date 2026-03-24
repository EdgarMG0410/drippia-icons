# Contributing to Digibite Icons

Thank you for your interest in contributing! 🎉

## 🎨 Design Guidelines

All icons MUST follow these strict rules:

### Technical Requirements

- **Size**: 24x24px
- **ViewBox**: `0 0 24 24`
- **Fill**: `none`
- **Stroke**: `currentColor`
- **Stroke Width**: `2`
- **Stroke Linecap**: `round`
- **Stroke Linejoin**: `round`

### Design Principles

1. **Simplicity**: Use the minimum number of paths
2. **Clarity**: Must be legible at small sizes
3. **Consistency**: Match the visual style of existing icons
4. **Reusability**: Think about common shapes

## 📝 Adding a New Icon

### 1. Create the SVG

Create your icon in `/icons` directory with kebab-case naming:

```
icons/
  coffee-grinder.svg
  pour-over.svg
```

### 2. SVG Template

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <!-- Your paths here -->
</svg>
```

### 3. Validate

Before committing:

- ✅ Opens correctly in browser
- ✅ Looks good at 24x24
- ✅ Consistent stroke width
- ✅ No unnecessary metadata
- ✅ No hardcoded colors
- ✅ Uses `currentColor`

### 4. Build

```bash
pnpm build
```

This generates React and Flutter components automatically.

### 5. Test

Check generated files:

- `packages/react/src/icons/YourIcon.tsx`
- `packages/flutter/assets/icons/your-icon.svg`

## 🚫 Common Mistakes

- ❌ Exporting with fills instead of strokes
- ❌ Not cleaning SVG metadata
- ❌ Different stroke widths
- ❌ Overly complex paths
- ❌ Hardcoded colors

## 🔍 Review Process

1. Submit PR with your icon
2. Automated checks run
3. Visual review by maintainers
4. Merge if approved

## 💡 Tips

- Use Figma/Illustrator stroke mode
- Export as SVG with minimal settings
- Run through SVGO or similar optimizer
- Test at different sizes

## 📞 Questions?

Open an issue or discussion on GitHub.

---

Thank you for helping make Digibite Icons better! ☕
