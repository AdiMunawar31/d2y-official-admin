import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Statistics from "@/components/Statistics";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header title="Dashboard" />
      <div className="flex min-h-screen flex-col mr-4 border-x">
        <Stats />
        {/* content navigation */}
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
        {/* content caption */}
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
                <div className="border rounded-md rounded-t-lg shadow-lg bg-white w-full max-w-xs w-screen">
                  <header className="font-semibold rounded-t-lg bg-gray-300 px-4 py-2">
                    People are waiting for replies!
                  </header>
                  <div className="p-4 border-t">
                    <p className="mb-4">
                      These are new or open tickets that are assigned to you, unassinged in your group(s) or not
                      assigned to any group.
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
        {/* content overflow section 
          remove table and thead but keep tbody and change tbody to section, in order
          to have scrollable overflow section */}
        <table
          aria-describedby="info-popup"
          aria-label="open tickets"
          className="border-t w-full min-h-0 h-full flex flex-col"
        >
          <thead className="flex w-full flex-col px-4">
            <tr className="border-b flex">
              <th className="font-semibold text-left py-3 pl-3 pr-1 w-24">
                <input type="checkbox" name="test" />
              </th>
              <th className="font-semibold text-left py-3 px-1 w-24 truncate">ID</th>
              <th className="font-semibold text-left py-3 px-1 w-full max-w-xs xl:max-w-lg truncate">Subject</th>
              <th className="font-semibold text-left py-3 px-1 flex-1 truncate">Requester</th>
              <th className="font-semibold text-left py-3 px-1 flex-1 truncate">Requester updated</th>
              <th className="font-semibold text-left py-3 px-1 flex-1 truncate">Group</th>
              <th className="font-semibold text-left py-3 px-1 flex-1 truncate">Assignee</th>
            </tr>
          </thead>
          <tbody className="flex w-full flex-col flex-1 min-h-0 overflow-hidden px-4">
            {/* low */}
            <tr className="border-b flex">
              <th className="bg-gray-100 text-left px-3 py-2 flex-1" colSpan={7}>
                <h2 className="text-sm">
                  <span className="font-normal mr-1">Priority</span>
                  <span>Low</span>
                </h2>
              </th>
            </tr>
            <tr role="row" className="hover:bg-blue-100 border-b flex cursor-pointer">
              <td role="cell" headers="select" className="py-3 pl-3 pr-1 w-24 flex items-start">
                <input className="mt-1" type="checkbox" />
                <div className="ml-auto relative group">
                  <span
                    style={{ padding: "2px 5px", fontSize: "0.7rem", position: "relative", bottom: "2px" }}
                    className="font-mono rounded-sm bg-red-600 text-white leading-none"
                  >
                    O
                  </span>
                  {/* dropdown */}
                  <span className="hidden group-hover:block ml-4 mt-10 w-screen max-w-lg absolute top-0 border shadow-lg p-6 bg-white rounded-md z-50 text-gray-900">
                    <article>
                      <header>
                        <div>
                          <span className="px-3 py-1 uppercase text-xs leading-none rounded-sm bg-red-600 text-white">
                            Open
                          </span>
                          <span className="ml-2 text-gray-700">Incident #12534</span>
                          <span className="ml-1">(Low)</span>
                        </div>
                      </header>
                      <section className="mt-5">
                        <h1 className="text-sm font-semibold mt-3">
                          Quo laudantium error corporis accusamus unde, labore quidem non officiis.
                        </h1>
                        <p className="mt-3">
                          Hi Team,
                          <br />
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias fugit
                          commodi doloremque. <br />
                          <br />
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit? ...
                        </p>
                      </section>
                      <footer className="mt-4">
                        <p className="text-gray-600">Latest Comments</p>
                        <hr className="mt-1" />
                        <div className="flex mt-3">
                          <p className="font-semibold">Nico Braun</p>
                          <p className="ml-auto text-gray-700 text-sm">Yesterday 10:33</p>
                        </div>
                        <p className="mt-2">
                          Dolore odio error inventore sint et dolorum asperiores exercitationem, quisquam esse.
                        </p>
                      </footer>
                    </article>
                  </span>
                  {/* end dropdown */}
                </div>
              </td>
              <td className="py-3 px-1 w-24">#12534</td>
              <td className="py-3 px-1 w-full max-w-xs xl:max-w-lg">
                <div className="relative group w-full">
                  <p className="w-full truncate">
                    Quo laudantium error corporis accusamus unde, labore quidem non officiis.
                  </p>
                  {/* dropdown */}
                  <span className="hidden group-hover:block ml-4 mt-10 w-screen max-w-lg absolute top-0 border shadow-lg p-6 bg-white rounded-md z-50 text-gray-900">
                    <article>
                      <header>
                        <div>
                          <span className="px-3 py-1 uppercase text-xs leading-none rounded-sm bg-red-600 text-white">
                            Open
                          </span>
                          <span className="ml-2 text-gray-700">Incident #12534</span>
                          <span className="ml-1">(Low)</span>
                        </div>
                      </header>
                      <section className="mt-5">
                        <h1 className="text-sm font-semibold mt-3">
                          Quo laudantium error corporis accusamus unde, labore quidem non officiis.
                        </h1>
                        <p className="mt-3">
                          Hi Team,
                          <br />
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias fugit
                          commodi doloremque. <br />
                          <br />
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit? ...
                        </p>
                      </section>
                      <footer className="mt-4">
                        <p className="text-gray-600">Latest Comments</p>
                        <hr className="mt-1" />
                        <div className="flex mt-3">
                          <p className="font-semibold">Nico Braun</p>
                          <p className="ml-auto text-gray-700 text-sm">Yesterday 10:33</p>
                        </div>
                        <p className="mt-2">
                          Dolore odio error inventore sint et dolorum asperiores exercitationem, quisquam esse.
                        </p>
                      </footer>
                    </article>
                  </span>
                  {/* end dropdown */}
                </div>
              </td>
              <td className="py-3 px-1 flex-1 truncate">Marla Darsuz</td>
              <td className="py-3 px-1 flex-1 truncate">Tuesday 09:56</td>
              <td className="py-3 px-1 flex-1 truncate">UK Support</td>
              <td className="py-3 px-1 flex-1 truncate">Nico Braun</td>
            </tr>
            <tr role="row" className="hover:bg-blue-100 border-b flex cursor-pointer">
              <td role="cell" headers="select" className="py-3 pl-3 pr-1 w-24 flex items-start">
                <input className="mt-1" type="checkbox" />
                <div className="ml-auto relative group">
                  <span
                    style={{ padding: "2px 5px", fontSize: "0.7rem", position: "relative", bottom: "2px" }}
                    className="font-mono rounded-sm bg-red-600 text-white leading-none"
                  >
                    O
                  </span>
                  {/* dropdown */}
                  <span className="hidden group-hover:block ml-4 mt-10 w-screen max-w-lg absolute top-0 border shadow-lg p-6 bg-white rounded-md z-50 text-gray-900">
                    <article>
                      <header>
                        <div>
                          <span className="px-3 py-1 uppercase text-xs leading-none rounded-sm bg-red-600 text-white">
                            Open
                          </span>
                          <span className="ml-2 text-gray-700">Incident #12534</span>
                          <span className="ml-1">(Low)</span>
                        </div>
                      </header>
                      <section className="mt-5">
                        <h1 className="text-sm font-semibold mt-3">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </h1>
                        <p className="mt-3">
                          Hi, <br />
                          <br />
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias fugit
                          commodi doloremque. <br />
                          <br />
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequatur natus aut
                          reiciendis nisi sed! Temporibus, quibusdam voluptates? ...
                        </p>
                      </section>
                      <footer className="mt-4">
                        <p className="text-gray-600">Latest Comments</p>
                        <hr className="mt-1" />
                        <div className="flex mt-3">
                          <p className="font-semibold">Nico Braun</p>
                          <p className="ml-auto text-gray-700 text-sm">Today 13:30</p>
                        </div>
                        <p className="mt-2">
                          Dolore odio error inventore sint et dolorum asperiores exercitationem, quisquam esse tempora
                          aliquam voluptates quibusdam quae debitis laboriosam iure ea quos.
                        </p>
                      </footer>
                    </article>
                  </span>
                  {/* end dropdown */}
                </div>
              </td>
              <td className="py-3 px-1 w-24">#12534</td>
              <td className="py-3 px-1 w-full max-w-xs xl:max-w-lg">
                <div className="relative group w-full">
                  <p className="w-full truncate">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  {/* dropdown */}
                  <span className="hidden group-hover:block ml-4 mt-10 w-screen max-w-lg absolute top-0 border shadow-lg p-6 bg-white rounded-md z-50 text-gray-900">
                    <article>
                      <header>
                        <div>
                          <span className="px-3 py-1 uppercase text-xs leading-none rounded-sm bg-red-600 text-white">
                            Open
                          </span>
                          <span className="ml-2 text-gray-700">Incident #12534</span>
                          <span className="ml-1">(Low)</span>
                        </div>
                      </header>
                      <section className="mt-5">
                        <h1 className="text-sm font-semibold mt-3">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </h1>
                        <p className="mt-3">
                          Hi, <br />
                          <br />
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias fugit
                          commodi doloremque. <br />
                          <br />
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequatur natus aut
                          reiciendis nisi sed! Temporibus, quibusdam voluptates? ...
                        </p>
                      </section>
                      <footer className="mt-4">
                        <p className="text-gray-600">Latest Comments</p>
                        <hr className="mt-1" />
                        <div className="flex mt-3">
                          <p className="font-semibold">Nico Braun</p>
                          <p className="ml-auto text-gray-700 text-sm">Today 13:30</p>
                        </div>
                        <p className="mt-2">
                          Dolore odio error inventore sint et dolorum asperiores exercitationem, quisquam esse tempora
                          aliquam voluptates quibusdam quae debitis laboriosam iure ea quos.
                        </p>
                      </footer>
                    </article>
                  </span>
                  {/* end dropdown */}
                </div>
              </td>
              <td className="py-3 px-1 flex-1 truncate">Jim Beam</td>
              <td className="py-3 px-1 flex-1 truncate">Friday 10:29</td>
              <td className="py-3 px-1 flex-1 truncate">UK Support</td>
              <td className="py-3 px-1 flex-1 truncate">Nico Braun</td>
            </tr>
            <tr role="row" className="hover:bg-blue-100 border-b flex cursor-pointer">
              <td role="cell" headers="select" className="py-3 pl-3 pr-1 w-24 flex items-start">
                <input className="mt-1" type="checkbox" />
                <div className="ml-auto relative group">
                  <span
                    style={{ padding: "2px 5px", fontSize: "0.7rem", position: "relative", bottom: "2px" }}
                    className="font-mono rounded-sm bg-yellow-400 text-black leading-none"
                  >
                    N
                  </span>
                  {/* dropdown */}
                  <span className="hidden group-hover:block ml-4 mt-10 w-screen max-w-lg absolute top-0 border shadow-lg p-6 bg-white rounded-md z-50 text-gray-900">
                    <article>
                      <header>
                        <div>
                          <span className="px-3 py-1 uppercase text-xs leading-none rounded-sm bg-yellow-400 text-black">
                            New
                          </span>
                          <span className="ml-2 text-gray-700">Incident #12534</span>
                          <span className="ml-1">(Low)</span>
                        </div>
                      </header>
                      <section className="mt-5">
                        <h1 className="text-sm font-semibold mt-3">
                          Excepturi at labore vel accusamus exercitationem quam, amet provident!
                        </h1>
                        <p className="mt-3">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequatur natus aut
                          reiciendis nisi sed! Temporibus, quibusdam voluptates? ...
                        </p>
                      </section>
                      <footer className="mt-4 hidden">
                        <p className="text-gray-600">Latest Comments</p>
                        <hr className="mt-1" />
                        <div className="flex mt-3">
                          <p className="font-semibold" />
                          <p className="ml-auto text-gray-700 text-sm" />
                        </div>
                        <p className="mt-2" />
                      </footer>
                    </article>
                  </span>
                  {/* end dropdown */}
                </div>
              </td>
              <td className="py-3 px-1 w-24">#12534</td>
              <td className="py-3 px-1 w-full max-w-xs xl:max-w-lg">
                <div className="relative group w-full">
                  <p className="w-full truncate">
                    Excepturi at labore vel accusamus exercitationem quam, amet provident!
                  </p>
                  {/* dropdown */}
                  <span className="hidden group-hover:block ml-4 mt-10 w-screen max-w-lg absolute top-0 border shadow-lg p-6 bg-white rounded-md z-50 text-gray-900">
                    <article>
                      <header>
                        <div>
                          <span className="px-3 py-1 uppercase text-xs leading-none rounded-sm bg-yellow-400 text-black">
                            New
                          </span>
                          <span className="ml-2 text-gray-700">Incident #12534</span>
                          <span className="ml-1">(Low)</span>
                        </div>
                      </header>
                      <section className="mt-5">
                        <h1 className="text-sm font-semibold mt-3">
                          Excepturi at labore vel accusamus exercitationem quam, amet provident!
                        </h1>
                        <p className="mt-3">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consequatur natus aut
                          reiciendis nisi sed! Temporibus, quibusdam voluptates? ...
                        </p>
                      </section>
                      <footer className="mt-4 hidden">
                        <p className="text-gray-600">Latest Comments</p>
                        <hr className="mt-1" />
                        <div className="flex mt-3">
                          <p className="font-semibold" />
                          <p className="ml-auto text-gray-700 text-sm" />
                        </div>
                        <p className="mt-2" />
                      </footer>
                    </article>
                  </span>
                  {/* end dropdown */}
                </div>
              </td>
              <td className="py-3 px-1 flex-1 truncate">Paul Ferrez</td>
              <td className="py-3 px-1 flex-1 truncate">Today 13:45</td>
              <td className="py-3 px-1 flex-1 truncate">-</td>
              <td className="py-3 px-1 flex-1 truncate">-</td>
            </tr>
            <tr role="row" className="hover:bg-blue-100 border-b flex cursor-pointer">
              <td role="cell" headers="select" className="py-3 pl-3 pr-1 w-24 flex items-start">
                <input className="mt-1" type="checkbox" />
                <div className="ml-auto relative group">
                  <span
                    style={{ padding: "2px 5px", fontSize: "0.7rem", position: "relative", bottom: "2px" }}
                    className="font-mono rounded-sm bg-red-600 text-white leading-none"
                  >
                    O
                  </span>
                  {/* dropdown */}
                  <span className="hidden group-hover:block ml-4 mt-10 w-screen max-w-lg absolute top-0 border shadow-lg p-6 bg-white rounded-md z-50 text-gray-900">
                    <article>
                      <header>
                        <div>
                          <span className="px-3 py-1 uppercase text-xs leading-none rounded-sm bg-red-600 text-white">
                            Open
                          </span>
                          <span className="ml-2 text-gray-700">Incident #12534</span>
                          <span className="ml-1">(Low)</span>
                        </div>
                      </header>
                      <section className="mt-5">
                        <h1 className="text-sm font-semibold mt-3">
                          impedit possimus praesentium voluptatum omnis assumenda rem autem magni consequatur nostrum
                          distinctio unde.
                        </h1>
                        <p className="mt-3">
                          Hi Team,
                          <br />
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias fugit
                          commodi doloremque. <br />
                          <br />
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit? ...
                        </p>
                      </section>
                      <footer className="mt-4">
                        <p className="text-gray-600">Latest Comments</p>
                        <hr className="mt-1" />
                        <div className="flex mt-3">
                          <p className="font-semibold">Nico Braun</p>
                          <p className="ml-auto text-gray-700 text-sm">Yesterday 10:33</p>
                        </div>
                        <p className="mt-2">
                          Dolore odio error inventore sint et dolorum asperiores exercitationem, quisquam esse.
                        </p>
                      </footer>
                    </article>
                  </span>
                  {/* end dropdown */}
                </div>
              </td>
              <td className="py-3 px-1 w-24">#12534</td>
              <td className="py-3 px-1 w-full max-w-xs xl:max-w-lg">
                <div className="relative group w-full">
                  <p className="w-full truncate">
                    impedit possimus praesentium voluptatum omnis assumenda rem autem magni consequatur nostrum
                    distinctio unde.
                  </p>
                  {/* dropdown */}
                  <span className="hidden group-hover:block ml-4 mt-10 w-screen max-w-lg absolute top-0 border shadow-lg p-6 bg-white rounded-md z-50 text-gray-900">
                    <article>
                      <header>
                        <div>
                          <span className="px-3 py-1 uppercase text-xs leading-none rounded-sm bg-red-600 text-white">
                            Open
                          </span>
                          <span className="ml-2 text-gray-700">Incident #12534</span>
                          <span className="ml-1">(Low)</span>
                        </div>
                      </header>
                      <section className="mt-5">
                        <h1 className="text-sm font-semibold mt-3">
                          impedit possimus praesentium voluptatum omnis assumenda rem autem magni consequatur nostrum
                          distinctio unde.
                        </h1>
                        <p className="mt-3">
                          Hi Team,
                          <br />
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusantium molestias fugit
                          commodi doloremque. <br />
                          <br />
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit? ...
                        </p>
                      </section>
                      <footer className="mt-4">
                        <p className="text-gray-600">Latest Comments</p>
                        <hr className="mt-1" />
                        <div className="flex mt-3">
                          <p className="font-semibold">Nico Braun</p>
                          <p className="ml-auto text-gray-700 text-sm">Yesterday 10:33</p>
                        </div>
                        <p className="mt-2">
                          Dolore odio error inventore sint et dolorum asperiores exercitationem, quisquam esse.
                        </p>
                      </footer>
                    </article>
                  </span>
                  {/* end dropdown */}
                </div>
              </td>
              <td className="py-3 px-1 flex-1 truncate">Sara Dechicco</td>
              <td className="py-3 px-1 flex-1 truncate">Thursday 09:22</td>
              <td className="py-3 px-1 flex-1 truncate">UK Support</td>
              <td className="py-3 px-1 flex-1 truncate">Nico Braun</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
