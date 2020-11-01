import React from "react";
import "../styles/Card.css";
import Thumbnail from "./Thumbnail";
import ControlBar from "./ControlBar";
import Content from "./Content";

function Card(props) {
  let { movie } = props;

  return (
    <div className="card">
      <Thumbnail image={movie.image} />
      <ControlBar logo={movie.logo} />
      <Content
        title={movie.title}
        announcement={movie.announcement}
        text={movie.text}
        tags={movie.tags}
      />
    </div>
  );
}

export default Card;
