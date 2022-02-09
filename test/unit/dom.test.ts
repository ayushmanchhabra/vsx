import { createElement } from '../../src'

test('for single DOM element', () => {

    const actual = createElement('div', null, null)
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
    const actual = createElement('div', null, createElement('span', {}))
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

test('for nested JSX element with text', () => {
    const actual = createElement('div', null, 'Parent', createElement('div', null, 'Child'))
    const expected = document.createElement('div')
    expected.innerHTML = 'Parent<div>Child</div>'
    expect(actual).toStrictEqual(expected)
})