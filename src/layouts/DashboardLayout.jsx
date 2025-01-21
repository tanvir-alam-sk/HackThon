import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

export default function DashboardLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}
