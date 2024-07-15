import './App.css';
import { useState, useMemo } from "react"

function App() {
  var randomColor = "#"+ Math.floor(Math.random()*16777215).toString(16);

  const [Mohamed, setMohamed] = useState(0)
  const [Ahmed, setAhmed] = useState(0)

  const m = useMemo(() => {
    return (<div className='divColor' style={{ backgroundColor: randomColor }}></div>)
  }, [Mohamed])

  return (
    <div>
      {m}
      <button onClick={() => setMohamed(Mohamed + 1)}>Mohamed</button>
      <button onClick={() => setAhmed(Ahmed + 1)}>Ahmed</button>
    </div>
  );
}

export default App;
