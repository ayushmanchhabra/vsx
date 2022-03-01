# Transform JSX

Write reactive vanilla JavaScript in JSX.

## Installation

Using npm:
```javascript
npm install transform-jsx
```

Using yarn:
```javascript
yarn add transform-jsx
```

Using pnpm:
```javascript
pnpm add transform-jsx
```

Using unpkg CDN:
```html
<script src="https://unpkg.com/transform-jsx@0.2.1/dist/index.js">
```

Using jsDelivr CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/transform-jsx@0.2.1/dist/index.min.js"></script>
```

> Caveat: By using a CDN, you can't write JSX although it's still better than writing regular JavaScript IMO.

## Usage

With TypeScript, add these options in your `tsconfig`

```json
    "jsx":"preserve",
    "jsxFactory": "createElement",
    "jsxFragmentFactory": "createFragment",
```

Here's an example of a counter:

```javascript
import { createElement, createFragment, createState } from 'transform-jsx'

const Counter = () => {
    const [count, setCount] = createState(0)

    return (
        <>
            <button
                onClick={() => setCount(count().value - 1 )}
            >
                -
            </button>
            <span
                id={count().key}
            >
                {count().value}
            </span>
            <button
                onClick={() => setCount(count().value + 1 )}
            >
                +
            </button>
        </>
    )
}

```

## API Reference

`createElement(tag: string | (() => Node), props: { [key: string]: any } | null, ...children: Array<string | Node>): Node`

It is applied to every HTML and JSX element via the runtime of your choice.

`createFragment(props: { [key: string]: any } | null, ...children: Array<string | Node>): Array<string | Node>`

It is applied to every JSX fragment via the runtime of your choice.

`createState(initialValue: Data): [get(): State, set(updatedValue: Data): void]`

A hook function to manage DOM elements' state.

`Data: null | number | string | boolean | Data[]`

It represents a state variable's value with it's type information.

`State: { key: string: typedValue?: Data}`

Type definition of a state variable.

## Contributing

- Open an issue before submitting a pull request.
- PRs should have short descriptive titles. For example:
    - fix(docs): fix typo in `createElement` description
    - feat(state): add support for arrays
- Ensure PRs reference a related issue
- Ensure there are tests that cover your changes

## Inspiration/References

- [JSX Without React](https://blog.stchur.com/jsx-without-react/)
- [WTF is JSX](https://web.archive.org/web/20170918095722/https://jasonformat.com/wtf-is-jsx/)
- [How to Use JSX Without React](https://betterprogramming.pub/how-to-use-jsx-without-react-21d23346e5dc)

## License

MIT