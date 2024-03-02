"use client";

import Link from "next/link";
import React from "react";
import { Menu, Wrapper } from ".";

const Header = () => {
  return (
    <div
      className={`w-full h-12 md:h-28 bg-white flex items-center justify-between z-50 sticky top-0 transition-transform duration-300`}
    >
      <div className="w-full h-14 flex justify-between items-center">
        <Link href="/" className="flex justify-center items-center gap-2">
          <h2 className="text-3xl font-bold text-zinc-800">Hopen</h2>
        </Link>
        <div className="flex items-center gap-20">
          <Menu />
          <button
            type="button"
            className="bg-gray-100 rounded-full px-9 py-5 uppercase text-xs font-medium"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
