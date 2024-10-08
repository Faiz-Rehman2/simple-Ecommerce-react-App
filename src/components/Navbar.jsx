import React from 'react';

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo.jpg"
            className="rounded h-8"
            alt="Olx Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Olx Clone</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">
            Log In
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button onClick={() => setCurrentPage('home')} className="block py-2 px-3 md:p-0 text-gray-900">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentPage('products')} className="block py-2 px-3 md:p-0 text-gray-900">
                Products
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
