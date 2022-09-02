import React from 'react';
import About from '../Pages/About/About';
import Blog from '../Pages/Blog/Blog';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';

const publicRoutes = [
  {path:"/", name:"Home", Component:Home},
  {path:"/about", name:"About", Component:About},
  {path:"/contact", name:"Contact", Component:Contact},
  {path:"/services", name:"Services", Component:Services},
  {path:"/blogs", name:"Blogs", Component:Blog}
]

export default publicRoutes