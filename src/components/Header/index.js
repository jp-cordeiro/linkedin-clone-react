import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

import Logo from "../../assets/images/logo.svg";

import "./header.scss";
import HeaderOptions from "../HeaderOptions";

const Header = () => {
  const options = [
    {
      Icon: HomeIcon,
      title: "Início",
    },
    {
      Icon: SupervisorAccountIcon,
      title: "Inha rede",
    },
    {
      Icon: BusinessCenter,
      title: "Vagas",
    },
    {
      Icon: ChatIcon,
      title: "Mensagens",
    },
    {
      Icon: NotificationsIcon,
      title: "Notificações",
    },
    {
      title: "Eu",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4E03AQGfo-A4O3ELfQ/profile-displayphoto-shrink_100_100/0/1576532321076?e=1622678400&v=beta&t=WBDG2p5ZtiK5Ng7F98PSs13IDDy1WGrQkCJr9gxRGDM",
    },
  ];
  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="Linkedin" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        {options.map((option) => (
          <HeaderOptions {...option} />
        ))}
      </div>
    </div>
  );
};

export default Header;
