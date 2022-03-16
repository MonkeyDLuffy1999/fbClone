import React from "react";
import "./rightbar.css";
import { Celebration } from "@mui/icons-material";
import { Users } from "../../data";
import Online from "../online/Online";

export default function Rightbar({profile}) {
  const Homepage = () => {
    return (
      <>
        <div className="rightBar-top">
          <div className="birthday">
            <Celebration htmlColor="orange" className="birthdayIcon" />
            <span>
              <b>Pola Foster</b> and <b>3 other friends</b> have a birthday
              today.
            </span>
          </div>
          <div>
            <img
              className="adImage"
              src="https://www.blockchain.com/static/img/home/opengraph.png"
              alt="img"
            ></img>
          </div>
        </div>

        <div className="rightBar-bottom">
          <span className="onlineTitle">Contacts</span>
          <div>
            <ul className="contactList">
              {Users.map((u) => (
                <Online key={u.id} user={u} />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  };

  const Profilepage = ({ user }) => {
    return (
      <>
        <div className="userInfo">
          <span className="userInfoTitle"> User Information</span>
          <div className="userInfoList">
            <div className="userInfoDesc">
              <span className="key">City:</span>
              <span className="value">Melbourne</span>
            </div>
            <div className="userInfoDesc">
              <span className="key">From:</span>
              <span className="value">Kathmandu</span>
            </div>
            <div className="userInfoDesc">
              <span className="key">Relationship:</span>
              <span className="value">Single</span>
            </div>
          </div>
        </div>
        <div className="userFollowings">
          <span className="userInfoTitle">User friends</span>
          <div className="userFollowingsList">
            {Users.map((u) => (
              <div className="userFollowingsFriend">
                <img
                  className="userFollowingsImg"
                  src={u.profilePicture}
                  alt=""
                ></img>
                <span className="userFollowingsName">{u.username}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
      {profile ? <Profilepage /> : <Homepage />}
        
      </div>
    </div>
  );
}
