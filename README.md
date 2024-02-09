# vsx

Write vanilla JavaScript in JSX.

## Design

- If DOM is computer memory, then element is a variable, element with id is an initialised variable. Once the app is built, element cannot be updated (static view) while element with id can be updated (dynamic variable).
- Component abstracts away document.createElement function calls.
- State is an initialised variable.
- Effect uses MutationObserver API to track changes.

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
    "jsx":"react",
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

## Contributing
- Conventional commits are enforced.
- Pull requests are squashed and merged onto `main` branch.
- Lint your code before commiting your change.
- Add tests whenever possible.

## Inspiration/References

- [JSX Without React](https://blog.stchur.com/jsx-without-react/)
- [WTF is JSX](https://web.archive.org/web/20170918095722/https://jasonformat.com/wtf-is-jsx/)
- [How to Use JSX Without React](https://betterprogramming.pub/how-to-use-jsx-without-react-21d23346e5dc)

## Contributing

To open a bug report or to add a feature request, open a PR and edit `Roadmap` in README.md. Once that bug is resolved/feature is implemented, it will be moved to the CHANGELOG.md.

## Roadmap

Design:

-Abstract out boilerplate not complexity. If the complexity is changed, people have to change their mental model of how it works.
- Provide better developer experience such as throw errors when common mistakes have been made. For example: throw error when props have been added to a fragment (since the fragment is removed after transpiling.
- Maybe throw an error or display warnings if components are missing certain accessibility features/standards.
- No virtual DOM so its performance depends on the browser's performance.

### Bugs

### Features

- [x] createElement
- [x] createFragment
- [x] createState
- [x] createEffect
- [ ] createRouter
- [ ] Use `Proxy` for `State` object to allow React like state changes
- [ ] Pass special `children` prop into components
- [ ] Add support for arrays

### Chores

- [ ] Add end to end testing
- [ ] Explore tagged templates
- [ ] Add moretemplates/examples
- [ ] Move releases information to `CHANGELOG.md`

## License

[MIT](https://github.com/ayushmxn/vsx/blob/main/.github/LICENSE)
