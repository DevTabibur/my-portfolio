import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSideBar = ({ children }) => {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex md:p-10 p-4">
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-accent text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li className="my-2 text-warning">
              <NavLink to="/dashboard/post-blogs">Post Blogs</NavLink>
            </li>
            <li className="my-2 text-warning">
              <NavLink to="/dashboard/post-projects">Post Projects</NavLink>
            </li>
            <li className="my-2 text-warning">
              <NavLink to="/dashboard/manage-blogs">Manage Blogs</NavLink>
            </li>
            <li className="my-2 text-warning">
              <NavLink to="/dashboard/manage-projects">Manage Projects</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardSideBar;
