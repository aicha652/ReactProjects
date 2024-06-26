import "./PostComponent.css"

export default function PostComponent({number, title, text})  {
    return(
        <div className={"post"}>
            <div className={"paragPost"}>
            <h2>{ number }</h2>
            <h3>{ title }</h3>
            <hr></hr>
            <h6>{ text }</h6>
            </div>
        </div>
    )
}