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
  <>
  <Head />
  <Time time = {time} />
  
  <div>
    {running ? (    <button onClick={()=>{setRunning(false)}}>stop</button>
) : (    <button onClick={()=>{setRunning(true)}}>start</button>
)
    }
    <button onClick={()=>{setTime(0)}}>reset</button>
  </div>
  </>
);
}

export default App
