import { createElement } from '../../src'

const Button = (): HTMLElement => {
    return (
	    <button
            onClick={() => alert('Clicked!')}
            // class='btn'
            style={{
                height: '50px',
                width: '200px',

                backgroundColor: 'white',
                color: 'black',
                fontSize: '24px',
            }}

        >
            Click me!
        </button>
    )
}

document.getElementById("root").appendChild(Button())
