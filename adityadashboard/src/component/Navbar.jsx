import React from "react";
import { FaSearch, FaUserCircle, FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      {/* Brand */}
      <a className="navbar-brand fw-bold" href="#">
        Dabang
      </a>

      {/* Search Bar */}
      <form className="d-flex ms-auto me-4" style={{ width: "300px" }}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search here..."
          aria-label="Search"
        />
        <button className="btn btn-outline-primary" type="submit">
          <FaSearch />
        </button>
      </form>

      {/* Notification and User Profile */}
      <div className="d-flex align-items-center">
        {/* Notification Icon with Badge */}
        <div className="position-relative me-3 cursor-pointer">
          <FaBell size={24} className="text-secondary" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            1
          </span>
        </div>

        {/* Language Dropdown */}
        <select className="form-select me-3" style={{ width: "120px" }}>
          <option value="en">Eng (US)</option>
          <option value="hindi">Hindi</option>
        </select>

        {/* User Profile */}
        <FaUserCircle size={30} className="text-secondary" />
        <span className="ms-2 fw-semibold">Mustaq</span>
      </div>
    </nav>
  );
};

export default Navbar;
