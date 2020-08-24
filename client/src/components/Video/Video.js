import React from 'react';
import "./Video.css";
import ReactPlayer from "react-player"

function Video() {
  return (
    <div>
      <ReactPlayer
        url="https://swb.wildapricot.org/resources/Videos/swb_2_org_structure.mp4"
      />
    </div>
  )
}
export default Video