import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import HeaderNav from "./Pages/Shared/HeaderNav/HeaderNav";

// demo 1 http://john.wethemez.com/Home6
// demo 2 http://john.wethemez.com/Home-frelencer

function App() {
  return (
    <>
      <HeaderNav />
      <Home />
      {/* <Footer /> */}
    </>
  );
}

export default App;
