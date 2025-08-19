import "./styles.css";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dragTask, setDragTask] = useState(null);

  const TODO = "TODO";
  const DOING = "DOING";
  const DONE = "DONE";

  const handleKey = (e) => {
    if (e.keyCode === 13 && input.trim() !== "") {
      // Enter
      const obj = { title: input, status: TODO, id: Date.now() };
      setTasks((prev) => [...prev, obj]);
      setInput("");
    }
  };

  const handleDrag = (e, task) => {
    setDragTask(task);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragNDrop = (status) => {
    let copyTasks = [...tasks];
    copyTasks = copyTasks.map((item) => {
      if (dragTask.id === item.id) {
        item.status = status;
      }
      return item;
    });
    setTasks(copyTasks);
    setDragTask(null);
  };

  const handleOnDrop = (e) => {
    const status = e.target.getAttribute("data-status");
    if (status === TODO) {
      handleDragNDrop(TODO);
    } else if (status === DOING) {
      handleDragNDrop(DOING);
    } else if (status === DONE) {
      handleDragNDrop(DONE);
    }
  };

  const deleteTask = (task) => {
    let copyTask = [...tasks];
    copyTask = copyTask.filter((item) => item.id !== task.id);
    setTasks(copyTask);
  };

  return (
    <div className="App">
      <h1>Drag & Drop</h1>
      <input
        type="text"
        className="input"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onKeyDown={handleKey}
      />

      <div className="board-container">
        <div
          className="todo"
          data-status={TODO}
          onDrop={handleOnDrop}
          onDragOver={onDragOver}
        >
          <h2 className="todo-col">Todo</h2>
          {tasks
            .filter((item) => item.status === TODO)
            .map((item) => (
              <div
                draggable
                onDrag={(e) => handleDrag(e, item)}
                className="task-item"
                key={item.id}
              >
                {item.title}
                <div className="btns">
                  <span className="btn" onClick={() => deleteTask(item)}>
                    ❌
                  </span>
                </div>
              </div>
            ))}
        </div>
        <div
          className="doing"
          onDrop={handleOnDrop}
          onDragOver={onDragOver}
          data-status={DOING}
        >
          <h2 className="doing-col">Doing</h2>
          {tasks
            .filter((item) => item.status === DOING)
            .map((item) => (
              <div
                draggable
                onDrag={(e) => handleDrag(e, item)}
                className="task-item"
                key={item.id}
              >
                {item.title}
                <div className="btns">
                  <span className="btn" onClick={() => deleteTask(item)}>
                    ❌
                  </span>
                </div>
              </div>
            ))}
        </div>
        <div
          className="done"
          data-status={DONE}
          onDrop={handleOnDrop}
          onDragOver={onDragOver}
        >
          <h2 className="done-col">Done</h2>
          {tasks
            .filter((item) => item.status === DONE)
            .map((item) => (
              <div
                draggable
                onDrag={(e) => handleDrag(e, item)}
                className="task-item"
                key={item.id}
              >
                {item.title}
                <div className="btns">
                  <span className="btn" onClick={() => deleteTask(item)}>
                    ❌
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
