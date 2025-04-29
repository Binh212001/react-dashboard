import "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    theme: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    menu: string; // Add the `menu` property to the `Palette` interface
    bgSecondary: string;
  }

  interface PaletteOptions {
    menu: string;
    bgSecondary: string;
  }
}
