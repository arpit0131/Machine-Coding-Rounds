import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slice";
const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        marginTop: "50%",
        display: "flex",
        justifyContent: "center",
        gap: 15,
      }}
    >
      <button onClick={() => dispatch(increment())}>+</button>
      <div>{value}</div>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
export default Counter;
