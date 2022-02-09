# Transform JSX

Transform JSX into Vanilla Javascript.

## Getting Started

Install using your package manager:
- `npm install transform-jsx`
- `yarn add transform-jsx`
- `pnpm add transform-jsx`

## Usage

### Using TypeScript:

Add these options in your `tsconfig`

```json
    "jsx":"preserve",
    "jsxFactory": "createElement",
```

Import the `createElement` function wherever you're using JSX:
```javascript
import { createElement } from 'transform'
```

## License

MIT