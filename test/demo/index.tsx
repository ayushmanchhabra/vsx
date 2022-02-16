import JSX from '../../src'

const FooChild = (): HTMLElement => <div>Child</div>

const Foo = (): HTMLElement => {
    return (
	    <div>
            Parent
            <FooChild/>
        </div>
    )
}

document.getElementById("root").appendChild(Foo())
