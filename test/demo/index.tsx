import { createElement } from '../../src'

const FooChild = (): HTMLElement => <div>Child</div>

const Foo = ({style}): HTMLElement => {
    return (
	    <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <button
                onClick={() => alert('Hello, World!')}
            >
                {style}
            </button>
            <FooChild />
        </div>
    )
}

document.getElementById("root").appendChild(Foo({style: 'Hello, World!'}))
