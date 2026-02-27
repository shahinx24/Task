import React, { useState,useEffect } from "react";
import "./App.css"

function App() {
  const [email,setEmail] = useState("");
  const [error,setError] = useState("");

  useEffect(()=> {
    if(email.trim() === ""){
      setEmail("")
      return;
    }
    if(!email.includes('@')){
      setError("Email must include @")
    }else {
      setError("");
    }
  },[email]);

  function HandleClick(){
    if(error === "" && email !== ""){
        alert("Submitted")
    }else {
      alert("error!, fill the form !")
    }
  }

  return(
    <>
    <p>Enter your email </p>
    <input type="text" value={email} placeholder="Enther email.." onChange={(e)=> setEmail(e.target.value)}/>
    <p>{error}</p>
    <button onClick={HandleClick}>Click </button>
    </>
  )
}
export default App;