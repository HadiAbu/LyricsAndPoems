import React from "react";
import { useState } from "react";
import "./App.css";

const attributes = [
  { key: 1, label: "tacos" },
  { key: 2, label: "burgers" },
  { key: 3, label: "pizzas" },
];

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <input type="text" placeholder="talk dirty to me" />
        <input type="checkbox" />
      </div>
      <div className="card">
        <select data-testid="select">
          <option value="default">Make your choice</option>
          {attributes.map((item) => {
            return (
              <option
                data-testid="select-option"
                key={item.key}
                value={item.key}
              >
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default App;
