import React, { useState } from "react";
import "../styles/ControlBar.css";
import "font-awesome/css/font-awesome.min.css";
import ShareMenu from "./ShareMenu";

function ControlBar(props) {
  let { logo } = props;

  const [isRemindMeChecked, setReminder] = useState(false);
  const [isShareVisible, setShare] = useState(false);

  return (
    <div className="controlBar">
      <img
        src={require(`../assets/movies/${logo}`)}
        alt="logo"
        className="titleLogo"
      />
      <div className="controls">
        <div
          className="control remindMe"
          onClick={() => {
            setReminder(!isRemindMeChecked);
          }}
        >
          {!isRemindMeChecked && <i className="icon fa fa-bell"></i>}
          {isRemindMeChecked && (
            <i className="icon fa fa-check remindMeChecked"></i>
          )}
          <span
            className={`controlLabel ${
              isRemindMeChecked ? "remindMeChecked" : ""
            }`}
          >
            Remind Me
          </span>
        </div>
        <div
          className="control share"
          onClick={() => {
            setShare(!isShareVisible);
          }}
        >
          <i
            className={`icon fa fa-share-alt ${
              isShareVisible ? "shareChecked" : ""
            }`}
          ></i>
          <span
            className={`controlLabel ${isShareVisible ? "shareChecked" : ""}`}
          >
            Share
          </span>
        </div>
      </div>

      {isShareVisible && (
        <ShareMenu toggleShare={() => setShare(!isShareVisible)} />
      )}
    </div>
  );
}

export default ControlBar;
