import {useState} from "react";
import { useNavigate } from "react-router-dom"
import "./style/style.css"

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
        <div className="container">
        <h2 className="tite">Title</h2>
        <input className="input" onChange={(e)=> setTask(e.target.value)}
        value={task}/>
        <h3 className="dis">Discrpition</h3>
        <input className="input" onChange={(e)=> setDes(e.target.value)}
        value={des}/>
        <button className="button" onClick={HandleClick}>Add Blog</button>
        <p className="p" onClick={()=> navigate("/View")}>View Blogs</p>
        </div>
    )
}