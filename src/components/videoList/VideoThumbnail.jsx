const VideoThumbnail = ({ videoLink = "" }) => {
  const getThumbanilUrl = () => {
    const youtubeId =
      videoLink.split("watch?v=").length > 1
        ? videoLink.split("watch?v=")[1]
        : "";
    return `https://img.youtube.com/vi/${youtubeId}/sddefault.jpg`;
  };
  return (
    <div>
      <img
        src={getThumbanilUrl()}
        alt="thumbnail"
        width={360}
        height={240}
        className="rounded-lg"
      />
    </div>
  );
};

export default VideoThumbnail;
