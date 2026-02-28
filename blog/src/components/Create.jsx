import {useState} from "react";
import { useNavigate } from "react-router-dom"

export default function Create({setBlog}){
    const [task,setTask]= useState("")
    const [des,setDes]= useState("")
    const navigate = useNavigate()

    function HandleClick(){
        if(task.trim() === "" || des.trim() === "")return;
        const newTask={id:Date.now(),text:task,detail:des}
        setBlog((prev)=> [...prev,newTask])
        setTask("")
        setDes("")
        navigate("/View")
        // console.log(`Title: ${newTask.text}, Details: ${newTask.detail}`)
    }

    return(
        <>
        <h2>Title</h2>
        <input onChange={(e)=> setTask(e.target.value)}
        value={task}/>
        <h3>Discrpition</h3>
        <input onChange={(e)=> setDes(e.target.value)}
        value={des}/>
        <button onClick={HandleClick}>Add Blog</button>
        <p onClick={()=> navigate("/View")}>View Blogs</p>
        </>
    )
}