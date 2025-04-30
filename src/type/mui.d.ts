import { TextField } from "@mui/material";
import "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
  }
}

import "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
    color?: {
      primary?: string;
    };
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
    color?: {
      primary?: string;
    };
  }
}

declare module "@mui/material/InputBase" {
  interface InputBasePropsColorOverrides {
    tertiary: true;
  }
}
