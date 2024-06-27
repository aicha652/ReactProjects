import logo from './logo.svg';
import './App.css';

function App() {
  const tasks = [
    {id: 1, title: "doing my homework"},
    {id: 2, title: "reading a book"},
    {id: 3, title: "studying"},
  ]

  const myTasksList = tasks.map((task) => {
    return(
      <div>
        <li key={task.id}>{task.title}</li>
      </div>
    )
  })
  console.log(myTasksList)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>{myTasksList}</ul>
      </header>
    </div>
  );
}

export default App;
