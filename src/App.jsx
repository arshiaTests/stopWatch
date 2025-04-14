import "./App.css";
import { useEffect, useState } from "react";
import Head from "./components/Head";
import Time from "./components/Timee";
import Stop from "./Controllers/Stop";
import Start from "./Controllers/Start";
import Reset from "./Controllers/Reset";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className="App">
      <Head />
      <Time time={time} />

      <div className="controls">
        {running ? (
          <Stop onClick={() => {}} setRunning={setRunning} />
        ) : (
          <Start onClick={() => {}} setRunning={setRunning} />
        )}
        <Reset onClick={() => {}} setTime={setTime} setRunning={setRunning} />
      </div>
    </div>
  );
}

export default App;
