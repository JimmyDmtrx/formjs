import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  return (
    <div>
      <Form
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        verifyPassword={verifyPassword}
        setVerifyPassword={setVerifyPassword}
      />
      {/* <Form />
      <Form />
      <Form /> */}
      <Footer />
    </div>
  );
}

export default App;
