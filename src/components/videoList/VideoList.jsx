import { useRef, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import VideoThumbnail from "./VideoThumbnail";

const VideoList = ({ videos, autoPlay }) => {
  const videoSectionRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  const handleThumbnailClick = (video) => {
    setActiveVideo(video);
    videoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-full w-full overflow-y-scroll no-scrollbar">
      <div
        className="h-[calc(100%-200px)] mt-16 w-full flex items-center justify-center"
        ref={videoSectionRef}
      >
        <VideoPlayer
          videoLink={activeVideo?.url}
          startsAt={activeVideo?.startsAt}
          autoPlay={autoPlay}
        />
      </div>

      <div className=" w-full flex items-center justify-center ">
        <div className="w-full flex justify-center mt-10 gap-6 p-4">
          <div className="flex overflow-x-auto space-x-6">
            {videos?.map((video) => (
              <div key={video.url} onClick={() => handleThumbnailClick(video)}>
                <VideoThumbnail videoLink={video.url} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoList;
