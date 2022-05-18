import React, { useState } from "react";
import "./style/Login.css";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();

    if (res.status === 404|| !data) {
      window.alert("Invalid Registration");
    } else if (res.status===500) {
      window.alert("Server unavailable");
    } else {
      window.alert("Login Successful");
      history.goBack;
    }
  };

  return (
    <>
      <div  id="model">
        <form method="POST" className="modal-content animate">
          <div className="container">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="login" onClick={loginUser}>
              Login
            </button>
            <label>
              <input type="checkbox" checked="checked" name="remember" />{" "}
              Remember me
            </label>
          </div>

          <div
            className="container"
            style={{ backgroundColor: "lightgrey", height: "90px" }}
          >
            <button type="button" className="cancelbtn" onClick={history.goBack}>
              Cancel
            </button>
            <span>
            <NavLink to="/signup"><button type="button" className="caabtn">SignUp</button></NavLink>
            </span>
            <span className="psw">
              Forgot <a href="">password?</a>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
