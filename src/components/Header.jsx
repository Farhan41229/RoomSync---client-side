import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const links = (
  <>
    <li>
      <NavLink to={'/'} className={'text-xl font-semibold'}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to={'/listings'} className={'text-xl font-semibold'}>
        Browse Listings
      </NavLink>
    </li>
  </>
);
const Header = () => {
  const { user, Logout } = useContext(AuthContext);
  console.log('User is: ', user);
  const HandleLogout = (e) => {
    e.preventDefault();
    Logout()
      .then(() => {
        Swal.fire({
          title: 'Logged out Successfully!',
          icon: 'success',
          draggable: true,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar items-center  shadow-sm px-6 bg-stone-50">
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
      <div className="navbar-center hidden lg:flex pt-2 ">
        <ul className="menu menu-horizontal px-1 flex gap-5">{links}</ul>
      </div>
      <div className="navbar-end pt-2">
        {user ? (
          <Link
            onClick={HandleLogout}
            className="btn w-[80px] lg:w-[150px] text-white bg-blue-800 text-lg  lg:text-xl  hover:text-blue-800 hover:bg-white transition-colors duration-[650ms] "
          >
            Logout
          </Link>
        ) : (
          <Link
            className="btn w-[80px] lg:w-[150px] text-white bg-blue-800 text-lg  lg:text-xl  hover:text-blue-800 hover:bg-white transition-colors duration-[650ms] "
            to={'/auth/login'}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
