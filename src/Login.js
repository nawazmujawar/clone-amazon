import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
// import { register } from "./serviceWorker";
function Login() {
    
    const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault(); //stop refreshing

    //login logic
      auth.signInWithEmailAndPassword(email, password)
          .then((auth) =>history.push("/"))  .catch(e=>alert(e.message))    ;
  };
  const registerFunc = (event) => {
    event.preventDefault(); //stop refreshing
auth
  .createUserWithEmailAndPassword(email, password)
  .then((auth) => history.push("/"))
  .catch((e) => alert(e.message)); 
    //login logic
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__signInButton" onClick={login}>
            Sign In
          </button>
        </form>
        <p></p>
        <button className="login__regbtn" onClick={registerFunc}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
