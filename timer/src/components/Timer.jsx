import { useState,useEffect } from "react";

export default function Timer(){
    const [seconds, setSeconds] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(()=>{
        if(!running) return;

        const interval = setInterval(()=>{
            setSeconds((prev)=> prev + 1);
        },1000)
        return ()=> clearInterval(interval);
    },[running]);

    const FormatTime = ()=>{
        const m = Math.floor(seconds/ 60);
        const s = seconds % 60;
        return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
    }

    function HandleRest(){
        setRunning(false), 
        setSeconds(0);
    }

    return(
        <div className="Container">
        <h2>{FormatTime()}</h2>
        <div className="buttons">
        <button onClick={()=> setRunning(true)}>Play</button>
        <button onClick={()=> setRunning(false)}>Pause</button>
        <button onClick={HandleRest}>reset</button>
        </div>
        </div>
    )
}