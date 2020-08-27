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
    <div className = "Video-large` `Video-small`">
      <ReactPlayer width= {props.width} height={props.height} className={classList} url={props.url} />
    </div>
  );
}
export default Video;
