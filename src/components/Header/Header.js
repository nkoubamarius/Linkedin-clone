import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn.icon-icons.com/icons2/642/PNG/512/linkedin_icon-icons.com_59208.png"
          alt="Linkedin logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Recherche" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Work" Icon={BusinessCenterIcon} />
        <HeaderOption title="Chat" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        {console.log(user)}
        <HeaderOption
          onClick={logoutOfApp}
          avatar={user.photoURL}
          title={user.displayName}
        />
      </div>
    </div>
  );
};

export default Header;
