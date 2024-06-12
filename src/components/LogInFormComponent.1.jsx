import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

export function LogInFormComponent() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [, , IsUserLoggedIn, setIsUserLoggedIn] = useOutletContext();

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  const [, , , , loggedInUser, setLoggedInUser] = useOutletContext();

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

      // console.log(result);
      if (result.message === "Unauthorized") {
        setError(result.message);
      } else {
        const bearerToken = ["Bearer", result.token];

        localStorage.setItem("token", JSON.stringify(bearerToken));

        navigate("/home");

        setIsUserLoggedIn(true);

        try {
          const response = await fetch("http://localhost:3000/user", {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
            mode: "cors",
          });

          //     .then((response) => {
          if (response.status >= 400) {
            throw new Error("Server Error");
          }
          return response.json();
        } finally {
        }
      }
    } finally {
    }
  }
  try {
  } catch (err) {
    //
  }
}
