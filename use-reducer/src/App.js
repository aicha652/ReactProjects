import { useReducer } from "react"

function App() {
  const reducer = (state, action) => {
    switch(action)
    {
      case "plus":
        return state + 1
      case "minse":
        return state - 1
      case "reset":
        return 0
      default:
        return state
    }
  }
  const initialvalue = 0
  const [state, dispatch] = useReducer(reducer, initialvalue)
  return (
    <div className="App">
      <button onClick={() => dispatch('plus')}>+</button>
      <button onClick={() => dispatch('minse')}>-</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      {state}
    </div>
  );
}

export default App;
