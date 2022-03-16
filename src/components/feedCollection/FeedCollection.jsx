import React from "react";
import Feed from "../feed/Feed";
import Posts from "../posts/Posts";
import "./feedCollection.css";
import { PostsCollection, Users } from "../../data.js";

export default function FeedCollection() {
  return (
    <div className="feedCollection">
      <Feed className="feed" />
      {PostsCollection.map((p) =>
        Users.map(
          (u) => u.id === p.userId && <Posts key={p.id} post={p} user={u} />
        )
      )}
    </div>
  );
}
