import React from "react";
import "./App.css";
import { ThemeContext, ThemeProvider } from "./Components/ThemeContext"; 
import { useCustomHook } from "./hook/ahmad.hook"; // Assuming the hook is in a separate file

function App() {
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);
  const {
    count,
    setCount,
    name,
    setName,
    age,
    setAge,
    result,
    setResult,
    currentTime,
    squareColor
  } = useCustomHook();

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
    if (count >= 0 && count <= 5) return "green";
    if (count >= 6 && count <= 9) return "orange";
    if (count === 10) return "red";
    return "transparent";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult((prevResult) => `${prevResult} Name: ${name}, Age: ${age}\n`);
  };

  const handleFormReset = () => {
    setName("");
    setAge("");
    setResult("");
  };

  return (
    <ThemeProvider>
      <div
        style={{
          textAlign: "center",
          margin: "20px",
          backgroundColor: isDarkMode ? "#333" : "#fff",
          color: isDarkMode ? "#fff" : "#000",
          minHeight: "100vh",
        }}
      >
        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: isDarkMode ? "#555" : "#ddd",
            color: isDarkMode ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Toggle {isDarkMode ? "Light" : "Dark"} Mode
        </button>
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
        <div style={{ marginTop: "20px" }}>
          <h2>
            Current Time: {currentTime.getHours()}:{currentTime.getMinutes()}:
            {currentTime.getSeconds()}
          </h2>
        </div>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: squareColor,
            margin: "20px auto",
          }}
        ></div>
      </div>
    </ThemeProvider>
  );
}

export default App;