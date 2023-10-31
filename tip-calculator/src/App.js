import "./index.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );

  function TipCalculator() {
    const [person1, setSelOpt1] = useState(0);
    const [person2, setSelOpt2] = useState(0);
    const [bill, setbill] = useState("");

    function handleReset() {
      setbill("");
      setSelOpt1(0);
      setSelOpt2(0);
    }

    return (
      <div className="Calculator">
        <SelectBill bill={bill} onChangeBill={setbill} />

        <SelectService person={person1} onSelect={setSelOpt1}>
          How did you like the service?{" "}
        </SelectService>

        <SelectService person={person2} onSelect={setSelOpt2}>
          How did your friend like the service?{" "}
        </SelectService>

        <Total
          bill={bill}
          tip={(bill * (((Number(person1) + Number(person2)) / 2) * 1)) / 100}
        />
        <Reset onReset={handleReset} />
      </div>
    );
  }

  function SelectBill({ bill, onChangeBill }) {
    return (
      <div>
        <label>How much was the bill?</label>
        <input
          type="text"
          placeholder="Bill value"
          value={bill}
          onChange={(e) => onChangeBill(Number(e.target.value))}
        />
      </div>
    );
  }

  function SelectService({ person, onSelect, children }) {
    function handleSelect(e) {
      onSelect(e.target.value);
    }
    return (
      <div>
        <span>{children} </span>
        <select value={person} onChange={handleSelect} placeholder="Tip...">
          <option value="0">Very Bad...(0%)</option>
          <option value="10">Nothing special(10%)</option>
          <option value="15">Good!(15%)</option>
          <option value="20">Amazing!(20%)</option>
        </select>
      </div>
    );
  }

  function Total({ bill, tip }) {
    const sum = Number(bill) + tip;
    return (
      <div>
        <h3>
          You pay {sum}: ${bill} + ${tip} tip{" "}
        </h3>
      </div>
    );
  }

  function Reset({ onReset }) {
    return <button onClick={onReset}>Reset</button>;
  }
}
