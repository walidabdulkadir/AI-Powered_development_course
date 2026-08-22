import logo from "../assets/image/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Bell, User2Icon, ChevronDown } from "lucide-react";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return
  });

  return (
    <header className=" transition-all fixed top-0 left-0 w-full z-1000 backdrop-blur-3xl">
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
            <button
              className="text-white cursor-pointer p-5"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search />
            </button>

            {isSearchOpen && (
              <input
                type="text"
                placeholder="movie title..."
                className="bg-gray-400 p-1 transition-all rounded-md border-2 border-solid text-gray-600 focus:outline-0 focus:bg-black focus:text-white placeholder:text-white "
              />
            )}
          </div>

          <button className="text-white relative cursor-pointer p-5">
            <Bell />

            <span className="absolute top-2.5 right-2 w-6 h-6 rounded-4xl border-none text-white font-medium bg-red-700">
              10
            </span>
          </button>

          <div>
            <button
              onClick={() => setIsProfile(!isProfile)}
              className="flex items-center justify-center cursor-pointer p-4 rounded-md text-white "
            >
              <div className=" flex items-center justify-center w-9 h-9 bg-[#564d4d] rounded-md font-medium">
                <User2Icon />
              </div>

              <ChevronDown />
            </button>

            {isProfile && (
              <div className="flex flex-col absolute top-7 right-20 p-2 mt-7 tracking-wide  min-w-40  bg-black border-solid border-2 border-gray-400 rounded-md animate-[slideDown_0.3s_ease-out] [keyframes:slideDown_{0%_{transform:translateY(-100%); opacity:0}_100%_{translateY(0); opacity:1}}]  ">
                <Link className="text-white p-2  cursor-pointer">Account</Link>
                <Link className="text-white p-2 cursor-pointer">
                  Help Center
                </Link>

                <button className="text-white p-2 cursor-pointer border-t-2 w-40 mt-5">
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
