import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  typography: {
    fontFamily: `'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },

  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5", // 🎯 màu nền toàn trang
      paper: "#fff",
    },
    text: {
      primary: "#444050", // màu chữ chính (body, h1–h6)
    },
    primary: {
      main: "#333",
    },
    bgSecondary: "#333",
    menu: "#ED5778",
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
  typography: {
    fontFamily: `'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },
  palette: {
    mode: "dark",
    text: {
      primary: "#cfcde4",
    },
    background: {
      default: "#25293C",
      paper: "#3A3D53",
    },
    primary: {
      main: "#60a5fa",
    },
    menu: "#8A80F3",
    bgSecondary: "#333",
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
