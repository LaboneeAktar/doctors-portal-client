import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.error("Logout Success"))
      .catch((error) => console.error(error));
  };

  const menuItem = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>

      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/contatct">Contact Us</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className="btn btn-outline btn-accent rounded-md"
            >
              LogOut
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login" className="btn btn-outline btn-accent rounded-md">
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-gradient-to-r from-primary to-secondary mt-5 lg:flex lg:justify-between">
        <div className="navbar-start py-1">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              {menuItem}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-3xl text-gray-100 font-normal"
          >
            <h1>Doctors Portal</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-semibold">{menuItem}</ul>
        </div>
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="btn btn-ghost lg:hidden ml-28"
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
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
