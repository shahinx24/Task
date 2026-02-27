import React, {useState} from "react";

function App(){
  const [task, setTask] = useState("");
  const [update, setUpdate] = useState([]);
  const [nextId , setId] = useState(1);

  function add(){
    if(task.trim() === "")return;
    const newTask = {id: nextId , text: task};
    setUpdate(prev=> [...prev,newTask]);
    setId(prev => prev +1);
    setTask("");
  }
  function dlt(id){
    setUpdate(prev => prev.filter(item => item.id !== id));
  }
  return(
    <>
    <input type="text" placeholder="text" value={task} onChange={(e)=> setTask(e.target.value)}/>
    <button onClick={add}>
      add
    </button>
    {update.map((item) => (
      <p key={item.id}>{item.text}
      <button onClick={() => dlt(item.id)}>delete</button>
      </p>
      
    ))}
    </>
  )
}
export default App;