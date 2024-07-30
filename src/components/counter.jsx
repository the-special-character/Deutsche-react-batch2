// let count = 0;

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    // count += 1;
    // console.log(count);
    // setCount(5);
    setCount((val) => {
      return val + 1;
    });
  };

  const decr = () => {
    // count -= 1;
    // console.log(count);
    // setCount(-10);
    setCount((val) => {
      return val - 1;
    });
  };

  return (
    <div>
      <button onClick={inc}>+</button>
      <p>{count}</p>
      <button onClick={decr}>-</button>
    </div>
  );
};

export default Counter;
