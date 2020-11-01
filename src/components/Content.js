import React from "react";
import "../styles/Content.css";

function Content(props) {
  let { announcement, title, text, tags } = props;

  return (
    <div className="content">
      <div className="announcement">{announcement}</div>
      <h1 className="title">{title}</h1>
      <p className="text">{text}</p>
      <ul className="tags">
        {tags.map(function (tag) {
          return (
            <li key={tag} className="tag">
              {tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Content;
