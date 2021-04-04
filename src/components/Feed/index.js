import React, { useCallback, useEffect, useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewIcon from "@material-ui/icons/CalendarViewDay";
import InputOptionsList from "../InputOptionsList";
import Post from "../Post";

import { db } from "../../firebase/firebase.utils";

import "./feed.scss";
import InputFeedForm from "../InputFeedForm";

const Feed = () => {
  const [posts, setPosts] = useState([]);
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

  const loadPosts = useCallback(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [posts]);

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feed__input-container">
        <div className="feed__input">
          <CreateIcon />
          <InputFeedForm />
        </div>
        <div className="feed__options">
          <InputOptionsList inputOptionsList={iconOptions} />
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <Post key={post.id} {...post.data} />
      ))}
    </div>
  );
};

export default Feed;
