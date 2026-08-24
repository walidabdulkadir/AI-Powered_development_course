import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircle } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function Card({ movies }) {
  return (
    <div>
      <img src={movies.poster_path} alt="poster_image" />

      <div>
        <img src={movies.poster_path} alt="poster_image" />

        <div>Badge</div>

        <div className="flex items-center justify-start gap-2">
          <FaCirclePlay size={40} color="white" />
          <BsPlusCircle size={40} color="white" />
          <GoCheckCircle size={40} color="white" />
          <IoIosArrowDropdownCircle size={40} color="white" />
        </div>

        <div className="flex gap-4">
          <span>U/A 16+</span>
          <span>Movie</span>
          <span>HD</span>
        </div>

        <div className="flex gap-3">
          <span className="text-base">Sci-Fi</span>
          <span className="text-base"> • Thrillers</span>
          <span className="text-base"> • Suspense</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
