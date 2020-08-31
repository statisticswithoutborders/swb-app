import React from "react";
import { storiesOf } from "@storybook/react";

import Video from "./Video";


storiesOf("Video", module)
  .add("Video Faunalytics", () => {
    return (
      <Video
     url="https://www.youtube.com/embed/xFKkTMjQoIw"
      />
    );
  })

  .add("Video Volunteer", () => {
    return (
      <Video
     url="https://www.youtube.com/watch?v=1y2-v3W8Ubs&t=1s"
      />
    );
  });
