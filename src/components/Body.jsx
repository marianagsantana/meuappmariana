import { Outlet } from "react-router-dom";
import { HeaderBootstrap } from "./Header";
import Footer from "./Footer";

export default function Body() {
  return (
    <div className="container">
      <HeaderBootstrap />
      <Outlet />
      <Footer />
    </div>
  )
}
