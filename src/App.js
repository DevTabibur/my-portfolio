import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import HeaderNav from "./Pages/Shared/HeaderNav/HeaderNav";

function App() {
  return (
    <>
      <HeaderNav />
      <Home />
      <Footer />
    </>
  );
}

export default App;
