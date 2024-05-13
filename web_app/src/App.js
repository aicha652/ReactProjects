import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = "Welcome th The Web App";
  const visits = 50;
  const link = "www.google.com"
  return (
    <div className="App">
        <Navbar />
        <div className="content"></div>
        <h1>{ title }</h1>
        <p>Visited: {visits} Times</p>
        <p>{ 10 }</p>
        <p>{ "Hello coders" }</p>
        <a href={link}>google site</a>
        <Home />
    </div>
  );
}

export default App;
