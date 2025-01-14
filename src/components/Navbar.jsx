import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
  // const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(false);

  function showMenu() {
    setMenu(true);
    document.body.style.overflow = "hidden";
    // if (menu) {
    // } else {
    //   document.body.style.overflow = "hidden";
    // }
  }
  function hideMenu() {
    setMenu(false);
    document.body.style.overflow = "auto";
    // if (menu) {
    // } else {
    //   document.body.style.overflow = "hidden";
    // }
  }

  return (
    <div className="overflow-y-hidden">
      <div className="md:h-[70px] px-10 flex justify-between bg-[#000000]">
        <h1 className="text-2xl md:text-3xl py-2 md:my-2 text-white">
          <Link to="/">Adoche's</Link>

          <span className=" font-bold text-white">
            {/* <i class="bx bx-code"></i> */}
          </span>
        </h1>

        <ul className="md:flex hidden">
          <li
            className="text-white font-medium m-5 cursor-pointer"
            onClick={() => hideMenu(false)}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className="text-white font-medium m-5 cursor-pointer"
            onClick={() => hideMenu(false)}
          >
            <Link to="/projects">Projects</Link>
          </li>
          {/* <li className="text-white font-medium m-5 cursor-pointer">
            <Link to="/resume">Resume</Link>
          </li> */}
        </ul>

        <div className="h-[50px]">
          <Link to="/contact">
            <button
              onClick={() => hideMenu(false)}
              className="bg-white md:block hidden font-medium my-3 p-3 cursor-pointer rounded-[1rem]"
            >
              Contact Me
            </button>
          </Link>
        </div>
        {/* sidebar */}
        <span className="md:hidden block text-4xl mt-1">
          <span className={menu ? "hidden" : "block"}>
            <i onClick={() => showMenu()} class="bx bx-menu-alt-right"></i>
          </span>
          <span
            className={menu ? "block" : "hidden"}
            onClick={() => hideMenu()}
          >
            <i class="bx bx-x"></i>
          </span>
        </span>
      </div>
      {menu ? (
        <div
          onClick={() => hideMenu()}
          className="fixed bg-black/50 w-screen h-screen"
        ></div>
      ) : null}

      <div
        className={
          menu
            ? "w-[70%] right-[0%] duration-500 bg-black h-screen fixed"
            : "w-[70%] right-[-100%] duration-500 bg-black h-screen fixed"
        }
      >
        <div className="mt-[7rem] flex justify-center items-center">
          <ul>
            <li
              onClick={() => hideMenu(false)}
              className="text-white text-center font-medium mt-[2rem] cursor-pointer"
            >
              <Link to="/about">About</Link>
            </li>
            <li
              onClick={() => hideMenu(false)}
              className="text-white text-center font-medium mt-[2rem] cursor-pointer"
            >
              <Link to="/resume">Resume</Link>
            </li>
            <li
              onClick={() => hideMenu(false)}
              className="text-white text-center font-medium mt-[2rem] cursor-pointer"
            >
              <Link to="/projects">Projects</Link>
            </li>
            <li
              onClick={() => hideMenu(false)}
              className="text-white text-center font-medium mt-[2rem] cursor-pointer"
            >
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
