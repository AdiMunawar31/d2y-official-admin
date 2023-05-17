import React from "react";

const StatsTable = () => {
  return (
    <nav className="bg-gray-100 flex p-4">
      {/* open tickets nav */}
      <div className="mr-4 focus:outline-none">
        <label id="open-tickets-tabs-label" className="font-semibold block mb-1 text-sm">
          Open Tickets
          <span className="font-normal text-gray-700">(current)</span>
        </label>
        <ul className="flex">
          <li>
            <button className="focus:outline-none focus:bg-yellow-200 p-2 rounded-l-md border border-r-0 bg-white flex flex-col items-center w-24">
              <p className="font-semibold text-lg">6</p>
              <p className="text-sm uppercase text-gray-600">You</p>
            </button>
          </li>
          <li>
            <button className="focus:outline-none focus:bg-yellow-200 p-2 border rounded-r-md bg-white flex flex-col items-center w-24 cursor-pointer">
              <p className="font-semibold text-lg">23</p>
              <p className="text-sm uppercase text-gray-600">Groups</p>
            </button>
          </li>
        </ul>
      </div>
      {/* stats nav */}
      <section aria-labelledby="ticket-statistics-tabs-label" className="pb-2">
        <label id="ticket-statistics-tabs-label" className="font-semibold block mb-1 text-sm">
          Ticket Statistics
          <span className="font-normal text-gray-700">(this week)</span>
        </label>
        <ul className="flex">
          <li>
            <button className="focus:outline-none focus:bg-yellow-200 p-2 rounded-l-md border border-r-0 bg-white flex flex-col items-center w-24">
              <p className="font-semibold text-lg">16</p>
              <p className="uppercase text-gray-600 text-sm">good</p>
            </button>
          </li>
          <li>
            <button className="focus:outline-none focus:bg-yellow-200 p-2 border border-r-0 bg-white flex flex-col items-center w-24">
              <p className="font-semibold text-lg">2</p>
              <p className="uppercase text-gray-600 text-sm">bad</p>
            </button>
          </li>
          <li>
            <button className="focus:outline-none focus:bg-yellow-200 p-2 border rounded-r-md bg-white flex flex-col items-center w-24">
              <p className="font-semibold text-lg">32</p>
              <p className="uppercase text-gray-600 text-sm">solved</p>
            </button>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default StatsTable;
