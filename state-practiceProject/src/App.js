import { useState } from "react";
function App() {
  const count = 1;
  return (
    <div className="App">
      <Step />
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(1);

  return (
    <div className="Step">
      <input
        type="range"
        min={1}
        max={10}
        value={step}
        onChange={(s) => setStep(Number(s.target.value))}
      />
      <span>{step}</span>

      <Count step={step} setStep={setStep} />
    </div>
  );
}

function Count({ step, setStep}) {
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handleReset(){
    setCount(0);
    setStep(1);
  }

  return (
    <div className="Count">
      <input
        placeholder="Count..."
        type="Number"
        onChange={(c) => setCount(Number(c.target.value) * step)}
      />
      <p className="Date">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
}

export default App;
