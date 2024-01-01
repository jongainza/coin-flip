import React, { useState } from "react";
import Side from "./Side";

const Coin = () => {
  const [counter, setCounter] = useState(0);

  const handleFlip = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div>
      <Side />
      {counter === 0 ? null : <p>Number of times flipped {counter}</p>}
      <button onClick={handleFlip}>Flip It!</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Coin;
