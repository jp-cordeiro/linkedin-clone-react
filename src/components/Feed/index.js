import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "../InputOptions";

import "./feed.scss";

const Feed = () => {
  const iconOptions = [
    {
      Icon: ImageIcon,
      title: "Foto",
      color: "#7085f9",
    },
    {
      Icon: SubscriptionsIcon,
      title: "Vídeo",
      color: "#e7a33b",
    },
    {
      Icon: EventNoteIcon,
      title: "Evento",
      color: "#c0cbcD",
    },
    {
      Icon: CalendarViewIcon,
      title: "Escrever artigo",
      color: "#7fc15e",
    },
  ];

  return (
    <div className="feed">
      <div className="feed__input-container">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="feed__options">
          {iconOptions.map((icon, index) => (
            <InputOption
              key={index}
              Icon={icon.Icon}
              title={icon.title}
              color={icon.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
