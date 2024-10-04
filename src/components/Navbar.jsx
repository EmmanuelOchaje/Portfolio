import React, { useState } from "react";

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
        <h1 className="text-2xl md:text-4xl md:my-2 text-white">
          Doch
          <span className=" font-bold text-white">
            <i class="bx bx-code"></i>
          </span>
        </h1>

        <ul className="md:flex hidden">
          <li className="text-white font-medium m-5 cursor-pointer">About</li>
          <li className="text-white font-medium m-5 cursor-pointer">
            Projects
          </li>
          <li className="text-white font-medium m-5 cursor-pointer">Resume</li>
        </ul>

        <div className="h-[50px]">
          <button className="bg-white md:block hidden font-medium my-3 p-3 cursor-pointer rounded-[1rem]">
            Contact Me
          </button>
        </div>
        <span className="md:hidden block text-4xl mt-1">
          <i onClick={() => showMenu()} class="bx bx-menu-alt-right"></i>
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
            <li className="text-white text-center font-medium mt-[2rem] cursor-pointer">
              About
            </li>
            <li className="text-white text-center font-medium mt-[2rem] cursor-pointer">
              Projects
            </li>
            <li className="text-white text-center font-medium mt-[2rem] cursor-pointer">
              Resume
            </li>
            <li className="text-white text-center font-medium mt-[2rem] cursor-pointer">
              Contact Me
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
