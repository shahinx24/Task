import './App.css'
import {Routes,Route} from "react-router-dom"
import Create from "./components/Create"
import View from "./components/View"
import Detail from "./components/Detail"
import {useState} from "react";

function App() {
  const [blog,setBlog] = useState([])

  return (
    <Routes>
      <Route path="/" element={<Create setBlog={setBlog}/>}/>
      <Route path="/View" element={<View blog={blog}/>}/>
      <Route path="/Detail/:id" element={<Detail blog={blog}/>}/>
    </Routes>
  )
}

export default App