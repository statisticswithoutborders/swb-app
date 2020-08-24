import React from 'react';
import "./Video.css";
import ReactPlayer from "react-player"


function Video(props) {
  let classList=""
    if (props.large) {
      classList+= ` video-large`
    }
    if (props.small) {
      classList+= ` video-small`
    }
  return (
    <div>
      <ReactPlayer width= {props.width} height={props.height} className={classList} url={props.url} />
    </div>
  )
}
export default Video