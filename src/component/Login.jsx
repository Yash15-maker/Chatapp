import React from "react";
import { auth } from "../Firebase";
import firebase from "firebase/compat/app";
import "./css/Button.css";
function Login() {
  function handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <button className="button" onClick={handleSignIn}>
        Sign In With Google
      </button>
    </div>
  );
}

export default Login;
