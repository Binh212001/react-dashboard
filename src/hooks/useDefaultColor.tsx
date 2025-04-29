import { useTheme } from "@mui/material/styles";

export const useDefaultColor = () => {
  const theme = useTheme();
  return theme.palette.background.default;
};
