import { useState } from "react";

import icon from "./assets/img/icon-sun.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  return (
    <>
      <div className="App">
        <div className="header">
          <div className="App-header">
            <h1 className="title">Todo</h1>
            <img src={icon} alt="Icon Sun" className="icon" />
          </div>
          <input type="select" />
        </div>
      </div>
    </>
  );
}

export default App;