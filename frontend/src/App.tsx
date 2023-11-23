import React from "react";
import { useState } from "react";
import "./App.css";

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
    </>
  );
};

export default App;
