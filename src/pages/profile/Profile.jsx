import React from "react";
import "./profile.css";
import FeedCollection from "../../components/feedCollection/FeedCollection.jsx";
import Leftbar from "../../components/leftbar/Leftbar.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
import Topbar from "../../components/topbar/Topbar.jsx";

export default function Profile() {
  return (
    <>
      <Topbar />

      <div className="profile">
        <Leftbar />
        <div className="profileRightbar">
          <div className="profileRightbarTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt="img"
              ></img>
              <img
                className="profilePicture"
                src="assets/profile.jpg"
                alt="img"
              ></img>
            </div>
            <div className="profileInfo">
              <h4 className="profileTitle">Pritam Tamang</h4>
              <span className="profileDesc">Fucking ambitious and driven</span>
            </div>
          </div>
          <div className="rightbarBottom">
            <FeedCollection />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
