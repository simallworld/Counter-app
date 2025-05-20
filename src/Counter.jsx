import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //Increment function
  const increment = () => {
    if (count >= 10) {
      alert("Count cannot exceed 10");
      return false;
    }
    setCount(count + 1);
  };

  //Decerement function
  const decrement = () => {
    if (count <= 0) {
      alert("Count cannot be less than 0 or negative");
      return false;
    }
    setCount(count - 1);
  };

  return (
    <>
      <h1 data-testid="count">{count}</h1>
      <button data-testid="increment" onClick={increment}>
        Increment
      </button>
      <button data-testid="decrement" onClick={decrement}>
        Decrement
      </button>
    </>
  );
};

export default Counter;
