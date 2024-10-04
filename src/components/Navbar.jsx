import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="h-[70px] px-10 flex justify-between bg-[#000000]">
        <h1 className="text-4xl my-2 text-white">
          Doch
          <span className=" font-bold text-white">
            <i class="bx bx-code"></i>
          </span>
        </h1>

        <ul className="flex">
          <li className="text-white font-medium m-5 cursor-pointer">About</li>
          <li className="text-white font-medium m-5 cursor-pointer">
            Projects
          </li>
          <li className="text-white font-medium m-5 cursor-pointer">Resume</li>
        </ul>

        <div className="h-[50px]">
          <button className="bg-white font-medium my-3 p-3 cursor-pointer rounded-[1rem]">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
