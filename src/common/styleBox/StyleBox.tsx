import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface StyleBoxProps {
  children: ReactNode; // children có thể là bất kỳ ReactNode nào (bao gồm string, JSX element,...)
}

export function StyleBox({ children }: StyleBoxProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      {children}
    </Box>
  );
}
