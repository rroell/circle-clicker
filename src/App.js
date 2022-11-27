import logo from "./logo.svg";
import "./App.css";

function handlePlaceCircle(e) {
  console.log(e);
}
function App() {
  return (
    <div className="App" onClick={handlePlaceCircle}>
      Hallo
    </div>
  );
}

export default App;
