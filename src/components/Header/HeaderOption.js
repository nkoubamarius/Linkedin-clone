import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";

const HeaderOption = ({ avatar, title, Icon, onClick }) => {
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar src={avatar} alt="avatar" className="headerOption__icon" />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
