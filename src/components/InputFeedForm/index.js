import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Creators as PostsActions } from "../../store/ducks/posts";

function InputFeedForm() {
  const user = useSelector((state) => state.usersReducer.currentUser);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleSendPost = useCallback(
    (event) => {
      event.preventDefault();

      dispatch(
        PostsActions.addPost({
          name: user.username,
          description: user.email,
          message,
          user: user.uid,
        })
      );

      setMessage("");
    },
    [message, dispatch]
  );

  return (
    <form onSubmit={handleSendPost}>
      <input
        value={message}
        onChange={({ target }) => setMessage(target.value)}
        type="text"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default InputFeedForm;
