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

  function handleStepMinus() {
    if (step === 1) return;
    setStep((s) => s - 1);
  }

  function handleSetpPlus() {
    setStep((s) => s + 1);
  }

  function handelCountMinus() {
    setCount((c) => c - step);
  }

  function handelCountPlus() {
    setCount((c) => c + step);
  }

  return (
    <div className="container">
      <div className="container__control">
        <button onClick={handleStepMinus} className="btn">
          -
        </button>
        <p>Step: {step}</p>
        <button onClick={handleSetpPlus} className="btn">
          +
        </button>
      </div>

      <div className="container__control">
        <button onClick={handelCountMinus} className="btn">
          -
        </button>
        <p>Count: {count}</p>
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
    </div>
  );
}
