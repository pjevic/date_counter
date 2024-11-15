/** @format */
import { useState } from "react";

import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handelCountMinus() {
    setCount((c) => c - step);
  }

  function handelCountPlus() {
    setCount((c) => c + step);
  }

  function hanldeReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="container">
      <div className="container__slider">
        <input
          type="range"
          min="0"
          max="10"
          step="1"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="slider"
        />
        <span>Step: {step}</span>
      </div>

      <div className="container__control">
        <button onClick={handelCountMinus} className="btn">
          -
        </button>
        <input
          type="number "
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="input"
        />
        <button onClick={handelCountPlus} className="btn">
          +
        </button>
      </div>

      <span className="text">
        {count === 0 && <p>Today is</p>}
        {count < 0 && (
          <p>
            {Math.abs(count)} {`day${count === -1 ? "" : "s"}`} ago today is
          </p>
        )}
        {count > 0 && (
          <p>
            {count} {`day${count === 1 ? "" : "s"}`} from today is
          </p>
        )}
        <span>&nbsp;{date.toDateString()}</span>
      </span>

      {(step !== 1 || count !== 0) && (
        <button onClick={hanldeReset} className="btn btn--reset">
          Reset
        </button>
      )}
    </div>
  );
}
