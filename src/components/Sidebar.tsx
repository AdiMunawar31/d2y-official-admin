import Image from "next/image";
import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import { FaBlogger, FaUsers } from "react-icons/fa";
import { MdForum } from "react-icons/md";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="col-span-2 px-4">
      <div className="px-2 pt-4 -ml-2 pb-8 border-r min-h-full border-gray-300">
        <div className="mb-8 mt-2 -ml-4">
          <h1 className="font-bold text-4xl text-center md:hidden">
            D<span className="text-gray-600">.</span>
          </h1>
          <h1 className="hidden md:block font-bold text-sm md:text-xl text-center ml-4">
            D2Y OFFICIAL<span className="text-gray-600">.</span>
          </h1>
          <div id="profile" className="space-y-3">
            <Image
              src="/images/am.jpg"
              width="50"
              height="50"
              alt="Avatar user"
              className="w-10 md:w-16 rounded-full mx-auto animate-pulse transition-all"
            />
            <div>
              <h2 className="font-medium text-xs md:text-sm text-center text-gray-800">Adi Munawar</h2>
              <p className="text-xs text-gray-500 text-center">Administrator</p>
            </div>
          </div>
        </div>

        <ul className="space-y-2 mr-2">
          <li>
            <Link
              href="/"
              className="bg-black text-gray-100 flex items-center justify-between py-1.5 px-4 rounded cursor-pointer"
            >
              <span className="flex items-center space-x-2">
                <AiFillDashboard />
                <span>Dashboard</span>
              </span>
              {/* <span className="bg-red-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">3</span> */}
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:bg-black hover:text-gray-100 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer"
            >
              <FaUsers />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <a className="hover:bg-black hover:text-gray-100 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
              <FaBlogger />
              <span>Blogs</span>
            </a>
          </li>
          <li>
            <a className="hover:bg-black hover:text-gray-100 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer">
              <MdForum />
              <span>Forums</span>
            </a>
          </li>
          <li>
            <Link
              href="/login"
              className="hover:bg-black hover:text-gray-100 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer"
            >
              <GoSignOut />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
