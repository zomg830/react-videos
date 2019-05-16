import React from "react";
import { connect } from "react-redux";

import GoogleAuth from "./GoogleAuth";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui segment embed">
        <iframe title="player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default VideoDetail;
