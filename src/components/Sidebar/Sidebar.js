import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./Sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.setaswall.com/wp-content/uploads/2017/06/Linkedin-Backgrounds-14-1400-x-350-340x220.png"
          alt=""
        />
        {user.photoURL ? (
          <Avatar src={user.photoURL} className="sidebar__avatar" />
        ) : (
          <Avatar src="" className="sidebar__avatar" />
        )}
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("reactjs")}
        {recentItem("reactjs")}
        {recentItem("reactjs")}
        {recentItem("reactjs")}
      </div>
    </div>
  );
};

export default Sidebar;
