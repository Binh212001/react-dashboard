import { useTheme } from "@mui/material/styles";

export const useMenuColor = () => {
  const theme = useTheme();
  return theme.palette.menu || "#f0f0f0";
};
