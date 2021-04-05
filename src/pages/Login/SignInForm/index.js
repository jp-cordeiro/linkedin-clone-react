import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../../../components/Form/CustomButton";
import CustomInput from "../../../components/Form/CustomInput";

import useForm from "../../../custom-hooks/useForm";

import firebase from "../../../firebase/firebase.utils";

import "./sign-in.scss";

function SignInForm() {
  const email = useForm();
  const password = useForm();

  const customInputStyle = {
    backgroundColor: "rgba(185, 216,232,0.5)",
  };

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
      } catch (error) {
        console.log(error.message);
      }
    },
    [email, password]
  );

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <CustomInput
        name="email"
        type="email"
        label="E-mail"
        style={customInputStyle}
        required
        {...email}
      />
      <CustomInput
        name="password"
        type="password"
        label="Senha"
        style={customInputStyle}
        required
        {...password}
      />
      <CustomButton>Login</CustomButton>
    </form>
  );
}

export default SignInForm;
