"use client";
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#333",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "theme" },
          style: {
            backgroundColor: "#333",
            color: "#0284c7",
            border: "1px solidrgb(235, 253, 186)",
            "&:hover": {
              backgroundColor: "red",
            },
          },
        },
      ],
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#60a5fa",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "theme" },
          style: {
            backgroundColor: "#fff",
            border: "1px solid #333",
            color: "#000",
          },
        },
      ],
    },
  },
});
