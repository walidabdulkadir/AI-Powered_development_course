import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircle } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function Card({ movies }) {
  return (
    /* flex-shrink-0 (or style flexShrink: 0) keeps the card fixed at w-64 inside the flex row */
    <div
      style={{ flexShrink: 0 }}
      className=" relative group w-64 h-36 bg-neutral-900 rounded-md transition-all duration-300 ease-in-out hover:z-50 hover:scale-125 hover:shadow-2xl hover:shadow-black cursor-pointer"
    >
      <img
        src={`${IMAGE_BASE}${movies?.poster_path}`}
        alt={movies.title}
        className="w-full h-36 object-cover rounded-t-md group-hover:rounded-b-none transition-all duration-300"
      />

      {/* Expanded Hover Details */}
      <div className="hidden group-hover:block  absolute top-full left-0 w-full bg-neutral-900 p-4 rounded-b-md shadow-lg transition-all duration-300 space-y-3">
        <div className="inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
          {movies.badge}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaCirclePlay
              size={32}
              className="text-white hover:opacity-80 cursor-pointer"
            />
            <BsPlusCircle
              size={32}
              className="text-white hover:opacity-80 cursor-pointer"
            />
            <GoCheckCircle
              size={32}
              className="text-white hover:opacity-80 cursor-pointer"
            />
          </div>
          <IoIosArrowDropdownCircle
            size={32}
            className="text-white hover:opacity-80 cursor-pointer"
          />
        </div>

        <div className="flex gap-4 text-xs font-semibold text-neutral-300">
          <span className=" px-1 py-0.5 text-[10px]">
            {movies.matureRating}
          </span>
          <span>{movies.category}</span>
          <span className=" px-1 text-[10px] rounded">{movies.quality}</span>
        </div>

        <div className="flex gap-2 text-xs text-neutral-400">
          {/* {movies.map((genres, index) => {})} */}
          <span>Sci-fic</span>
          <span>•</span>
          <span>Thrillers</span>
          <span>•</span>
          <span>Suspense</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
