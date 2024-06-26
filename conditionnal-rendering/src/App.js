import HeaderComponent from './HeaderComponent.js'
import PostComponent from './PostComponent.js';
import ButtonComponent from './ButtonComponent.js';

import logo from "./rose.jpeg"
import flower from "./pinkFlower.png"
import "./App.css"

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className={"App"}>
        <div className={"Post"}>
          <PostComponent number="20" title="Title 1" text="teeeeeeeeeeext 1"/>
          <PostComponent title="Title 2" text="teeeeeeeeeeext 2"/>
          <PostComponent title="Title 3" text="teeeeeeeeeeext 3"/>
          <PostComponent text="teeeeeeeeeeext 4"/>
        </div>
        <div className={"divButtonClass"}>
          <ButtonComponent>
            <p style={{width: "90px", height: "5px"}}>Title1 ⚡️⚡️⚡️</p>
          </ ButtonComponent>

          <ButtonComponent>
            <p>Title2</p>
            <img style={{width: "90px", height: "90px"}}  src={logo} alt="Logo"></img>
          </ButtonComponent>

          <ButtonComponent>
            <p>Title 3</p>
            <p>⭐️⭐️⭐️</p>
            <img style={{width: "90px", height: "130px"}} src={flower} alt="pink Flower"></img>
          </ButtonComponent>

          <ButtonComponent />
        </div>
      </div>
    </div>
  );
}

export default App;