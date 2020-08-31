import React from "react";
import { storiesOf } from "@storybook/react";

import Video from "./Video";


storiesOf("Video", module)
  .add("Video Faunalytics", () => {
    return (
      <Video
        height="auto"
        width="100%"
        url="https://www.youtube.com/watch?v=xFKkTMjQoIw"
      />
    );
  })

  .add("Video Volunteer", () => {
    return (
      <Video
        height="auto"
        width="100%"
        url="https://www.youtube.com/watch?v=1y2-v3W8Ubs"
      />
    );
  });
