import { createElement, createFragment, createState } from "../../../src"

const Counter = (): HTMLElement => {
    let [count, setCount] = createState(0)
    return (
	    <>
            <button
                onClick={() => setCount(count().value as number - 1)}
            >
                -
            </button>
            <span
                id={count().key}
            >
                {count().value}
            </span>
            <button
                onClick={() => setCount((count().value as number) + 1)}
            >
                +
            </button>
        </>
    )
}

export default Counter