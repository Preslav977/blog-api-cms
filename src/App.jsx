import "./index.css";
import { createContext, useState } from "react";
import LogInFormComponent from "./components/LogInFormComponent";

export const EmailInputContext = createContext(null);

export const PasswordInputContext = createContext(null);

function App() {
  const [emailInput, setEmailInput] = useState("");

  const [passwordInput, setPasswordInput] = useState("");

  return (
    <>
      <EmailInputContext.Provider value={{ emailInput, setEmailInput }}>
        <PasswordInputContext.Provider
          value={{ passwordInput, setPasswordInput }}
        >
          <LogInFormComponent />
        </PasswordInputContext.Provider>
      </EmailInputContext.Provider>
    </>
  );
}

export default App;
