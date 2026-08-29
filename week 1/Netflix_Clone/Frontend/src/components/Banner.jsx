import logo from "../assets/image/logo.png";
// import heroImg from "../assets/image/banner.jpeg";
import { Play, Info } from "lucide-react";
import { movieInstances } from "../utility/movieInstances";
import requests from "../utility/requestUrl";
import { useEffect, useState } from "react";
const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [bannerImage, setBannerImage] = useState({});

  useEffect(() => {
    async function fetchBannerImage() {
      const request = await movieInstances.get(requests.fetchNetflixOriginals);
      setBannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ],
      );
    }
    fetchBannerImage();
  }, []);

  // console.log(bannerImage);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="relative w-full h-135 bg-cover bg-center- bg-no-repeat object-contain text-white shrink-0"
      style={{
        backgroundImage: `url("${BANNER_BASE}${bannerImage.backdrop_path}")`,
      }}
    >
      <div className="pl-10 pt-35">
        <img src={logo} alt="logo" className="w-40" />

        <h1 className=" text-3xl font-medium pb-5">
          {bannerImage?.original_name}
        </h1>
        <h1 className=" h-30 font-bold tracking-wide">
          {truncate(bannerImage?.overview, 120)}
        </h1>
        <div className="flex gap-6 mb-7">
          <button className=" outline-none rounded-md font-bold h-12 tracking-wide p-4 bg-white text-black flex items-center justify-center gap-3 mb-7 hover:text-white hover:bg-black hover:transition-all duration-75">
            <Play size={24} />
            Play
          </button>
          <button className=" outline-none rounded-md font-bold h-12 tracking-wide p-4 bg-white text-black flex  items-center justify-center gap-3 mb-7 hover:text-white hover:bg-black hover:transition-all duration-75">
            <Info size={24} />
            My Lists
          </button>
        </div>
        {/* fading */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

export default Banner;
