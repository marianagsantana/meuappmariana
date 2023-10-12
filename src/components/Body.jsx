import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import HeaderBootstrap from "./Header";

export default function Body() {
  return (
    <div className="container">
      <HeaderBootstrap />      
      <Outlet />
      <Footer />
    </div>
  )
}
