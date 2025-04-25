import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./counterSclice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [increments, setIncrements] = useState(0);
  const values = Number(increments) || 0;
  const resetAll = () => {
    setIncrements(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="text"
        value={increments}
        onChange={(e) => setIncrements(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incrementByAmount(values))}>
          Add Amount
        </button>
        <button onClick={() => resetAll()}>reset</button>
      </div>
    </section>
  );
};

export default Counter;
