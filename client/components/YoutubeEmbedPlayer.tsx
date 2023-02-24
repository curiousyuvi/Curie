import React from "react";
import useRoomMusic from "../hooks/useRoomMusic";
import YouTube from "react-youtube";

const YoutubeEmbedPlayer = () => {
  const debugEmbed = false;
  const { setPlayer, setPaused, currentTrack, setProgress, setDuration } =
    useRoomMusic();

  const handleStateChange = (event: any) => {
    console.log("state change", event);
    switch (event.data) {
      case 1: {
        setPaused(false);
        break;
      }
      default:
        setPaused(true);
    }
  };

  const _onReady = (event: any) => {
    setPlayer(event.target);
    // event.target.pauseVideo();
    setDuration(event.target.getDuration());
    setProgress(event.target.getCurrentTime());
  };
  const opts = {
    height: debugEmbed ? "400" : "1",
    width: debugEmbed ? "600" : "1",
    playerVars: {
      enablejsapi: 1 as 0 | 1,
      autoplay: 1 as 0 | 1,
      playsinline: 1 as 0 | 1,
      // loop: 1 as 0 | 1,
    },
  };
  return (
    <div className={`fixed ${debugEmbed ? "" : "opacity-0"}`}>
      <YouTube
        videoId={currentTrack.id}
        opts={opts}
        onReady={_onReady}
        onStateChange={handleStateChange}
      />
    </div>
  );
};

export default YoutubeEmbedPlayer;
