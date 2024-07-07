import './App.css';
import { useState } from "react"

function App() {

  const [count, setCount] = useState(0)

  const handlePlusClick = () => {
      setCount((c) => {
        return c + 1
      })
      setCount((c) => {
        return c + 1
      })
  }
  return (
    <div className="App">
      <h1>The count is: { count }</h1>
      <button onClick={handlePlusClick}>+</button>
    </div>
  );
}

export default App;
