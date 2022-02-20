import { createElement, createState } from "../../../src"

const Counter = (): HTMLElement => {
    let [count, setCount] = createState(10)
    return (
	    <div
            style={{
                height: '100vh',
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
            <input
                id={count().key}
                onKeyDown={(event) => {
                    setCount(event.target.value)
                    console.log(count().value)
                }}
                style={{
                    height: '20px',
                    width: '100px',
                    textAlign: 'center',
                }}
                type='number'
                value={count().value}
            />
            <button
                onClick={() => setCount((count().value as number) + 1)}
            >
                +
            </button>
        </div>
    )
}

export default Counter