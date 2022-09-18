import React from "react";
import "./Dashboard.css";
import { useForm } from "react-hook-form";
import PortfolioForm from "../Shared/Form/PortfolioForm";
import BlogForm from "../Shared/Form/BlogForm";
import useProjects from "../../Hooks/useProjects";
import src from "daisyui";
import DashboardSideBar from "../Shared/DashboardSideBar/DashboardSideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [projects] = useProjects();

  return (
    <>

    <DashboardSideBar>
      <Outlet/>
    </DashboardSideBar>
      {/* <div className="container mx-auto px-4 pb-12 pt-4">
        <h2 className="text-center py-6 text-3xl font-semibold text-primary">
          Welcome to Dashboard
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="blog-form">
            <h2 className="text-left py-4 text-2xl font-semibold text-primary">
              Upload Blog
            </h2>
            <BlogForm />
          </div>

          <div className="portfolio-form">
            <h2 className="text-left py-4 text-2xl font-semibold text-primary">
              Upload Projects
            </h2>
            <PortfolioForm />
            {projects.map((pj, index) => (
              <img src={pj.filename} alt="img" />
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;
