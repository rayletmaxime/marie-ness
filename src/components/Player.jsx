import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaSpotify } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import "./Player.css";

export default function Player() {
  return (
    <div className="bg-gray-800 w-full fixed bottom-0 flex justify-around">
      <div className="hidden lg:flex items-center gap-3">
        <img
          src="./picmusic.webp"
          alt="Album Marie Ness"
          className="w-14 rounded-lg"
        />
        <div className="flex flex-col">
          <h3 className="text-white font-semibold">Dans le Noir</h3>
          <h6 className="text-gray-400 ">Marie Ness</h6>
        </div>
      </div>
      <div className="w-[80vh]">
        <AudioPlayer autoPlay volume={0.1} src="./player.mp3" />
      </div>
      <div className="hidden xl:flex items-center gap-4 pr-8">
        <a
          href="https://open.spotify.com/intl-fr/track/36ydV0axHE9Tiigkx3TTme"
          target="_blank"
        >
          <FaSpotify className="text-[45px] text-white hover:text-green-500/80" />
        </a>
        <a href="https://www.youtube.com/watch?v=UysWtwk7VrA" target="_blank">
          <IoLogoYoutube className="text-[48px] text-white hover:text-red-500/80" />
        </a>
      </div>
    </div>
  );
}
