import React, { useState, useMemo } from "react";

function numberLooper(num) {
  let i = 0;
  while (i < 100) i++;
  console.log("render");
  return num * 2;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(true);

  const colors = {
    color: active ? "green" : "red",
    fontWeight: 700,
  };

  const countPlus = () => {
    setCount((prev) => prev + 1);
  };

  const number = useMemo(() => numberLooper(count), [count]);

  const activeToggle = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="user__item">
      <h1>useMemo</h1>
      <h1 style={colors}>{number}</h1>

      <div className="btns">
        <button onClick={countPlus}>+</button>
        <button onClick={activeToggle}>toggle</button>
      </div>
    </div>
  );
}

export default Counter;
