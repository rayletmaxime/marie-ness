import { PiSpotifyLogo } from "react-icons/pi";
import {
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Socials() {
  return (
    <section className="bg-gray-800" id="discover">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 pb-8 lg:px-12">
        <h2 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">
          Découvrez moi
        </h2>
        <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 ">
          Retrouvez toutes mes compositions et mes dernières actualités sur mes
          différents réseaux sociaux
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="https://www.youtube.com/channel/UCJFYb0aw92a6jNOIn7pz_Qg"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-700 hover:bg-red-500/60 focus:ring-4 focus:ring-gray-800"
          >
            <AiOutlineYoutube className="text-2xl" />
            <p className="px-2">YouTube</p>
          </a>
          <a
            href="https://www.facebook.com/people/MarieNess/100063475206489/"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-700 hover:bg-blue-500/60 focus:ring-4 focus:ring-gray-800"
          >
            <AiOutlineFacebook className="text-2xl" />
            <p className="px-2">Facebook</p>
          </a>
          <a
            href="https://www.instagram.com/_marie_ness_"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-700 hover:bg-orange-500/60 focus:ring-4 focus:ring-gray-800"
          >
            <AiOutlineInstagram className="text-2xl" />
            <p className="px-2">Instagram</p>
          </a>
          <a
            href="https://open.spotify.com/intl-fr/artist/20E46Kk1xblomlcKtd4riI"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-700 hover:bg-green-500/60 focus:ring-4 focus:ring-gray-800"
          >
            <PiSpotifyLogo className="text-2xl" />
            <p className="px-2">Spotify</p>
          </a>
        </div>
      </div>
    </section>
  );
}
