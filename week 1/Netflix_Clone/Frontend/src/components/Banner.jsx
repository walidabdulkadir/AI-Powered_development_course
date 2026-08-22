import logo from "../assets/image/logo.png";
import heroImg from "../assets/image/banner.jpeg";
import { Play, Info } from "lucide-react";

function Banner() {
  return (
    <div
      className="relative w-full h-135 bg-cover bg-center- bg-no-repeat object-contain text-white shrink-0"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="pl-10 pt-35">
        <img src={logo} alt="logo" className="w-40" />

        <h1 className=" text-3xl font-medium pb-5">Bridgerton</h1>
        <h1 className=" h-30 font-bold tracking-wide">
          Shondaland's Emmy-winning series brings Julia Quinn's novels to life,
          as <br />
          eight siblings seek their perfect match amid Londons's scandals and
          soirees.
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
        <div className="h-20 ">
          {/* decore */}
          {/* fading */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
