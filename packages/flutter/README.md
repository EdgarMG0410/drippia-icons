# digibite_icons

Beautiful & consistent icon toolkit for coffee and beverage applications.

## Installation

Add this to your package's `pubspec.yaml` file:

```yaml
dependencies:
  digibite_icons: ^0.1.0
  flutter_svg: ^2.0.0
```

Then run:

```bash
flutter pub get
```

## Usage

```dart
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:digibite_icons/digibite_icons.dart';

class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // Default size (24x24)
        SvgPicture.asset(
          DigibiteIcons.coffee,
          width: 24,
          height: 24,
        ),
        
        // Custom size
        SvgPicture.asset(
          DigibiteIcons.grinder,
          width: 32,
          height: 32,
        ),
        
        // With color
        SvgPicture.asset(
          DigibiteIcons.pour_over,
          width: 48,
          height: 48,
          colorFilter: ColorFilter.mode(
            Colors.blue,
            BlendMode.srcIn,
          ),
        ),
        
        // Using theme color
        SvgPicture.asset(
          DigibiteIcons.v60,
          width: 24,
          height: 24,
          colorFilter: ColorFilter.mode(
            Theme.of(context).iconTheme.color ?? Colors.black,
            BlendMode.srcIn,
          ),
        ),
      ],
    );
  }
}
```

## Available Icons

All icons are accessible through the `DigibiteIcons` class as static constants:

```dart
DigibiteIcons.coffee
DigibiteIcons.grinder
DigibiteIcons.pour_over
DigibiteIcons.french_press
// ... and more
```

## Customization

Since icons use SVG format, you can customize:

- **Size**: Set `width` and `height` properties
- **Color**: Use `colorFilter` with `ColorFilter.mode()`
- **Theme**: Integrate with Flutter's theme system

## Design Specifications

All icons follow these specifications:

- **Size**: 24x24px
- **ViewBox**: 0 0 24 24
- **Stroke**: currentColor, width 2
- **Style**: Round linecap and linejoin
- **Fill**: None (stroke-based)

## License

MIT
