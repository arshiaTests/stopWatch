import './App.css'
import { useEffect, useState } from 'react';
import Head from './components/Head';
import Time from './components/Timee'




function App() {
  const [time , setTime]= useState(0);
  const [running,setRunning]= useState(false);
  useEffect(()=>{
    let interval ;
    if(running){
      interval = setInterval(() => {
       setTime((prevTime)=>prevTime + 10);  
      }, 10);
    } else if (!running){
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
    return(
      <div className="App">
        <Head />
        <Time time={time} />
        
        <div className="controls">
          {running ? (
            <button onClick={() => setRunning(false)}>Stop</button>
          ) : (
            <button onClick={() => setRunning(true)}>Start</button>
          )}
          <button onClick={() => setTime(0)}>Reset</button>
        </div>
      </div>
    );
  }


export default App
