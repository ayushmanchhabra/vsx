import { createElement } from '../../dist'

const FooChild = (): HTMLElement => <div>FooChild</div>

const Foo = (): HTMLElement => {
    return (
	    <div>
            Foo
            {FooChild()}
        </div>
    )
}

document.getElementById("root").appendChild(Foo())
