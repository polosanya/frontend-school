import { useEffect, useRef } from "react";
import ReactHlsPlayer from "react-hls-player";

type Props = {
  link: string;
};

const VideoPlayer: React.FC<Props> = ({ link }) => {
  const playerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (playerRef.current) {
    //   playerRef.current.currentTime = 60;
    }
  }, [playerRef]);

  return (
    <ReactHlsPlayer
      src={link}
      autoPlay={false}
      controls={true}
      width="60%"
      height="auto"
      playerRef={playerRef}
    />
  );
};

export default VideoPlayer;
