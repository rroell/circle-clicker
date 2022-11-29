import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function App() {
  const [points, setPoints] = useState([]);
  const [undonePoints, setUndonePoints] = useState([]);
  const startShape = "square";
  const [shape, setShape] = useState(startShape);

  function handlePlaceCircle(e) {
    let point = { x: e.pageX - 2, y: e.pageY - 2, className: shape };
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
  function handleShapeChange() {
    shape === "circle" ? setShape("square") : setShape("circle");
  }

  return (
    <div>
      <div className="center">
        <ButtonGroup
          size="large"
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            className="button-spacing"
            onClick={handleUndo}
            disabled={points.length === 0 ? true : false}
          >
            Undo
          </Button>
          <Button
            className="button-spacing"
            onClick={handleRedo}
            disabled={undonePoints.length === 0 ? true : false}
          >
            Redo
          </Button>
          <Button className="button-spacing" onClick={handleShapeChange}>
            Change shape
          </Button>
        </ButtonGroup>
      </div>
      {/* TODO: Make it possible to change the shape of the point */}
      <div className="App" onClick={handlePlaceCircle}>
        {points.map((point, idx) => (
          <div
            // TODO: now shape changes for all objects
            className={shape}
            // className={this.className}
            style={{ left: point.x, top: point.y }}
            key={idx}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
