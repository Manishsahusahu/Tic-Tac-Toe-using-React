import React from "react";
import { useState } from "react";

let x = 0;
const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      x: {x}
      <button onClick={()=>x += 1}>INCREMENT</button>
      count : {count}
      <button onClick={() => setCount(count + 1)}>INCREMENT</button>
      <button onClick={() => setCount(count - 1)}>DECREMENT</button>
    </>
  );
};

export default Count;
