import { useEffect, useState } from "react";

const YoutubeVideoPlayer = ({ videoLink }) => {
  const [youtubeId, setYoutubeId] = useState("");

  useEffect(() => {
    if (videoLink.split("watch?v=").length > 1)
      setYoutubeId(videoLink.split("watch?v=")[1]);
  }, [videoLink]);

  return (
    <div className="flex flex-col items-center justify-start w-full">
      {youtubeId ? (
        <iframe
          width="1280"
          height="720"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&start=60&mute=0`}
          className="rounded-lg"
          title="YouTube video player"
        />
      ) : (
        // Todo : Update with a skelton
        <div className="w-105 h-60 rounded-lg flex items-center justify-center">
          Loading ...
        </div>
      )}
    </div>
  );
};

export default YoutubeVideoPlayer;
