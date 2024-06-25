import HeaderComponent from './HeaderComponent.js'
import PostComponent from './PostComponent.js';
import ButtonComponent from './ButtonComponent.js';
import "./App.css"

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className={"App"}>
        <div className={"Post"}>
          <PostComponent />
          <PostComponent />
          <PostComponent />
          <PostComponent />
        </div>
        <div className={"divButtonClass"}>
          <ButtonComponent />
          <ButtonComponent />
          <ButtonComponent />
          <ButtonComponent />
          <ButtonComponent />
          <ButtonComponent />
          <ButtonComponent />
          <ButtonComponent />
          <ButtonComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
