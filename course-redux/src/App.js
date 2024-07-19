import { useDispatch, useSelector } from "react-redux"
import './App.css';
import { pluss } from './types/Plus';
import { minsee } from './types/Minse';

function App() {
  const m = useSelector(state => state.x)
  const n = useDispatch()
  return (
    <div className="App">
      <button onClick={() => n(pluss)}>+</button>
      <button onClick={() => n(minsee)}>-</button>
      {m}
    </div>
  );
}

export default App;
