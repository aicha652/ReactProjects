import "./MyFirstComponent.css"


export default function MyFirstComponent() {
    var x = 10

    const person = {
        name: "ahmed",
        email: "ahmed@gmail.com"
    }

    const elmStyle = {
        backgroundColor: "green",
        fontSize: "30px"
    }
    return(
        <div>
            <p style={elmStyle}>{x} Hi This is My First Component</p>
            <p style={{
                backgroundColor: "blue",
                fontSize: "20px"
            }}>hello</p>
            <p className={person.name === "ahmed" ? "greenbg" : "redbg"}>{person.name}</p>
            <button onClick={sayHello}>Click Me</button>
        </div>
    )
}

function sayHello() {
    window.alert('Hello User!')
}