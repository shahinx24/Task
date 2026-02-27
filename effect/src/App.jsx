import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (email === "") {
      setError("");
      return;
    }
    if (!email.includes("@")) {
      setError("Email must contain @");
    } else {
      setError("");
    }
  }, [email]);

  useEffect(() => {
    if (password === "") {
      setError("");
      return;
    }
    const strong =
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^A-Za-z0-9]/.test(password);

    if (!strong) {
      setError("Not a strong password");
    } else {
      setError("Strong password");
    }
  }, [password]);

  function handleSubmit() {
  if (error === "" || error === "Strong password") {
    alert("Submitted!");
  } else {
    alert("Fix errors first");
  }
}

  return (
    <>
      <p>Enter your email</p>
      <input
        type="text"
        placeholder="Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
        <p>Enter Password</p>
      <input
        type="password"
        placeholder="Password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p style={{ color: error === "Strong password" ? "green" : "red" }}>
        {error}
      </p>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
export default App;