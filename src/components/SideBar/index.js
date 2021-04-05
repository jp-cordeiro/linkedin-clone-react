import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import BackgroudnAvatarImage from "../../assets/images/background-avatar.jpg";
import { avatar } from "../../services/firebase/users";

import "./sidebar.scss";

const SideBar = () => {
  const topics = ["reactjs", "nodejs", "vuejs", "react-native"];
  const user = useSelector((state) => state.usersReducer.currentUser);
  console.log(user);

  const recentItem = (topic, index) => (
    <div key={index} className="sidebar__recent-item">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <img src={BackgroudnAvatarImage} alt="" />
      <div className="sidebar__top">
        <Avatar src={avatar(user.uid)} className="sidebar__avatar" />
        <h2>{user.username}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Quem viu seu perfil</p>
          <p className="sidebar__stat-number">xxx</p>
        </div>
        <div className="sidebar__stat">
          <p>Viram sua publicação</p>
          <p className="sidebar__stat-number">xxxx</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recentes</p>
        {topics.map((topic, index) => recentItem(topic, index))}
      </div>
    </div>
  );
};

export default SideBar;
