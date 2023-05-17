import React from "react";

const HeaderTable = () => {
  return (
    <header className="bg-white border-t flex items-center py-1 px-4">
      <div className="flex">
        <h2 id="content-caption" className="font-semibold">
          Tickets requiring your attention (6)
        </h2>
        <span className="ml-3 group relative">
          <button
            role="details"
            aria-controls="info-popup"
            className="text-blue-700 border-b border-dotted border-blue-700 focus:outline-none text-sm"
          >
            What is this?
          </button>
          <div
            role="tooltip"
            id="info-popup"
            className="absolute pt-1 rounded-md rounded-t-lg right-0 transform translate-x-40 mx-auto hidden group-hover:block z-50"
          >
            <div className="border rounded-md rounded-t-lg shadow-lg bg-white w-full max-w-xs">
              <header className="font-semibold rounded-t-lg bg-gray-300 px-4 py-2">
                People are waiting for replies!
              </header>
              <div className="p-4 border-t">
                <p className="mb-4">
                  These are new or open tickets that are assigned to you, unassinged in your group(s) or not assigned to
                  any group.
                </p>
                <p className="mb-1">They are ordered by priority and requester update date (oldest first).</p>
              </div>
            </div>
          </div>
        </span>
      </div>
      <div className="ml-auto">
        <button
          title="See available tickets in this view"
          aria-label="play"
          className="border rounded-md px-3 py-2 leading-none"
        >
          Play
        </button>
      </div>
    </header>
  );
};

export default HeaderTable;
