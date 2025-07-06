import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Quotes from "../pages/Quotes";

export default function MainLayout() {
  return (
    <>
      <div
        id="app-container"
        className="font-arimo bg-gray-100 min-h-screen flex"
      >
        <div id="layout-wrapper" className="font-arimo flex flex-row flex-1">
          <Sidebar />
          <div id="main-content" className="font-arimo flex-1 p-4">
            <Header />
            <Quotes />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
