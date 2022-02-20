# Transform JSX

Transform JSX into Vanilla Javascript.

## Getting Started

Install using your package manager:
- `npm install transform-jsx`
- `yarn add transform-jsx`
- `pnpm add transform-jsx`

## Usage

With TypeScript, add these options in your `tsconfig`

```json
    "jsx":"preserve",
    "jsxFactory": "createElement",
```

Import the `createElement` function at the top of every file you're using JSX:
```javascript
import { createElement } from 'transform-jsx'
```

## API

`createElement(tag: string | (() => Node), props: { [key: string]: any } | null, ...children: Array<string | Node>): Node`

It is applied to every HTML and JSX element via the runtime of your choice.

`createState(initialValue: Data): [get(): State, set(updatedValue: Data): void]`

A hook function to manage DOM elements' state.

`Data: null | number | string | boolean | Data[]`

It represents a state variable's value with it's type information.

`State: { key: string: typedValue?: Data}`

Type definition of a state variable.

## Inpiration/References

- [JSX Without React](https://blog.stchur.com/jsx-without-react/)
- [WTF is JSX](https://web.archive.org/web/20170918095722/https://jasonformat.com/wtf-is-jsx/)
- [How to Use JSX Without React](https://betterprogramming.pub/how-to-use-jsx-without-react-21d23346e5dc)

## License

MIT