import { Avatar } from "@material-ui/core";
import React from "react";
import BackgroudnAvatarImage from "../../assets/images/background-avatar.jpg";

import "./sidebar.scss";

const SideBar = () => {
  const topics = ["reactjs", "nodejs", "vuejs", "react-native"];
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
        <Avatar className="sidebar__avatar" />
        <h2>João Paulo Cordeiro</h2>
        <h4>meuemail@meuemail.com</h4>
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
