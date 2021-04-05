import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import CustomButton from "../../../components/Form/CustomButton";
import CustomInput from "../../../components/Form/CustomInput";

import useForm from "../../../custom-hooks/useForm";

import { Creators as UserActions } from "../../../store/ducks/users";
import firebase, {
  auth,
  createUserProfileDocument,
} from "../../../firebase/firebase.utils";

import "./sign-up.scss";

function SignUpForm() {
  const username = useForm();
  const email = useForm();
  const password = useForm();
  const profilePic = useForm();
  const dispatch = useDispatch();

  const customInputStyle = {
    backgroundColor: "rgba(185, 216,232,0.5)",
  };

  const cleanForm = useCallback(() => {
    const valueReset = {
      target: {
        value: "",
      },
    };
    username.onChange(valueReset);
    email.onChange(valueReset);
    password.onChange(valueReset);
  }, [username, email, password]);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        auth
          .createUserWithEmailAndPassword(email.value, password.value)
          .then(async (userAuth) => {
            console.log(auth.currentUser);
            const currentUserFirebase = {
              ...auth.currentUser,
              username: username.value,
            };
            const userRef = await createUserProfileDocument(
              currentUserFirebase
            );
            userRef.onSnapshot((snapshot) => {
              console.log(snapshot.data());
            });

            userAuth.user
              .updateProfile({
                displayName: username.value,
              })
              .then(() => {
                dispatch(
                  UserActions.setUser({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: username.value,
                  })
                );
              });
          })
          .catch((error) => alert(error.message));
      } catch (error) {
        console.log(error);
      } finally {
        // cleanForm();
      }
    },
    [cleanForm, username, email, password]
  );

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <CustomInput
        name="username"
        type="text"
        label="Seu nome completo"
        style={customInputStyle}
        required
        {...username}
      />
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
      <CustomButton>Cadastrar</CustomButton>
    </form>
  );
}

export default SignUpForm;
