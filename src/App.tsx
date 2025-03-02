import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [result, setResult] = useState("");

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const getBackgroundColor = () => {
    if (count >= 0 && count <= 5) {
      return "green";
    } else if (count >= 6 && count <= 9) {
      return "orange";
    } else if (count === 10) {
      return "red";
    }
    return "transparent";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResult((prevResult) => `${prevResult} Name: ${name}, Age: ${age}\n`);
  };

  const handleFormReset = () => {
    setName("");
    setAge("");
    setResult("");
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Counter: {count}</h1>
      <button
        onClick={increment}
        disabled={count >= 10}
        style={{
          padding: "10px 20px",
          margin: "5px",
          backgroundColor: count >= 10 ? "grey" : "#4CAF50",
          color: "black",
          border: "none",
          borderRadius: "5px",
          cursor: count >= 10 ? "not-allowed" : "pointer",
        }}
      >
        +
      </button>
      <button
        onClick={decrement}
        disabled={count <= 0}
        style={{
          padding: "10px 20px",
          margin: "5px",
          backgroundColor: count <= 0 ? "grey" : "#f44336",
          color: "black",
          border: "none",
          borderRadius: "5px",
          cursor: count <= 0 ? "not-allowed" : "pointer",
        }}
      >
        -
      </button>
      <button
        onClick={reset}
        disabled={count === 0}
        style={{
          padding: "10px 20px",
          margin: "5px",
          backgroundColor: count === 0 ? "grey" : "pink",
          color: "black",
          border: "none",
          borderRadius: "5px",
          cursor: count === 0 ? "not-allowed" : "pointer",
        }}
      >
        0
      </button>
      <div
        style={{
          backgroundColor: getBackgroundColor(),
          padding: "10px",
          marginTop: "10px",
          borderRadius: "5px",
          color: "black",
        }}
      >
        {count === 10 && <p>Counter reached the maximum value</p>}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name :
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Age :
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleFormReset}>
          Reset
        </button>
      </form>
      {result && (
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            marginTop: "10px",
            whiteSpace: "pre-wrap",
          }}
        >
          {result}
        </div>
      )}
    </div>
  );
}

export default App;
