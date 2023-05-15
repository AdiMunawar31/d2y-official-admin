import React from "react";
import {
  IoIosArrowRoundBack,
  IoMdCheckmarkCircleOutline,
  IoMdMail,
  IoMdStar,
  IoMdStarOutline,
  IoMdTrash,
  IoMdWarning,
} from "react-icons/io";
import { BiArchiveIn, BiTrashAlt } from "react-icons/bi";
import { AiOutlineMail, AiOutlineStar } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav aria-label="top bar" className="flex-none flex justify-between bg-white h-12">
        {/* top bar left */}
        <ul aria-label="top bar left" className="flex">
          {/* add button */}
          <li className="group relative">
            <div className="flex items-center h-full px-4 text-sm">
              <a
                href="#"
                className="flex items-center text-gray-700 px-2 py-1 space-x-0.5 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                title="Back"
              >
                <IoIosArrowRoundBack />
                <span className="text-sm font-bold">Back</span>
              </a>
              <div className="flex items-center">
                <span className="bg-gray-300 h-6 w-[.5px] mx-3" />
                <div className="flex items-center space-x-2">
                  <button
                    title="Archive"
                    className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                  >
                    <BiArchiveIn className="h-5 w-5" />
                  </button>
                  <button
                    title="Mark As Spam"
                    className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                  >
                    <IoMdWarning className="h-5 w-5" />
                  </button>
                  <button
                    title="Delete"
                    className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                  >
                    <BiTrashAlt className="h-5 w-5" />
                  </button>
                </div>
                <span className="bg-gray-300 h-6 w-[.5px] mx-3" />
                <div className="flex items-center space-x-2">
                  <button
                    title="Mark As Unread"
                    className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                  >
                    <AiOutlineMail className="h-5 w-5" />
                  </button>
                  <button
                    title="Add Star"
                    className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                  >
                    <AiOutlineStar className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
        {/* to bar right  */}
        <ul aria-label="top bar right" className="px-8 flex items-center">
          <li className="relative">
            <input
              title="Search Bar"
              aria-label="search bar"
              role="search"
              className="pr-8 pl-4 py-2 rounded-md cursor-pointer transition-all duration-300 ease-in-out focus:border-black focus:cursor-text w-4 focus:w-64 placeholder-transparent focus:placeholder-gray-500"
              type="text"
              placeholder="Search Chi Desk Support"
            />
            <i className="pointer-events-none absolute top-0 right-0 h-full flex items-center pr-3">
              <svg
                className="fill-current w-4 h-4 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
              </svg>
            </i>
          </li>
          <li className="h-8 w-8 ml-3">
            <button
              title="Notifications"
              aria-label="notifications"
              className="w-full h-full text-white bg-gray-600 rounded-md focus:outline-none focus:shadow-outline"
            >
              <i>
                <svg
                  className="fill-current w-4 h-4 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z" />
                </svg>
              </i>
            </button>
          </li>
          <li className="h-8 w-8 ml-3">
            <button
              title="v2 REPL"
              aria-label="repl"
              className="w-full h-full text-white bg-gray-600 rounded-md focus:outline-none focus:shadow-outline"
            >
              <i>
                <svg
                  className="fill-current w-4 h-4 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z" />
                </svg>
              </i>
            </button>
          </li>
          <li className="h-8 w-8 ml-3">
            <button
              title="Products"
              aria-label="chi desk products"
              className="w-full h-full rounded-md focus:outline-none focus:shadow-outline"
            >
              <i className="text-gray-600">
                <svg
                  className="fill-current w-5 h-5 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path d="M11 11h-11v-11h11v11zm13 0h-11v-11h11v11zm-13 13h-11v-11h11v11zm13 0h-11v-11h11v11z" />
                </svg>
              </i>
            </button>
          </li>
          <li className="h-10 w-10 ml-3">
            <button
              title="Page Menu"
              aria-label="page menu"
              className="h-full w-full rounded-full border focus:outline-none focus:shadow-outline"
            >
              <Image
                width={30}
                height={30}
                alt="Avatar"
                className="h-full w-full rounded-full mx-auto"
                src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/me.jpg"
              />
            </button>
          </li>
        </ul>
      </nav>
      {/* section body header */}
    </div>
  );
};

export default Navbar;
