import styles from "./LogInFormComponent.module.css";
import { useContext } from "react";
import { EmailInputContext, PasswordInputContext } from "../App";
// import { Link } from "react-router-dom";

function LogInFormComponent() {
  const { emailInput, setEmailInput } = useContext(EmailInputContext);

  const { passwordInput, setPasswordInput } = useContext(PasswordInputContext);

  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  async function HandleLogin(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailInput,
          passwordInput,
        }),
      });

      const result = await response.json();

      const bearerToken = ["Bearer", result.token];

      localStorage.setItem("token", JSON.stringify(bearerToken));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.logInFormWrapper}>
      <div className={styles.logInFormContainer}>
        <div className={styles.logInFormPolicyContent}>
          <h3 className={styles.logInFormWelcome}>
            Welcome back to Bulgarian!
          </h3>
          <p data-testid="logInFormPrivacy">
            By continuing, you are agree to our{" "}
            <a className={styles.logInFormLink}>User Agreement</a> and{" "}
            <a className={styles.logInFormLink}>Privacy Policy.</a>
          </p>
        </div>
        <form className={styles.logInForm} onSubmit={HandleLogin}>
          <div className={styles.formContentWrapper}>
            <label htmlFor="email">Email:</label>
            <input
              role="input-email"
              type="email"
              name="email"
              minLength={5}
              maxLength={30}
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required
            />
            {!emailInput.match(emailRegex) && (
              <span className={styles.error}>
                Email does not match required format
              </span>
            )}
          </div>
          <div className={styles.formContentWrapper}>
            <label htmlFor="password">Password:</label>
            <input
              role="input-password"
              type="password"
              name="password"
              minLength={8}
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              required
            />
            {passwordInput.length < 8 && (
              <span className={styles.error}>
                Password must be at least 8 characters long.
              </span>
            )}
          </div>
          <div className={styles.logInButtonContainer}>
            <button className={styles.logInButton}>Log in</button>
          </div>
          {/* <p data-testid="logInFormTextAndLink">
            Don&apos;t an account yet?{" "}
            <Link className={styles.logInFormLink} to="/account/signup">
              Sign Up Now
            </Link>
          </p> */}
        </form>
      </div>
    </div>
  );
}

export default LogInFormComponent;
