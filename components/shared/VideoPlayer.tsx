import React from "react";

type VideoPlayer = {
  src: string;
};

const VideoPlayer = ({ src }: VideoPlayer) => {
  return (
    <div className="relative w-full h-[26vh] sm:h-[40vh] md:h-[50vh]">
      <video
        className="absolute top-0 left-0 w-full "
        src={src}
        autoPlay
        loop
        muted
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
