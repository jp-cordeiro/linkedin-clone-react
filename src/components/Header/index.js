import React, { useCallback } from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import Logo from "../../assets/images/logo.svg";
import { auth } from "../../firebase/firebase.utils";
import { Creators as UserActions } from "../../store/ducks/users";

import "./header.scss";
import HeaderOptions from "../HeaderOptions";
import { useDispatch, useSelector } from "react-redux";
import { avatar } from "../../services/firebase/users";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.usersReducer.currentUser);
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
      avatar: avatar(user.uid),
    },
  ];

  const logout = useCallback(async () => {
    dispatch(UserActions.setUser(null));
    await auth.signOut();
  }, []);
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
        {options.map((option, index) => (
          <HeaderOptions key={index} {...option} />
        ))}
        {user ? (
          <HeaderOptions onClick={logout} Icon={ExitToAppIcon} title="Sair" />
        ) : null}
      </div>
    </div>
  );
};

export default Header;
