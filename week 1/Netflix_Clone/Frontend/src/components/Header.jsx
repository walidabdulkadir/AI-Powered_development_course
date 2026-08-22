import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User2Icon, ChevronDown } from "lucide-react";

function Header() {
  return (
    <header className=" bg-black fixed top-0 left-0 w-full z-1000 backdrop-blur-2xl">
      <div className="bg-transparent flex items-center justify-center  max-w-1920 ">
        <img
          src={logo}
          alt="logo"
          className="w-20 h-auto shrink-0 opacity-85 mr-5 hover:opacity-100 "
        />

        <nav className="flex items-center justify-center gap-6 tracking-wide">
          <Link className="text-white font-light">Tv Shows</Link>
          <Link className="text-white font-light">Home</Link>
          <Link className="text-white font-light ">My List</Link>
          <Link className="text-white font-light">Browse by Language</Link>
          <Link className="text-white font-light ">New & Popular</Link>
          <Link className="text-white font-light ">Movies</Link>
        </nav>

        <div className="flex items-center justify-center shrink-0 ml-20">
          <div className="relative flex items-center gap-6">
            <button className="text-white cursor-pointer p-5">
              <Search />
            </button>
          </div>

          <button className="text-white relative cursor-pointer p-5">
            <Bell />

            <span className="absolute top-2.5 right-2 w-6 h-6 rounded-4xl border-none text-white font-medium bg-red-700">
              10
            </span>
          </button>

          <div>
            <button className="flex items-center justify-center cursor-pointer p-4 rounded-md text-white ">
              <div className=" flex items-center justify-center w-9 h-9 bg-[#564d4d] rounded-md font-medium">
                <User2Icon />
              </div>

              <ChevronDown />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
