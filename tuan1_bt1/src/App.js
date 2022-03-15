import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const [numberState, setNumberstate] = useState();

  return (
    <div className="App">
      <div className="wrapper_table">
        <div className="table">
          {numbers.map((number) => (
            <div
              className="item"
              key={number}
              style={
                number === numberState
                  ? {
                      color: "#333",
                      backgroundColor: "#22c55e",
                    }
                  : {}
              }
            >
              {number}
            </div>
          ))}
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        {numbers.map((number) => (
          <button
            key={number}
            className="btn"
            onClick={() => setNumberstate(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
