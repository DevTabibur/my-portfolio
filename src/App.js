import { Routes, Route, Link } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import HeaderNav from "./Pages/Shared/HeaderNav/HeaderNav";
import publicRoutes from "./routes/publicRoutes";

// demo 1 http://john.wethemez.com/Home6
// demo 2 http://john.wethemez.com/Home-frelencer

function App() {
  return (
    <>
      <HeaderNav>

        <Routes>
          {publicRoutes.map(({ path,  Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>


      </HeaderNav>
    </>
  );
}

export default App;
