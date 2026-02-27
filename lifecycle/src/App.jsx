import { useState, useEffect } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  const [text,setText] = useState("");

function Child() {
  useEffect(() => {
    setText("Child Mounted");
    return () => {
      setText("Child Unmounted");
    };
  }, []);

  return <h2>I am the Child Component</h2>;
}

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle Child
      </button>
      {show && <Child />}
      <p>{text}</p>
    </div>
  );
}