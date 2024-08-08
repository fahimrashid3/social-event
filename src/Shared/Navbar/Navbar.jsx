import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">
        <li>
          <button
            className="text-white font-semibold text-sm mr-3
           bg-violet-500 hover:bg-violet-600
           focus:outline-none focus:ring focus:ring-violet-300 focus:bg-violet-950"
          >
            Home
          </button>
        </li>
      </NavLink>
      <NavLink to="/services">
        <li>
          <button
            className="text-white font-semibold text-sm mr-3
           bg-violet-500 hover:bg-violet-600
           focus:outline-none focus:ring focus:ring-violet-300 focus:bg-violet-950"
          >
            Services
          </button>
        </li>
      </NavLink>
      <NavLink to="/budget">
        <li>
          <button
            className="text-white font-semibold text-sm mr-3
           bg-violet-500 hover:bg-violet-600
           focus:outline-none focus:ring focus:ring-violet-300 focus:bg-violet-950"
          >
            Budget Calculator
          </button>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-sky-900 sticky top-0">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Logo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn btn-outline btn-info">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
