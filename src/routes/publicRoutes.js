import React from 'react';
import About from '../Pages/About/About';
import Blog from '../Pages/Blog/Blog';
import SingleBlog from '../Pages/Blog/SingleBlog';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Portfolio from '../Pages/Portfolio/Portfolio';
import SinglePortfolio from '../Pages/Portfolio/SinglePortfolio';
import Services from '../Pages/Services/Services';

const publicRoutes = [
  {path:"/", name:"Home", Component:Home},
  {path:"#portfolio", name:"Portfolio", Component:Portfolio},
  {path:"#contact", name:"Contact", Component:Contact},
  {path:"#services", name:"Services", Component:Services},
  {path:"#blogs", name:"Blogs", Component:Blog},
  {path:"blogs/:id", name:"SingleBlog", Component:SingleBlog},
  {path:"portfolio/:id", name:"SinglePortfolio", Component:SinglePortfolio},
]

export default publicRoutes