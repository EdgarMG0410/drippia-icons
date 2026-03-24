# @drippia/icons-react

React components for drippia Icons.

## Installation

```bash
npm install @drippia/icons-react
# or
pnpm add @drippia/icons-react
# or
yarn add @drippia/icons-react
```

## Usage

```tsx
import { Coffee, GrinderManual, PourOver } from '@drippia/icons-react';

function App() {
  return (
    <div>
      {/* Default size (24px) */}
      <Coffee />
      
      {/* Custom size */}
      <GrinderManual size={32} />
      
      {/* Custom color and stroke width */}
      <PourOver 
        size={48} 
        color="#663399" 
        strokeWidth={1.5} 
      />
      
      {/* With additional SVG props */}
      <Coffee 
        className="my-icon"
        onClick={() => console.log('clicked')}
      />
    </div>
  );
}
```

## Props

All icons accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Icon size (width and height) |
| `color` | `string` | `'currentColor'` | Icon color |
| `strokeWidth` | `number \| string` | `2` | Stroke width |
| `...props` | `SVGProps<SVGSVGElement>` | - | Any valid SVG attributes |

## TypeScript

This package includes TypeScript definitions. Each icon exports its own props interface:

```tsx
import { Coffee, CoffeeProps } from '@drippia/icons-react';

const MyComponent = (props: CoffeeProps) => {
  return <Coffee {...props} />;
};
```

## License

MIT
