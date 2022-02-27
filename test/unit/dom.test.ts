import { createElement, createFragment } from '../../src'

test('for single DOM element', () => {
    const actual = createElement('div', null)
    const expected = document.createElement('div')
    expect(actual).toStrictEqual(expected)
})

test('for single DOM element with text', () => {
    const actual = createElement('div', null, 'Hello, World!')
    const expected = document.createElement('div')
    expected.textContent = 'Hello, World!'
    expect(actual).toStrictEqual(expected)
})

test('for nested DOM elements', () => {
    const actual = createElement('div', null, createElement('span', null))
    const expected = document.createElement('div')
    expected.innerHTML = '<span></span>'
    expect(actual).toStrictEqual(expected)
})

test('for nested DOM element with text', () => {
    const actual = createElement('div', null, 'Hello ', createElement('span', null, 'from a span'))
    const expected = document.createElement('div')
    expected.innerHTML = 'Hello <span>from a span</span>'
    expect(actual).toStrictEqual(expected)
})

test('for single JSX element', () => {
    // Mimick a custom component foo written as <Foo/> in jsx
    const Foo = () => createElement('div', null)
    const actual = createElement(Foo, null)
    const expected = document.createElement('div')
    expect(actual).toStrictEqual(expected)
})

test('for single JSX element with text', () => {
    // Mimick a custom component foo written as <Foo/> in jsx
    const Foo = () => createElement('div', null, 'Hello, World!')
    const actual = createElement(Foo, null)
    const expected = document.createElement('div')
    expected.textContent = 'Hello, World!'
    expect(actual).toStrictEqual(expected)
})

test('for nested JSX elements', () => {
    // Mimick a custom component foo written as <Foo/> in jsx
    const Foo = () => createElement('div', null)
    const actual = createElement('div', null, createElement(Foo, null))
    const expected = document.createElement('div')
    expected.innerHTML = '<div></div>'
    expect(actual).toStrictEqual(expected)
})

test('for nested JSX elements with text', () => {
    // Mimick a custom component foo written as <Foo/> in jsx
    const Foo = () => createElement('div', null, 'Child')
    // Mimick passing Foo as child of a div like so: <div><Foo/></div>
    const actual = createElement('div', null, 'Parent', createElement(Foo, null))
    const expected = document.createElement('div')
    expected.innerHTML = 'Parent<div>Child</div>'
    expect(actual).toStrictEqual(expected)
})

test('for single JSX fragment', () => {
    const actual_fragment = createFragment(null)
    const actual = createElement(actual_fragment, null)
    const expected = createElement('div', null)
    expect(actual).toStrictEqual(expected)
})