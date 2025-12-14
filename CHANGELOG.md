# Changelog

## [0.6.0](https://github.com/ayushmanchhabra/vsx/compare/v0.5.0...v0.6.0) (2022-08-27)

Pass `State` function into `createEffect` and `createElement`.

## [0.5.0](https://github.com/ayushmanchhabra/vsx/compare/v0.4.0...v0.5.0) (2022-06-17)

The `createEffect` function is a way to manage side effects. It uses the `MutationObserver` API internally. The dependency array accepts a string of `id`s corresponding to their DOM element(s).

If the dependency array is empty, the callback runs only once (since the app is rendered only once).

```javascript
createEffect(() => {
  console.log("Hello, World!");
}, [])
```

If the dependency array is not empty, the callback runs every time there is a change in a corresponding element or child of an element.

```javascript

...

const [count, setCount] = createState(0);

createEffect(() => {
  console.log("Update value of count: ", count().value);
}, [count().key])

...

```

## [0.4.0](https://github.com/ayushmanchhabra/vsx/compare/v0.3.2...v0.4.0) (2022-06-14)

Renamed package to `vsx` and changed imports.

```javascript
// Before v0.4.0
import { createElement, createFragment, createState } from "transform-jsx";

// After v0.4.0
import VSX, { createState } from "vsx";
```

Don't forget to change the `jsxFactory` to `VSX.createElement` and `jsxFragmentFactory` to `VSX.createFragment`.

## [0.3.2](https://github.com/ayushmanchhabra/vsx/compare/v0.3.0...v0.3.2) (2022-03-04)

Upload `/dist` directory to npm.

## [0.3.0](https://github.com/ayushmanchhabra/vsx/compare/v0.2.1...v0.3.0) (2022-03-01)

Add `createFragment` which returns a [DocumentFragment](https://mariusschulz.com/blog/jsx-fragment-syntax-in-typescript). The package is now ESM first. Here's a really good and concise explanation of why the JSX fragment is useful:

## [0.2.1](https://github.com/ayushmanchhabra/vsx/compare/v0.1.1...v0.2.1) (2022-02-21)

The `createState` function manages state changes to DOM nodes. Here's an example of a counter:

```javascript

import { createElement, createState } from 'transform-jsx'

const Counter = () => {
    let [count, setCount] = createState(0)

    return (
        <div>
            <button onClick={() => setCount(count().value as number - 1)}>-</button>
            <span id={count().key}>{count().value}</span>
            <button onClick={() => setCount(count().value as number + 1)}>+</button>
        </div>
    )
}

```
A unique `key` is generated and attached to the `id`. This `id` is referenced by `setCount` when making a state change. If a state change is made and the value is not attached to a DOM element then an error is thrown.

TL;DR: `createState` is one massive sugar function. Instead of doing
```javascript
const element = document.getElementById('some-random-id');
element.innerText = 'some value';
```
We're using the familiar getter setter value pattern/paradigm.

Also added support for JSS.

## [0.1.1](https://github.com/ayushmanchhabra/vsx/compare/v0.0.0...v0.1.1) (2022-02-16)

User defined JSX components are now also treated as JSX in comparison to just functions. This is possible because the `createElement`  function argument `tag` is now a string or function type. Every time `tag` is a function type, the function that is the user defined component with the `createElement` applied is called (basically syntactic sugar).

 Here's an example:

Before, a user defined JSX component would be treated as a function and called like so:

```javascript
const A = () => <div>A</div>

const B = () => {
    return
    (
        <div>
            {A()}
        </div>
    )
}
```

Now, the user defined JSX component is treated like a JSX element but is called like function via `createElement`.

```javascript
const A = () => <div>A</div>

const B = () => {
    return
    (
        <div>
            <A />
        </div>
    )
}
```

To clarify, the component can be called via a function call.

## [0.1.0](https://github.com/ayushmanchhabra/vsx/compare/v0.0.0...v0.1.0) (2022-02-10)

The `createElement` function transforms JSX elements into DOM elements. In the demo (under `/test/demo`), the TypeScript compiler had been used but this is also possible using Babel.

Currently, nested `HTML` and `JSX` elements can be written with support for event attributes. One difference is that custom components are called a bit differently. Here's an example:

```javascript
const A = () => <div>A</div>

const B = () => {
    return
    (
        <div>
            {A()}
        </div>
    )
}
```

This atypical syntax is because A is just a pure function which returns an HTML element.

The next few releases will be focused on improving the JSX template system after which the focus will be on styling and reactivity.
