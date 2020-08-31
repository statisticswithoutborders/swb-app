import React from "react";
import "./Video.css";
import ReactPlayer from "react-player";

function Video(props) {

  return (
      <ReactPlayer controls
      min-height="500px" width="100%"
        url={props.url}
      />
    
  );
}
export default Video;
