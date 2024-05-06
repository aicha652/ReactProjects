import './App.css';
import {useRef, useState} from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const todosvalue = useRef();

  const handelTodo = () => {
    const text = todosvalue.current.value;
    if (text) {
      setTodos ([...todos, text]);
      todosvalue.current.value = ""
    }
  }

  const handeldelete = (index)  => {
    const newtodos = [...todos];
    newtodos.splice(index, 1);
    setTodos(newtodos);
  }

  return (
    <div>
      <h2>To Do List</h2>
      <ul>
        {todos.map((text, index) => {
          return(
                 <li>{text}
                 <p onClick={() => handeldelete(index)}>X</p>
                 </li>
          );
        })
        }
      </ul>
      <input ref={todosvalue}></input>
      <button onClick={handelTodo}>Add</button>
    </div>
  );
}

export default App;
