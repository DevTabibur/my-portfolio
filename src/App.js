import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import RequireAdmin from "./authentication/RequireAdmin";
import RequireAuth from "./authentication/RequireAuth";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import ManageBlogs from "./Pages/ManageBlogs/ManageBlogs";
import ManageProjects from "./Pages/ManageProjects/ManageProjects";
import NotFound from "./Pages/NotFound/NotFound";
import PostBlog from "./Pages/PostBlog/PostBlog";
import PostProjects from "./Pages/PostProjects/PostProjects";
import Footer from "./Pages/Shared/Footer/Footer";
import HeaderNav from "./Pages/Shared/HeaderNav/HeaderNav";
import privateRoutes from "./routes/privateRoutes";
import publicRoutes from "./routes/publicRoutes";

function App() {
  return (
    <>
      <HeaderNav>
        <Routes>
          {publicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

          {/* protected route */}
          <Route element={<RequireAuth/>}>
            {privateRoutes.map(({ path, name, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>

          <Route path="*" element={<NotFound />}></Route>

          {/* Admin Route */}
          <Route element={<RequireAdmin />}>
            <Route path="/dashboard" element={<Dashboard />}>
              {/* nested route */}
              <Route path="post-blogs" element={<PostBlog />} />
              <Route path="post-projects" element={<PostProjects />} />
              <Route path="manage-blogs" element={<ManageBlogs />} />
              <Route path="manage-projects" element={<ManageProjects />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </HeaderNav>
    </>
  );
}

export default App;
