import VSX from "vsx";

function App(): HTMLElement {

    return (
        <div>
            <div>
                Hello, World! Is anyone out there?
            </div>
        </div>
    );
}

document.getElementById("root")?.appendChild(<App />);
