import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";

import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 ? (
        <Form
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          verifyPassword={verifyPassword}
          setVerifyPassword={setVerifyPassword}
          step={step}
          setStep={setStep}
        />
      ) : (
        <StepTwo />
      )}
      <Footer />
    </div>
  );
}

export default App;
