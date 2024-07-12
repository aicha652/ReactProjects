import './App.css';
import { useRef } from "react"

function App() {
  let number = useRef()
  function handleButtonClick() {
    number.current.value = Number(number.current.value) + 1
  }
  return (
    <div>
      <input ref={number}></input>
      <button onClick={handleButtonClick}>+</button>
    </div>
  );
}

export default App;
