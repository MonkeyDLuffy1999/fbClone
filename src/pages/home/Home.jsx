import React from "react";
import FeedCollection from "../../components/feedCollection/FeedCollection.jsx";
import Leftbar from "../../components/leftbar/Leftbar.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
import Topbar from "../../components/topbar/Topbar.jsx";
import "./home.css"

export default function home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Leftbar/>
        <FeedCollection/>
        <Rightbar />

      </div>
    </>
  );
}
