import React from "react";
import "./Dashboard.css";
import DashboardSideBar from "../Shared/DashboardSideBar/DashboardSideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <DashboardSideBar>
        <Outlet />
      </DashboardSideBar>
    </>
  );
};

export default Dashboard;
