import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState(["ALi", "bilal", "catey", "dania", "electra"]);
  const [colorIndex, setColorIndex] = useState(0);
  const color = ["red", "green", "blue"];

  return (
    <div className="App">
      <h1>Color Full List </h1>
      <ul>
        {list.map((value, index) => {
          return <li style={{ "backgroundColor": color[0] }} key={"list-" + index}>{value}</li>
        })}
      </ul>
    </div>
  );

}

export default App;
