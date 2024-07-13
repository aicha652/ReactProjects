import React, { createContext } from "react"
import './App.css';
import Main from './main';

export const mediator = createContext()

function App() {
  return (
    <div className="App">
      <mediator.Provider value="makarona">
        <Main />
      </mediator.Provider>
    </div>
  );
}

export default App;
