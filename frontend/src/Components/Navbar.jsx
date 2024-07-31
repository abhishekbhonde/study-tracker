import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="text-black flex justify-between items-center border-b ">
      <ul>
        <h1 className="text-xl font-semibold ml-[300px]">
          <a href="/">StudyTracker</a>
        </h1>
      </ul>
      <ul className="flex justify-end gap-[150px] mt-[15px] h-[50px] p-[10px] w-full items-center ">
        <li className="mb-[10px]">
          <Link
            className="text-xl border p-[10px] rounded-lg hover:shadow-lg  hover:shadow-stone-100"
            to="/signup"
          >
            Signup
          </Link>
        </li>
        <li className="mr-[200px] mb-[10px]">
          <Link
            className="text-xl border p-[10px] rounded-lg hover:shadow-lg hover:shadow-stone-100"
            to="/signin"
          >
            signin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
