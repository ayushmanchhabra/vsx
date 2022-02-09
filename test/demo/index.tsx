import { createElement } from '../../src'

const FooChild = (): HTMLElement => <div>Hello FooBar</div>

const Foo = (): HTMLElement => {
    return (
	    <div>
            Hello Foo
            {FooChild()}
        </div>
    )
}

document.getElementById("root").appendChild(Foo())
