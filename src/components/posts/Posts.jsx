import {
  MoreVert,
  ThumbUp,
  Favorite,
  EmojiEmotions,
  ThumbUpOffAlt,
  ChatBubbleOutline,
  ReplyOutlined,
} from "@mui/icons-material";
import React from "react";
import "./posts.css";
// import { Users } from "../../data.js";

export default function Posts({ post, user }) {
  const [like, setLike] = React.useState(post.like);
  const [isLiked, setIsLiked] = React.useState(false);

  const likeHandler = () => {
    setLike(isLiked?like-1:like+1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <img
            className="post-profilepic"
            src={user.profilePicture}
            alt="img"
          ></img>
          <div>
            <span className="post-name">
              {user.username}
              {/* using filter
          {Users.filter((u)=>(u.id ===newPost?.userId)[0].username)} */}
            </span>
            <span className="post-date">{post.date}</span>
          </div>
          <MoreVert className="postTopRight" />
        </div>

        <div className="postCenter">
          <div className="postCenter-desc">{post?.desc}</div>
          <img className="postCenter-img" src={post.photo} alt="img"></img>
          <hr className="centerHr"></hr>
        </div>

        <div className="postBottom">
          <div className="postBottom-count">
            <div className="postBottom-reaction">
              <ThumbUp className="postBottom-emote one" />
              <Favorite className="postBottom-emote two" />
              <EmojiEmotions className="postBottom-emote three" />
              <span className="postBottom-emote count">{like}</span>
            </div>
            <span className="commentsCount">{post.comment} Comments</span>
          </div>
          <hr className="centerHr"></hr>
          <div className="postBottom-interaction">
            <div className="reactions" onClick={likeHandler}>
              <ThumbUpOffAlt className="reactions-icon" />
              <span className="reactions-text">Like</span>
            </div>
            <div className="reactions">
              <ChatBubbleOutline className="reactions-icon" />
              <span className="reactions-text">Comment</span>
            </div>
            <div className="reactions">
              <ReplyOutlined className="reactions-icon" />
              <span className="reactions-text">Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
