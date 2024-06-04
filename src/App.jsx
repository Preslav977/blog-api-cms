import "./index.css";
import { createContext, useState } from "react";
import LogInFormComponent from "./components/LogInFormComponent";

export const EmailContext = createContext(null);

export const PasswordContext = createContext(null);

function App() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <>
      <EmailContext.Provider value={{ email, setEmail }}>
        <PasswordContext.Provider value={{ password, setPassword }}>
          <LogInFormComponent />
        </PasswordContext.Provider>
      </EmailContext.Provider>
    </>
  );
}

export default App;
