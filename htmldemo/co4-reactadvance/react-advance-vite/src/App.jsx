import React, { useState } from "react";
//Define custom hook
function useCounter(initialValue = 0) 
{
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

//Use custom hook in a component
function Counter() {
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    <div>
      <h2>Count: {count}</h2><object data="" type=""></object>
      <button onClick={increment}>ADD</button>
      <button onClick={decrement}>SUB</button>
      <button onClick={reset}>refresh</button>
    </div>
  );
}

export default function App() {
  return <Counter />;
}