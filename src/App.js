import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [points, setPoints] = useState([]);

  function handlePlaceCircle(e) {
    let point = { x: e.pageX - 4, y: e.pageY - 13 };
    console.log(point);
    setPoints([...points, point]);
  }

  return (
    <div className="App" onClick={handlePlaceCircle}>
      <div>Hallo</div>
      {points.map((point) => (
        <div className="point" style={{ left: point.x, top: point.y }}>
          o
        </div>
      ))}
    </div>
  );
}

export default App;
