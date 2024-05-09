import React, { useState } from "react";
import "./index.css";

function App() {
  const [counter, setCounter] = useState(0);

  function increaseClick() {
    setCounter(counter + 1);
  }

  function decreaseClick() {
    setCounter(counter - 1);
  }

  function resetClick() {
    setCounter(0);
  }

  return (
    <div className="main">
      <h3>Click Counter</h3>
      <button className="buttons" onClick={increaseClick}>
        Up
      </button>
      <button className="buttons" onClick={resetClick}>
        Reset
      </button>
      <button className="buttons" onClick={decreaseClick}>
        Down
      </button>

      <p>{counter}</p>
    </div>
  );
}

export default App;
