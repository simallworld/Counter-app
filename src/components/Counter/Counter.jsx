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
      <h3>Counter</h3>
      <h4>Count: {count}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;

