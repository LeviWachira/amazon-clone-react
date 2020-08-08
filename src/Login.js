import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //   logged in, redirect to homepage...
        history.push("/");
      })
      .catch((err) => alert(err.message));
    setEmail("");
    setPassword("");
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //   created a user and logged in, redirect to homepage...
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies and our Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
