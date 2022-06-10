import { Routes, Route, Link } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import HeaderNav from "./Pages/Shared/HeaderNav/HeaderNav";

// demo 1 http://john.wethemez.com/Home6
// demo 2 http://john.wethemez.com/Home-frelencer

function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/details/:id" element={<Details/>}></Route>
        <Route path="/blogs" element={<Blog/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
