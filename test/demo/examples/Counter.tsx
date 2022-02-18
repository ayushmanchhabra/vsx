import { createElement, createState } from "../../../src"

const Counter = (): HTMLElement => {
    let [count, setCount] = createState('gkhf78xf3', 0)
    return (
	    <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <button
                onClick={() => setCount(count().value as number - 1)}
            >
                -
            </button>
            <span
                id={count().key}
                style={{
                    margin: '10px'
                }}
            >
                {count().value}
            </span>
            <button
                onClick={() => setCount(count().value as number + 1)}
            >
                +
            </button>
        </div>
    )
}

export default Counter