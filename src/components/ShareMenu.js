import React from "react";
import "../styles/ShareMenu.css";
import close from "../assets/share/close.png";
import copy from "../assets/share/copy.png";
import instagram from "../assets/share/instagram.png";
import message from "../assets/share/message.png";
import messenger from "../assets/share/messenger.png";
import twitter from "../assets/share/twitter.png";
import whatsapp from "../assets/share/whatsapp.png";

function ShareMenu(props) {
  let { toggleShare } = props;

  return (
    <div className="shareMenu">
      <h1 className="shareTitle">Share to...</h1>
      <div className="shareItem">
        <img className="shareIcon" src={whatsapp} alt="whatsapp" />
        <div className="shareText">WhatsApp</div>
      </div>
      <div className="shareItem">
        <img className="shareIcon" src={message} alt="message" />
        <div className="shareText">Messages</div>
      </div>
      <div className="shareItem">
        <img className="shareIcon" src={instagram} alt="instagram" />
        <div className="shareText">Instagram Stories</div>
      </div>
      <div className="shareItem">
        <img className="shareIcon" src={messenger} alt="messenger" />
        <div className="shareText">Messenger</div>
      </div>
      <div className="shareItem">
        <img className="shareIcon" src={twitter} alt="twitter" />
        <div className="shareText">Twitter</div>
      </div>
      <div className="shareItem">
        <img className="shareIcon" src={copy} alt="copy" />
        <div className="shareText">Copy Link</div>
      </div>
      <div className="shareItem">
        <div className="shareText">More Options</div>
      </div>
      <button className="closeButton" onClick={toggleShare}>
        <img className="closeIcon" src={close} alt="close" />
      </button>
    </div>
  );
}

export default ShareMenu;
