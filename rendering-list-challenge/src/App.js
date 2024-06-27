import HeaderComponent from './HeaderComponent.js'
import PostComponent from './PostComponent.js';
import ButtonComponent from './ButtonComponent.js';

import logo from "./rose.jpeg"
import flower from "./pinkFlower.png"
import "./App.css"

function App() {
  const posts = [
    {id: 1, title: "Title 1", text: "teeeeeeeeeeext 1"},
    {id: 2, title: "Title 2", text: "teeeeeeeeeeext 2"},
    {id: 3, title: "Title 3", text: "teeeeeeeeeeext 3"},
    {id: 4, title: "Title 4", text: "teeeeeeeeeeext 4"},
  ]

  const myPostsList = posts.map((post) => {
    return(
      <PostComponent key={post.id} title={post.title} text={post.text}/>
    )
  })

  const buttons = [
    {
      id: 1, 
      title: "Title1",
      c: 
        <p style={{width: "90px", height: "5px"}}>⚡️⚡️⚡️</p>
      ,
    },
    {
      id: 2,
      title: "Title2",
      c: 
        <img style={{width: "90px", height: "90px"}}  src={logo} alt="Logo"></img>
      ,
    },
    {
      id: 3,
      title: "Title3",
      c: 
      <div>
        <p>⭐️⭐️⭐️</p>
        <img style={{width: "90px", height: "130px"}} src={flower} alt="pink Flower"></img>
      </div>
      ,
    },
  ]

  const myButtonsList = buttons.map((button) => {
    return(
      <ButtonComponent key={button.id}>
        <p>{button.title}</p>
        {button.c}
      </ButtonComponent>
    )
  })
  return (
    <div>
      <HeaderComponent />
      <div className={"App"}>
        <div className={"Post"}>
          {myPostsList}
        </div>
        <div className={"divButtonClass"}>
          {myButtonsList}
        </div>
      </div>
    </div>
  );
}

export default App;
