import React, { useState } from "react";

import LogoLogin from "../../assets/images/logo-login.svg";

import "./login.scss";
import SignInForm from "./SignInForm";
import SignUpForm from "./SingUpForm";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="login">
      <img src={LogoLogin} alt="logo-login" />
      {isSignIn ? <SignInForm /> : <SignUpForm />}
      <>
        {isSignIn ? (
          <p onClick={() => setIsSignIn(false)}>Ainda não tem um login?</p>
        ) : (
          <p onClick={() => setIsSignIn(true)}>Voltar</p>
        )}
      </>
    </div>
  );
}

export default Login;
