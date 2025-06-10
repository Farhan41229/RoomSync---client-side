import React from 'react';
const links = (
  <>
    <li>
      <a>Item 1</a>
    </li>
    <li>
      <a>Item 3</a>
    </li>
  </>
);
const Header = () => {
  return (
    <div className="navbar items-center bg-base-100 shadow-sm px-6 bg-stone-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl font-extrabold">
          <p>
            <span className="text-blue-700">Room</span>Sync
          </p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex pt-2">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end pt-2">
        <a className="btn w-[80px] lg:w-[150px] text-white bg-blue-800 text-lg  lg:text-xl  hover:text-blue-800 hover:bg-white transition-colors duration-[650ms] ">
          Signout
        </a>
      </div>
    </div>
  );
};

export default Header;
