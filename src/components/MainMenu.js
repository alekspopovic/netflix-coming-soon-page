import React from "react";
import "../styles/MainMenu.css";
import "font-awesome/css/font-awesome.min.css";

function MainMenu() {
  return (
    <ul className="mainMenu">
      <li className="menuItem">
        <i className="fa fa-home menuIcon"></i>
        <span className="menuLabel">Home</span>
      </li>
      <li className="menuItem">
        <i className="fa fa-search menuIcon"></i>
        <span className="menuLabel">Search</span>
      </li>
      <li className="menuItem active">
        <i className="fa fa-play-circle menuIcon"></i>
        <span className="menuLabel">Coming Soon</span>
      </li>
      <li className="menuItem">
        <i className="fa fa-download menuIcon"></i>
        <span className="menuLabel">Downloads</span>
      </li>
      <li className="menuItem">
        <i className="fa fa-bars menuIcon"></i>
        <span className="menuLabel">More</span>
      </li>
    </ul>
  );
}

export default MainMenu;
