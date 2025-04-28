import { Box, Stack } from "@mui/material";
import ThemeToggleButton from "../theme/theme-toggle-button";
import { StyledTextField } from "./styledTextField";

function Header() {
  return (
    // <div>

    // </div>
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      useFlexGap
    >
      {/* //Search */}
      <Box>
        <StyledTextField />
      </Box>
      <ThemeToggleButton />
    </Stack>
  );
}

export default Header;
