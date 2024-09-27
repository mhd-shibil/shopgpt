import { useRef, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import VideoThumbnail from "./VideoThumbnail";

const VideoList = () => {
  const videoSectionRef = useRef(null);

  const videoList = [
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=a3Ue-LN5B9U",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=e1BHIY9p2WU",
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=uZ2eNBNYVww",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=uZ2eNBNYVww",
    },
    {
      id: 5,
      url: "https://www.youtube.com/watch?v=uZ2eNBNYVww",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(videoList[0]);

  const handleThumbnailClick = (video) => {
    setActiveVideo(video);
    videoSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-full w-full overflow-y-scroll no-scrollbar">
      <div
        className="h-[calc(100%-100px)] w-full flex items-center justify-center"
        ref={videoSectionRef}
      >
        <VideoPlayer videoLink={activeVideo.url} />
      </div>

      <div className=" w-full flex items-center justify-center ">
        <div className="w-full flex justify-center mt-6 gap-6 p-4">
          <div className="flex overflow-x-auto space-x-6">
            {videoList.map((video) => (
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
