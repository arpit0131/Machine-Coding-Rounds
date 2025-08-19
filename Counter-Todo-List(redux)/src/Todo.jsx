import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInputValue, addToTask, removeTask } from "./redux/todoSlice";

const Todo = () => {
  const inputVal = useSelector((state) => state.todo.inputVal);
  const todos = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 5,
          marginTop: "20vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          value={inputVal}
          placeholder="Add todo"
          onChange={(e) => dispatch(setInputValue(e.target.value))}
        />
        <button
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(addToTask())}
        >
          +
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <ul
          style={{
            textAlign: "left",
            padding: 0,
            margin: 0,
          }}
        >
          {todos.map((item, index) => (
            <li
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(removeTask(index))}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
