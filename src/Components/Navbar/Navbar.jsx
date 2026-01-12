import React, { useEffect } from "react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]" : ""
      }`}
    >
      <nav className="relative max-w-[1400px] mx-auto md:h-[14vh] h-[10vh] px-10 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500">O</span>sify
        </Link>

        {/* dekstop menu */}
        <ul className="md:flex items-center  gap-x-15 hidden">
          <li>
            <a
              href="#home"
              className="font-bold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="font-bold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#process"
              className="font-bold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-bold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-5 ">
          <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              className="flex-1 h-[5vh] px-3 focus:outline-none"
              type="text"
              placeholder="search..."
              autoComplete="off"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </div>

          <a className="text-zinc-800 text-2xl" href="">
            <FaHeart />
          </a>
          <a className="text-zinc-800 text-2xl" href="">
            <HiMiniShoppingBag />
          </a>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="text-zinc-800 text-3xl md:hidden"
          >
            {showMenu ? <TbMenu3 /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col gap-y-10 bg-orange-500/15 backdrop-blur-xl shadow-xl
  rounded-xl p-10 items-center md:hidden absolute
  top-[14vh] transform -translate-x-1/2 transition-all duration-500
  ${showMenu ? "left-1/2" : "-left-full"}`}
        >
          <li>
            <a
              href="#home"
              className="font-bold tracking-wider text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="font-bold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#process"
              className="font-bold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-bold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
          <li className="flex p-1 border-2 border-orange-500 rounded-full md:hidden">
            <input
              className="flex-1 h-[5vh] px-3 focus:outline-none"
              type="text"
              placeholder="search..."
              autoComplete="off"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
