"use client";

import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-7 w-full bg-white relative z-50 border-b border-gray-100">
      
      <h1 className="text-[2.2rem] italic text-[#8b5a3c] tracking-[2px] capitalize font-serif">
        Vintage Strings
      </h1>

      <button 
        className="md:hidden text-[#8b5a3c] z-50" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      <div className={`${isOpen ? "flex" : "hidden"} md:flex absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row items-center gap-8 p-7 md:p-0 shadow-lg md:shadow-none`}>
        
        <div className="flex flex-col md:flex-row gap-8 text-lg text-[#8b5a3c] font-medium text-center">
          <Link href="/" className="hover:underline underline-offset-4">Home</Link>
          <Link href="/" className="hover:underline underline-offset-4">Product</Link>
          <Link href="/about" className="hover:underline underline-offset-4">About</Link>
          <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
        </div>

        <div className="flex items-center gap-6 text-[#8b5a3c]">
          <Link href="/login" className="hover:opacity-70 transition-opacity">
            <FiUser size={24} />
          </Link>
          <Link href="/cart" className="hover:opacity-70 transition-opacity">
            <FiShoppingCart size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
}