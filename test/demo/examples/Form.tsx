import { createElement, createState } from "../../../src"

const Form = (): HTMLElement => {
    let [isChecked, setIsChecked] = createState('test', false)
    return (
        <button id={isChecked().key} disabled={isChecked().value}>
            {isChecked().value ? 'Disabled' : 'Not Disabled'}
        </button>
    )
}

export default Form