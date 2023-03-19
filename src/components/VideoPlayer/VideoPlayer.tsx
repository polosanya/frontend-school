import { useEffect, useRef } from "react";
import ReactHlsPlayer from "react-hls-player";
import { useLocalStorage } from "../../helpers/useLocalStorage";

type Props = {
  link: string;
};

const VideoPlayer: React.FC<Props> = ({ link }) => {
  const playerRef = useRef<HTMLVideoElement>(null);
  const [videoProgress, setVideoProgress] = useLocalStorage<number>(link, 0);

  useEffect(() => {
    if (videoProgress !== 0 && playerRef.current) {
      playerRef.current.currentTime = videoProgress;
    }

    const handleBeforeUnload = () => {
      if (playerRef.current) {
        const newTime = playerRef.current.currentTime;

        if (newTime !== 0 && newTime !== videoProgress) {
          setVideoProgress(newTime);
        }
      }
    };

    const handleUnload = () => {
      if (playerRef.current) {
        const newTime = playerRef.current.currentTime;

        if (newTime !== 0 && newTime !== videoProgress) {
          setVideoProgress(newTime);
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("unload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("unload", handleUnload);
    };
  }, [playerRef, setVideoProgress, videoProgress, link]);

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
