import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Sidebar } from "../sidebar";
import { Box } from "@mui/material";
import { StyleBox } from "../styleBox";
export function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <Box className="flex-1">
        <Header />
        <Outlet />
      </Box>
    </div>
  );
}
