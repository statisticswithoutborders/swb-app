import React from "react";
import "./Video.css";
import ReactPlayer from "react-player";

function Video(props) {
  let classList = "";
  if (props.large) {
    classList += ` Video-large`;
  }
  if (props.small) {
    classList += ` Video-small`;
  }

  return (
      <ReactPlayer controls
      height={props.height} width={props.width}
      className={classList}
        url={props.url}
      />
    
  );
}
export default Video;
