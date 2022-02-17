import { createElement } from '../../src'

const isIdUnique = (id: string): boolean => {
    return false
}

let get;

function createState (id: string, initialValue: any): [any, ((updatedValue: any) => void)] {
    if (isIdUnique(id)) {
        throw `Error: id ${id} has already been used. Please use another id.`
    }
    console.log(this)

    let get = () => {
        if (document.getElementById(id) === null) {
            return initialValue
        } else {
            return document.getElementById(id).innerText
        }
    }

    let set = (updatedValue: any) => {
        if (document.getElementById(id) ===  null) {
            console.error(`Element with id ${id} does not exist.`)
        } else {
            document.getElementById(id).innerText = updatedValue.toString()
        }
    }
    return [get, set]
}

const Counter = (): HTMLElement => {
    let [count, setCount] = createState('gkhf78xf3', 0)
    return (
	    <div>
            <button
                onClick={() => setCount(Number(count() - 1))}
            >
                -
            </button>
            <span id="gkhf78xf3">{count()}</span>
            <button
                onClick={() => setCount(Number(count()) + 1)}
            >
                +
            </button>
        </div>
    )
}

document.getElementById("root").appendChild(Counter())
