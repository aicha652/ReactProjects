import "./ButtonComponent.css"
export default function ButtonComponent({ children }) {
    return(
        <div className={"buttonClass"}>
            <button>{ children }</button>
        </div>
    )
}