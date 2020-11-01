import React from "react";
import "../styles/Thumbnail.css";

function Thumbnail(props) {
  let { image } = props;
  return (
    <div className="thumbnail">
      <img
        src={require(`../assets/movies/${image}`)}
        alt="thumbnail"
        className="image"
      />
    </div>
  );
}

export default Thumbnail;
