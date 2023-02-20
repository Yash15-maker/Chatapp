import React from "react";
import { auth } from "../Firebase";
import firebase from "firebase/compat/app";
// import GoogleAuthProvider from "firebase/auth";
import './css/Button.css'
function Login() {
  function handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div className="div-button">
      <button className="button" onClick={handleSignIn}>Sign In With Google</button>
    </div>
  );
}

export default Login;
