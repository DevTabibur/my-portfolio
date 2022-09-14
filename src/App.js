import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import RequireAuth from "./authentication/RequireAuth";
import Blog from "./Pages/Blog/Blog";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import HeaderNav from "./Pages/Shared/HeaderNav/HeaderNav";
import privateRoutes from "./routes/privateRoutes";
import publicRoutes from "./routes/publicRoutes";

// demo 1 http://john.wethemez.com/Home6
// demo 2 http://john.wethemez.com/Home-frelencer
// main demo https://preview.themeforest.net/item/lendex-personal-portfolio-bootstrap-5-template/full_screen_preview/31542002?_ga=2.264054789.880580461.1661966293-1240890369.1657795515

function App() {
  return (
    <>
      <HeaderNav>
        <Routes>
          {publicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

          <Route path="/dashboard" element={<RequireAuth>
            {privateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          </RequireAuth>}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        <Footer />
      </HeaderNav>
    </>
  );
}

export default App;
