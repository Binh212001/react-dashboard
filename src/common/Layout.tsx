import { Box, Grid } from "@mui/material";
import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Box>
      <Grid container spacing={2} columns={25}>
        <Grid
          size={{
            xs: 1,
            sm: 1,
            md: 1,
            lg: 2,
          }}
        >
          SideBar
        </Grid>
        <Grid
          size={{
            xs: 24,
            sm: 24,
            md: 24,
            lg: 23,
          }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;
