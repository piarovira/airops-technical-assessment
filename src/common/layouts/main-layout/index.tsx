import { Outlet } from "react-router-dom";

import { Sidebar } from "common/layouts/main-layout/sidebar";

export const MainLayout = () => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 ml-64 overflow-auto">
      <Outlet />
    </div>
  </div>
);
