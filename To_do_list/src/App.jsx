import { useState } from "react";
import bgDesktopDark from "./assets/img/bg-desktop-dark.jpg";
import icon from "./assets/img/icon-sun.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div className="header">
          <div className="App-header">
            <h1 className="title">To do</h1>
            <img src={icon} alt="Icon Sun" className="icon" />
          </div>
          <input type="select" />
        </div>
      </div>
    </>
  );
}

export default App;
