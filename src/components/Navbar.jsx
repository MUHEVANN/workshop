import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navlinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Gallery",
      href: "/gallery",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks.map((item) => {
              return (
                <Link>
                  <span
                    className={({ isActive }) => {
                      return isActive ? "active" : "";
                    }}
                  >
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">evann</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-x-3">
          {navlinks.map((item) => {
            return (
              <Link key={item.title} to={item.href}>
                <span
                  className={({ isActive }) => {
                    return isActive ? "active" : "";
                  }}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"login"} className="btn">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
