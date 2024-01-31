import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiSearch, CiSettings, CiGrid42 , CiBoxList , CiHome , CiCompass1 } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { BsClockHistory } from "react-icons/bs";
import Logo from "./Logo";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between px-4 text-[#005B41]  bg-[#163020]">
      <nav className="flex items-center justify-between w-full">
        <div className="mr-4 p-3">
          <Link to="/">
            <Logo width="100" /> <span className="text-white">YugTube.com</span>
          </Link>
        </div>

        <div className="flex m-auto text-2xl font-bold items-center justify-between ">
          <div className="relative">
            <input
              className="rounded-3xl p-2 ps-5 pe-12 font-l mx-2"
              type="text"
            />
            <CiSearch className=" bg-[#232D3F]  text-white p-1 size-10 rounded-full border border-[#005B41] absolute top-1 right-3 hover:bg-black hover:border-[#005B41]" />
          </div>

          <ul className="flex m-auto text-2xl font-bold items-center justify-between gap-2 ">
            <li>
              <NavLink to="/" className={({ isActive }) => `text-[#005B41]  ${isActive?'text-white ':''}`}>
                <CiHome  className="size-10 rounded-full p-2 bg-[#232D3F]  " />
              </NavLink>
            </li>
            <li>
              <NavLink to="/stories" className={({ isActive }) => `text-[#005B41]  ${isActive?'text-white ':''}`}>
                <BsClockHistory className="size-10 rounded-full p-2 bg-[#232D3F]  " />
              </NavLink>
            </li>
            <li>
              <NavLink to="/posts" className={({ isActive }) => `text-[#005B41]  ${isActive?'text-white ':''}`}>
                <CiGrid42 className="size-10 rounded-full p-2 bg-[#232D3F]  " />
              </NavLink>
            </li>
            <li>
              <NavLink to="/discover" className={({ isActive }) => `text-[#005B41]  ${isActive?'text-white ':''}`}>
                <CiCompass1   className="size-10 rounded-full p-2 bg-[#232D3F]  " />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex m-auto text-2xl font-bold items-center justify-between gap-2 ">
          <ul className="flex m-auto text-2xl font-bold items-center justify-between gap-2 ">
            <li className="flex-row justify-center p-3  rounded-full hover:text-white active:text-white">
              <FaRegBell onClick={() => navigate("/")} />
            </li>
            <li className="flex-row justify-center text-center p-3  rounded-full hover:text-white active:text-white">
              <FiMessageSquare onClick={() => navigate("/")} />
            </li>
            <li className="flex-row justify-center p-1 text-3xl animate-spin rounded-full hover:text-white active:text-white">
              <CiSettings onClick={() => navigate("/")} />
            </li>
          </ul>
          <div className="rounded-full w-8 p-1 overflow-hidden aspect-square  border border-white">
            <Logo />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
