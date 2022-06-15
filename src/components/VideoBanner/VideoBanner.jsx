import React from "react";
import background_video from "../../assets/video/shaving.mp4";
import "./VideoBanner.scss";

const VideoBanner = () => {
  return (
    <section>
      <video id="background-video" muted controls>
        <source src={background_video} type="video/mp4" />
      </video>
    </section>
  );
};

export default VideoBanner;
