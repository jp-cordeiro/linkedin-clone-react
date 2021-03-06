import React from "react";
import { Avatar } from "@material-ui/core";

import "./header-options.scss";

const HeaderOptions = ({ avatar, Icon, title, onClick }) => {
  return (
    <div className="header-options" onClick={() => onClick()}>
      {Icon && <Icon className="header-option__icon" />}
      {avatar && <Avatar className="header-option__icon" src={avatar} />}
      <h3 className="header-option__title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
