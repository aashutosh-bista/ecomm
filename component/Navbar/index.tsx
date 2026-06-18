"use client";


import { useState } from "react";
import {  FiMenu, FiX } from "react-icons/fi";
import Middlesection from "./middlesection";
import Icons from "./Icons";
import {links,icons} from "../../constant/constant";
import Logo from "./logo";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-7 w-full bg-white relative z-50 border-b border-gray-100">
      <Logo />
      <button
        className="md:hidden text-[#8b5a3c] z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      <div
        className={`${isOpen ? "flex" : "hidden"} md:flex absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row items-center gap-8 p-7 md:p-0 shadow-lg md:shadow-none`}
      >
        <Middlesection />
        <Icons />
      </div>
    </nav>
  );
}
