import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Sidebar } from "../sidebar";
import { StyleBox } from "../styleBox";
import "./layout.css";
export function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <Container maxWidth="xl" className="flex-1">
        <Header />
        <div className="content">
          <StyleBox>
            <div className="p-30">
              <Outlet />
            </div>
          </StyleBox>
        </div>
      </Container>
    </div>
  );
}
