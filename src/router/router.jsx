import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main></Main>}>
          <Route index element={<Home />}></Route>
        </Route>
        <Route path="dashboard" element={<DashboardLayout></DashboardLayout>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
