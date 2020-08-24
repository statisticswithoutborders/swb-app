import React from 'react';
import "./Video.css";
import ReactPlayer from "react-player"

//faunalytics video
function Video() {
  return (
    <div>
      <ReactPlayer className='video'
        url="https://www.youtube.com/watch?v=xFKkTMjQoIw"
      />
    </div>
  )
}
export default Video