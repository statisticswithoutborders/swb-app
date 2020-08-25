import React from "react";
import { storiesOf } from "@storybook/react";

import Video from "./Video";

storiesOf("Video", module)
  .add("Video Faunalytics", () => {
    return (
      <Video
        large
        width="900px"
        height="500px"
        url="https://www.youtube.com/watch?v=xFKkTMjQoIw"
      />
    );
  })

  .add("Video Volunteer", () => {
    return (
      <Video
        small
        width="675px"
        height="355px"
        url="https://www.youtube.com/watch?v=1y2-v3W8Ubs"
      />
    );
  });
