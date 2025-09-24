import React from "react";

function NonStateObject() {
  let count = 0;

  const increase = () => {
    count++;
    console.log("Count is: ", count); // updates in console
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
export default NonStateObject