import { useState } from "react";

import icon from "./assets/img/icon-sun.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasksList([...tasksList, task]);
      setTask("");
    }
  };
  const handleRemoveTask = (indexToRemove) => {
    setTasksList(
      tasksList.filter((item, index) => index !== indexToRemove)
    );
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };
  return (
    <>
      <div className="App">
        <div className="header">
          <div className="App-header">
            <h1 className="title">Todo</h1>
            <img src={icon} alt="Icon Sun" className="icon" />
          </div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Create a new todo..."
          />
          <ul className="tasks-list">
            {tasksList.map((item, index) => (
              <li key={index} className="task-item">
                {item}
                <button
                  onClick={() => handleRemoveTask(index)}
                  className="remove-button"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleRemoveTask}>Clear all</button>
        </div>
      </div>
    </>
  );
}

export default App;







