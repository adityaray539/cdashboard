import React from "react";
import {
  FaTachometerAlt,
  FaTrophy,
  FaShoppingCart,
  FaBox,
  FaChartLine,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaCrown,
} from "react-icons/fa";

const LeftSideBar = () => {
  return (
    <div
      className="d-flex flex-column bg-white p-3 vh-100 shadow"
      style={{ width: "250px" }}
    >
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a
            href="#"
            className="nav-link text-white bg-primary rounded px-3 py-2 d-flex align-items-center"
          >
            <FaTachometerAlt className="me-2" />
            Dashboard
          </a>
        </li>

        <li className="nav-item mb-2">
          <a href="#" className="nav-link">
            <FaTrophy /> Leaderboard
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link">
            <FaShoppingCart /> Order
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link">
            <FaBox /> Products
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link">
            <FaChartLine /> Sales Report
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link">
            <FaEnvelope /> Messages
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#" className="nav-link">
            <FaCog /> Settings
          </a>
        </li>
        <li className="nav-item mb-4">
          <a href="#" className="nav-link text-danger">
            <FaSignOutAlt /> Sign Out
          </a>
        </li>
      </ul>

      <div className="mt-auto p-3 bg-light rounded">
        <h6>
          <FaCrown /> Dabang Pro
        </h6>
        <p>Get exclusive features!</p>
        <button className="btn btn-primary">Get Pro</button>
      </div>
    </div>
  );
};

export default LeftSideBar;
