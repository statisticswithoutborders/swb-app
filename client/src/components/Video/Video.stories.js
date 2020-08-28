import React from "react";
import { storiesOf } from "@storybook/react";

import Video from "./Video";

//use the height and width props to customize height and width
storiesOf("Video", module)
  .add("Video Faunalytics", () => {
    return (
     
      <Video
      height="90vh" width="80vw"
        url="https://www.youtube.com/watch?v=xFKkTMjQoIw"
      />
    );
  })

  .add("Video Volunteer", () => {
    return (
   
      <Video
      height="65vh" width="65vw"
        url="https://www.youtube.com/watch?v=1y2-v3W8Ubs"
      />
    );
    
  });