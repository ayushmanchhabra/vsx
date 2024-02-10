# vsx

Write vanilla JavaScript in JSX.

## Getting Started

1. Install via your preferred node modules manager or CDN.
1. With TypeScript, add these options in your `tsconfig`

```json
    "jsx":"react",
    "jsxFactory": "VSX.createElement",
    "jsxFragmentFactory": "VSX.createFragment",
```
1. The [demo app](https://github.com/ayushmanchhabra/vsx/tree/main/test/demo) uses `esbuild` to transpile from VSX to JavaScript. More examples coming soon!

## Design

If you think of [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) as computer memory, then an [element](https://developer.mozilla.org/en-US/docs/Web/API/element) is a variable. To update a variable (element), you access it via a pointer ([id](https://developer.mozilla.org/en-US/docs/Web/API/Element/id) property). This is called [state](https://legacy.reactjs.org/docs/react-component.html#state). State refers to an element with a unique `id`. Elements without `id` are regular XML markup.

```javascript
const [count, setCount] = createState(0);
```

Since there is no virtual DOM or proxy magic, `count` needs to be inserted in the markup so that a unique `id` can be generated which is referenced by `setCount` function.

```javascript
<>
  <button onClick={setCount(count().value - 1)}>-</button>
  <div>{count}</div>
  <button onClick={setCount(count().value + 1)}>+</button>
</>
```

A component is a way to write markup such that it abstracts away the `document.createElement` function calls.

An effect tracks changes to certain elements via the [MutationObserver API](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). Effects should be used to make calls to external systems such as `window.localStorage` or network requests.

Here's the complete example of a counter:

```javascript
import VSX, { createEffect, createState } from "vsx";

const Counter = () => {
    const [count, setCount] = createState(0);

    createEffect(() => {
        localStorage.setItem("count", count);
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
- [Virtual DOM is pure overhead](https://svelte.dev/blog/virtual-dom-is-pure-overhead)
- [Components are pure overhead](https://dev.to/this-is-learning/components-are-pure-overhead-hpm)

## Contributing

To open a bug report or to add a feature request, open a PR and edit `Roadmap` in README.md. Once that bug is resolved/feature is implemented, it will be moved to the CHANGELOG.md.

## Roadmap

- Abstract out boilerplate not complexity. If the complexity is changed, people have to change their mental model of how it works.
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
- [ ] Add more templates/examples
- [ ] Move releases information to `CHANGELOG.md`

## License

[MIT](https://github.com/ayushmxn/vsx/blob/main/.github/LICENSE)
