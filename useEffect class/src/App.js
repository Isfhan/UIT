import './App.css';
import { useState, useEffect } from 'react';


function App() {
  // Set initial state
  const [text, setText] = useState("");

  //Runs only on the first render
  useEffect(() => {
    console.log("Run when component run first time");
  }, []);


  //Runs on the first render
  //And any time any dependency value changes
  useEffect(() => {
    console.log("Runs on the first render And any time any dependency value changes");
  }, [text]);


  //Runs on every render
  useEffect(() => {
    console.log("Run when component render");
  });


  return (
    <div className="App">
      <h1>UseEffect Demo</h1>
      <input onChange={(event) => setText(event.target.value)} value={text} />
    </div>
  );

}

export default App;
