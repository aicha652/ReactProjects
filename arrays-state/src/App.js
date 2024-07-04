//import logo from './logo.svg';
import './App.css';
import { useState } from "react"

function App() {

  const [devices, setDevices] = useState(["iphone", "samsung", "readme", "nokia"])

  const devicesList = devices.map((device) => {
    return(
      <div>
        <li>{device}</li>
      </div>
    )
  })

  const [deviceInput, setDeviceInput] = useState("")

  function addDevice() {
    setDevices([...devices, deviceInput])
  }
  
  return (
    <div className="App">
      {devicesList}
      <input 
        type="text" 
        value={deviceInput} 
        onChange={(event) => {
          setDeviceInput(event.target.value)
      }}/>
      <button onClick={addDevice}>Add</button>
    </div>
  );
}

export default App;
