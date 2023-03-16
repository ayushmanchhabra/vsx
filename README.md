# vsx

Write vanilla JavaScript in JSX.

## Installation

Using npm:
```javascript
npm install vsx
```

Using yarn:
```javascript
yarn add vsx
```

Using pnpm:
```javascript
pnpm add vsx
```

Using ESM CDN:
```html
<script src="https://esm.sh/vsx">
```

Using unpkg CDN:
```html
<script src="https://unpkg.com/vsx">
```

Using jsDelivr CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/vsx"></script>
```

> Caveat: By using a CDN, you can't write JSX although it's still better than writing regular JavaScript IMO.

## Usage

With TypeScript, add these options in your `tsconfig`

```json
    "jsx":"preserve",
    "jsxFactory": "VSX.createElement",
    "jsxFragmentFactory": "VSX.createFragment",
```

Here's an example of a counter:

```javascript
import VSX, { createEffect, createState } from "vsx";

const Counter = () => {
    const [count, setCount] = createState(0);

    createEffect(() => {
        console.log("Count", count().value)
    }, [count]);

    return (
        <>
            <button
                onClick={() => setCount(count().value - 1 )}
            >
                -
            </button>
            <span>
                {count}
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

`createEffect(fn: () => void, deps: string[]): void`

A hook function to manage side effects.

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

[MIT](https://github.com/ayushmxn/vsx/blob/main/.github/LICENSE)
