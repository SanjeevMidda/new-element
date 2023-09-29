import { useState } from "react";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);

  let addItem = () => {
    setItems([...items, "add"]);
  };

  return (
    <div className="App">
      <h3 onClick={addItem}>+</h3>

      <div className="boxContainer">
        {items.map((item) => {
          return <div className="box"></div>;
        })}
      </div>
    </div>
  );
}

export default App;
