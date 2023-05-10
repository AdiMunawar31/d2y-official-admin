import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav aria-label="top bar" className="flex-none flex justify-between bg-white h-12">
        {/* top bar left */}
        <ul aria-label="top bar left" aria-orientation="horizontal" className="flex">
          {/* add button */}
          <li className="group relative">
            <div className="flex items-center h-full px-4 text-sm">
              <a
                href="#"
                className="flex items-center text-gray-700 px-2 py-1 space-x-0.5 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                title="Back"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-bold">Back</span>
              </a>
              <div className="flex items-center">
                <span className="bg-gray-300 h-6 w-[.5px] mx-3" />
                <div className="flex items-center space-x-2">
                  <button
                    title="Archive"
                    className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                      />
                    </svg>
                  </button>
                  <button
                    title="Mark As Spam"
                    className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </button>
                  <button
                    title="Delete"
                    className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
                <span className="bg-gray-300 h-6 w-[.5px] mx-3" />
                <div className="flex items-center space-x-2">
                  <button
                    title="Mark As Unread"
                    className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                  <button
                    title="Add Star"
                    className="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <span className="absolute p-1 hidden group-hover:block">
              <ul
                id="add"
                role="listbox"
                className="outline-none py-2 bg-white border rounded-md w-screen max-w-md w-dropdown-large shadow-lg focus:outline-none leading-relaxed"
              >
                <li role="separator" className="mb-2">
                  <label className="block px-4 py-3 font-semibold">New</label>
                  <hr />
                </li>
                <li
                  role="option"
                  className="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                >
                  Ticket
                </li>
                <li
                  role="option"
                  className="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                >
                  User
                </li>
                <li
                  role="option"
                  className="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                >
                  Organization
                </li>
                <li
                  role="option"
                  className="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                >
                  Search
                </li>
                <li role="separator" className="mb-2">
                  <label className="block px-4 py-3 font-semibold">Recently Viewed</label>
                  <hr />
                </li>
                <li
                  role="option"
                  className="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                >
                  <div className="flex">
                    <div className="pr-2">
                      <span
                        style={{ padding: "2px 5px", fontSize: "0.7rem" }}
                        className="font-mono rounded-sm bg-red-600 text-white leading-none"
                      >
                        O
                      </span>
                    </div>
                    <div className="flex-1">
                      <p>Vertias - ams opps issue</p>
                      <p className="text-gray-600">
                        <span>#ticket/14352</span>
                        <span className="mx-1 font-black">·</span>
                        <span>Nico Braun</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  role="option"
                  className="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                >
                  <div className="flex">
                    <div className="pr-2">
                      <span
                        style={{ padding: "2px 5px", fontSize: "0.7rem" }}
                        className="font-mono rounded-sm bg-yellow-400 text-black leading-none"
                      >
                        N
                      </span>
                    </div>
                    <div className="flex-1">
                      <p>Vertias - ams opps issue</p>
                      <p className="text-gray-600">
                        <span>#ticket/14352</span>
                        <span className="mx-1 font-black">·</span>
                        <span>Nico Braun</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  role="option"
                  className="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                >
                  <div className="flex">
                    <div className="pr-2">
                      <span
                        style={{ padding: "2px 5px", fontSize: "0.7rem" }}
                        className="font-mono rounded-sm bg-gray-500 text-white leading-none"
                      >
                        S
                      </span>
                    </div>
                    <div className="flex-1">
                      <p>Vertias - ams opps issue</p>
                      <p className="text-gray-600">
                        <span>#ticket/14352</span>
                        <span className="mx-1 font-black">·</span>
                        <span>Nico Braun</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  role="option"
                  className="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                >
                  <div className="flex">
                    <div className="pr-2">
                      <span
                        style={{ padding: "2px 5px", fontSize: "0.7rem" }}
                        className="font-mono rounded-sm bg-blue-600 text-white leading-none"
                      >
                        P
                      </span>
                    </div>
                    <div className="flex-1">
                      <p>Vertias - ams opps issue</p>
                      <p className="text-gray-600">
                        <span>#ticket/14352</span>
                        <span className="mx-1 font-black">·</span>
                        <span>Nico Braun</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li
                  role="option"
                  className="px-6 py-1 my-1 focus:outline-none focus:bg-blue-100 hover:bg-blue-100 cursor-pointer"
                >
                  <div className="flex">
                    <div className="pr-2">
                      <span
                        style={{ padding: "2px 5px", fontSize: "0.7rem" }}
                        className="font-mono rounded-sm bg-gray-800 text-white leading-none"
                      >
                        H
                      </span>
                    </div>
                    <div className="flex-1">
                      <p>Vertias - ams opps issue</p>
                      <p className="text-gray-600">
                        <span>#ticket/14352</span>
                        <span className="mx-1 font-black">·</span>
                        <span>Nico Braun</span>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </span>
          </li>
        </ul>
        {/* to bar right  */}
        <ul aria-label="top bar right" aria-orientation="horizontal" className="px-8 flex items-center">
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
              <img
                className="h-full w-full rounded-full mx-auto"
                src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/me.jpg"
              />
            </button>
          </li>
        </ul>
      </nav>
      {/* section body header */}
      <header aria-label="page caption" className="flex-none flex h-12 border-y px-4 -ml-4 mb-8 items-center">
        <h1 id="page-caption" className="font-semibold text-lg">
          Dashboard
        </h1>
      </header>
    </div>
  );
};

export default Navbar;
