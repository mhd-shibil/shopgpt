import { useEffect, useState } from "react";

const YoutubeVideoPlayer = ({ videoLink, startsAt = 0, autoPlay }) => {
  const [youtubeId, setYoutubeId] = useState("");

  useEffect(() => {
    if (videoLink?.split("watch?v=").length > 1)
      setYoutubeId(videoLink?.split("watch?v=")[1]);
  }, [videoLink]);

  return (
    <div className="flex flex-col items-center justify-start w-full">
      {youtubeId ? (
        <iframe
          width="960"
          height="540"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${
            autoPlay ? "1" : "0"
          }&start=${startsAt}&mute=0`}
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
