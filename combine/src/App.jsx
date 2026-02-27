import React, { useState } from "react";
import "./App.css"

function App() {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [sum, setSum] = useState("");

  function addStrbers() {
    setSum(str1 + str2);
    setStr1("");
    setStr2("");
  }

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">String Combiner</h1>
        <p className="subtitle">Add two String instantly</p>

        <div className="inputs">
          <input
            type="text"
            value={str1}
            onChange={(e) => setStr1(e.target.value)}
            placeholder="First String"
            className="input"
          />
          <input
            type="text"
            value={str2}
            onChange={(e) => setStr2(e.target.value)}
            placeholder="Second String"
            className="input"
          />
        </div>

        <button onClick={addStrbers} className="button">
          Add
        </button>

        <div className="result">
          <span>Result:</span>
          <h2>{sum}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
