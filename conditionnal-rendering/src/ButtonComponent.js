import "./ButtonComponent.css"
export default function ButtonComponent({ children }) {
    if(children == null || children === "") {
        return null
    }
    return(
        <div className={"buttonClass"}>
            <button>{ children }</button>
        </div>
    )
}