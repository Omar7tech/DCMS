import { Route, Routes } from "react-router";

import About from "../pages/About";
import Home from "../pages/admin/dashboard/Home";
import Settings from "../pages/admin/Settings";
import Users from "../pages/admin/Users";
import Vehicles from "../pages/admin/Vehicles";
import Drivers from "../pages/admin/Drivers";
import Welcome from "../pages/Welcome";
import AdminLayout from "../components/layouts/AdminLayout";

export default function RouterRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="users" element={<Users />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="drivers" element={<Drivers />} />
      </Route>
    </Routes>

  );
}