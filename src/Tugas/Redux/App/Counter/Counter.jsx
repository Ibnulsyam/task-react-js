import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span> {count} </span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
