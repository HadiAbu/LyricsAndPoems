import React from "react";
import { Spinner } from "@blueprintjs/core";

const App2 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        gap: "10px",
      }}
    >
      <span>Songs And Lyrics</span>
      <Spinner />
    </div>
  );
};

export default App2;
