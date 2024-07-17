import './App.css';
import UseCustom from './useCustom';

function App() {
  const [t] = UseCustom('https://jsonplaceholder.typicode.com/todos/')
  console.log(t)
  return (
    <div className="App">

    </div>
  );
}

export default App;
