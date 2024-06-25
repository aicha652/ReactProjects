export default function Article({name, email, age, children}) {
    return(
        <div style={{
            border: "5px solid green",
            color: "black",
            margin: "5px",
            width: "300px"}}>
            <h2>{ name }</h2>
            <h4>{ email }</h4>
            <h6>{ age }</h6>
            <hr></hr>
            <h4>{ children }</h4>
        </div>
    )
}