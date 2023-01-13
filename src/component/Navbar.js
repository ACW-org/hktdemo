import React, { useState, useEffect } from "react";
import LogoImg from "./Logo";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
const Navs = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between lg:justify-center md:justify-center h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>

                <Link to="/profile" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Profile
                </Link>

                <Link to="/rewards" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Reward
                </Link>

                <Link to="/history" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  History
                </Link>
                <Link to="/voucher" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Voucher
                </Link>
                <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <ul>
                <li>
                  <Link to="/" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/rewards" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Reward
                  </Link>
                </li>
                <li>
                  <Link to="/history" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    History
                  </Link>
                </li>
                <li>
                  <Link to="/voucher" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Voucher
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Transition>
    </nav>
    // <nav className="grid md:grid-cols-3 lg:grid-cols-6 border-b-2 py-[20px]" style={{ textAlign: "center" }}>
    //   <div>
    //     <Link className="border-2 mx-5 hover:bg-blue-300 border-grey rounded-md" to="/" style={{ padding: "10px" }}>
    //       Home
    //     </Link>
    //     <Link className="border-2 mx-5 hover:bg-blue-300 border-grey rounded-md" to="/profile" style={{ padding: "10px" }}>
    //       Profile
    //     </Link>
    //     <Link className="border-2 mx-5 hover:bg-blue-300 border-grey rounded-md" to="/rewards" style={{ padding: "10px" }}>
    //       Rewards
    //     </Link>
    //     <Link className="border-2 mx-5 hover:bg-blue-300 border-grey rounded-md" to="/history" style={{ padding: "10px" }}>
    //       History
    //     </Link>
    //     {/* <Link to="/create" style={{ padding: "10px" }}>
    //     Create Sales
    //   </Link> */}
    //     <Link className="border-2 mx-5 hover:bg-blue-300 border-grey rounded-md" to="/voucher" style={{ padding: "10px" }}>
    //       Voucher
    //     </Link>
    //     <Link className="border-2 mx-5 hover:bg-blue-300 border-grey rounded-md" to="/login" style={{ padding: "10px" }}>
    //       Login
    //     </Link>
    //   </div>
    // </nav>
  );
};
export default Navs;
