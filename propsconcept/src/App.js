import logo from './logo.svg';
import './App.css';
import Article from "./Article.js"

function App() {
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
        <Article name="Ahmed" email="ahmed@gmail.com" age="40" />
        <Article name="Ali" email="ali@gmail.com" age="12">
          <p style={{backgroundColor: "teal", color: "white"}}>hello world</p>
        </Article>
      </header>
    </div>
  );
}

export default App;
