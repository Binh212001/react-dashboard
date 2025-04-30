import { useTheme } from "@mui/material/styles";

export const useMuiTheme = () => {
  const theme = useTheme();
  return {
    mode: theme.palette.mode,
    paperColor: theme.palette.background.paper,
    bgDefaultColor: theme.palette.background.default,
    primarColor: theme.palette.color?.primary || "#fff",
  };
};
