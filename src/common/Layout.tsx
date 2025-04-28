import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
