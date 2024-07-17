import './App.css';
import UseCustom from './useCustom';

function App() {
  const [t] = UseCustom('https://jsonplaceholder.typicode.com/todos/')
  console.log(t)
  return (
    <div className="App">
      {
        t.map((e) => {
          return(
          <h1 key={e.id}>{e.title}</h1>
        ) 
        })
      }
    </div>
  );
}

export default App;
