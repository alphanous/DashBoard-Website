import React from "react";
import "../css/sidebar.css"; // Import your CSS file

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div className="d-flex">
        <button className="toggle-btn" type="button">
          <i className="lni lni-grid-alt"></i>
        </button>
        <div className="sidebar-logo">
          <a href="#">CodzSword</a>
        </div>
      </div>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <i className="lni lni-user"></i> <span>Profile</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <i className="lni lni-agenda"></i> <span>Task</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a
            href="#"
            className="sidebar-link collapsed has-dropdown"
            data-bs-toggle="collapse"
            data-bs-target="#auth"
            aria-expanded="false"
            aria-controls="auth"
          >
            <i className="lni lni-protection"></i> <span>Auth</span>
          </a>
          <ul id="auth" className="sidebar-dropdown list-unstyled collapse">
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">Login</a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">Register</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="sidebar-footer">
        <a href="#" className="sidebar-link">
          <i className="lni lni-exit"></i> <span>Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
