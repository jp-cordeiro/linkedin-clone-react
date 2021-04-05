import React from "react";
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

import "./post.scss";
import InputOptionsList from "../InputOptionsList";
import { avatar } from "../../services/firebase/users";

function Post({ name, description, message, user }) {
  const iconOptions = [
    {
      Icon: ThumbUpAltOutlinedIcon,
      title: "Foto",
      color: "gray",
    },
    {
      Icon: ChatOutlinedIcon,
      title: "Vídeo",
      color: "gray",
    },
    {
      Icon: ShareOutlinedIcon,
      title: "Evento",
      color: "gray",
    },
    {
      Icon: SendOutlinedIcon,
      title: "Escrever artigo",
      color: "gray",
    },
  ];
  return (
    <div>
      <div className="post">
        <div className="post__header">
          <Avatar src={avatar(user)} />
          <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="post_body">
          <p>{message}</p>
        </div>

        <div className="post__buttons">
          <InputOptionsList inputOptionsList={iconOptions} />
        </div>
      </div>
    </div>
  );
}

export default Post;
