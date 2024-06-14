import styles from "./LogInFormComponent.module.css";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function LogInFormComponent() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [, , checkIfUserIsLoggedIn, setCheckIfUserIsLoggedIn] =
    useOutletContext();

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  const [, , , , loggedUserInformation, setLoggedUserInformation] =
    useOutletContext();

  const navigate = useNavigate();

  const emailRegex =
    // eslint-disable-next-line no-useless-escape
    /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  async function HandleLogin(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/user/login_verified",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      const result = await response.json();

      if (result.message === "Unauthorized" || response.status === 401) {
        setError("Unauthorized");
      } else {
        const bearerToken = ["Bearer", result.token];

        localStorage.setItem("token", JSON.stringify(bearerToken));

        navigate("/home");

        setCheckIfUserIsLoggedIn(true);

        const responseFetchUser = await fetch("http://localhost:3000/user", {
          mode: "cors",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });

        const loggedUserInformation = await responseFetchUser.json();

        const obj = {
          ...loggedUserInformation,
          loggedUserInformation,
        };

        setLoggedUserInformation(obj);
      }
    } catch (err) {
      console.log(err);
    }
  }

  // useEffect(() => {
  //   fetch("http://localhost:3000/user", {
  //     headers: {
  //       Authorization: localStorage.getItem("token"),
  //     },
  //     mode: "cors",
  //   })
  //     .then((response) => {
  //       if (response.status >= 400) {
  //         throw new Error("Server Error");
  //       }
  //       return response.json();
  //     })
  //     .then((response) => setLoggedInUser(response))
  //     .catch((error) => setError(error))
  //     .finally(() => setLoading(false));
  // }, [setLoggedInUser]);

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {!email.match(emailRegex) && (
              <span className={styles.error}>
                Email does not match required format
              </span>
            )}
            {error === "Unauthorized" && (
              <span className={styles.error}>Unauthorized</span>
            )}
          </div>
          <div className={styles.formContentWrapper}>
            <label htmlFor="password">Password:</label>
            <input
              role="input-password"
              type="password"
              name="password"
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {password.length < 8 && (
              <span className={styles.error}>
                Password must be at least 8 characters long.
              </span>
            )}
          </div>
          <div className={styles.logInButtonContainer}>
            <button className={styles.logInButton}>Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogInFormComponent;
