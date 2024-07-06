//import logo from './logo.svg';
import './App.css';
import { useState } from "react"

let nextId = 5

function App() {
  const [devices, setDevices] = useState(
    [
      {id: 1, name: "iphone"},
      {id: 2, name: "samsung"},
      {id: 3, name: "readme"},
      {id: 4, name: "nokia"}
    ])

  const devicesList = devices.map((device) => {
    return(
      <div>
        <li key={device.id}>{device.name}
          <button onClick={() => {handleDeleteClick(device.id)}}>Delete</button>
          <button onClick={() => {handleEditClick(device.id)}}>Edit</button>
        </li>
      </div>
    )
  })

  const [deviceInput, setDeviceInput] = useState("")

  function addDevice() {
    setDevices([...devices, {id: nextId, name: deviceInput}])
    nextId = nextId + 1
  }
  

  function handleDeleteClick(id) {
    console.log(id)
    const newDevices = devices.filter((device) => {
      return(device.id !== id)
    })

    setDevices(newDevices)
  }

  function handleEditClick(id) {
    const newDevices = devices.map((device) => {
      if (device.id === id) {
        let newDevice = {...device, name: device.name + "a"}
        return newDevice
      }
      else{
        return device
      }
    })
    setDevices(newDevices)
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
