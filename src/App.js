import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [points, setPoints] = useState([]);
  const [undonePoints, setUndonePoints] = useState([]);

  function handlePlaceCircle(e) {
    let point = { x: e.pageX - 2, y: e.pageY - 2 };
    console.log(point);
    setPoints([...points, point]);
  }
  function handleUndo() {
    // Remove the last point from points
    let undo = points.pop();
    setPoints([...points]);
    setUndonePoints([...undonePoints, undo]);
  }
  function handleRedo() {
    // Redo last undone point from undonePoints
    let redo = undonePoints.pop();
    setPoints([...points, redo]);
    setUndonePoints([...undonePoints]);
  }

  return (
    <div>
      <button
        onClick={handleUndo}
        disabled={points.length === 0 ? true : false}
      >
        Undo
      </button>
      <button
        onClick={handleRedo}
        disabled={undonePoints.length === 0 ? true : false}
      >
        Redo
      </button>
      <div className="App" onClick={handlePlaceCircle}>
        <div>Hallo</div>
        {points.map((point, idx) => (
          <div
            className="point"
            style={{ left: point.x, top: point.y }}
            key={idx}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
