import { useTheme } from "@mui/material/styles";

export const useMode = () => {
  const theme = useTheme();
  return theme.palette.mode || "light";
};
