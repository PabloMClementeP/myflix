interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const videoId = props.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&rel=0&modestbranding=1`;

  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
      <iframe
        src={videoUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="YouTube video player"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
