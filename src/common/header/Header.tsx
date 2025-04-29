import { Box, Stack } from "@mui/material";
import ThemeToggleButton from "../../theme/theme-toggle-button";
import "./header.css";
import UserDropdown from "./userDropdown/UserDropdown";
import { StyledTextField } from "../form/styleTextField";

export function Header() {
  return (
    <Box sx={{ boxShadow: 2, p: 1 }}>
      <Stack
        id="header"
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        useFlexGap
      >
        {/* //Search */}
        <Box>
          <StyledTextField placeholder="Search" />
        </Box>
        <Stack direction="row">
          <ThemeToggleButton />
          <UserDropdown />
        </Stack>
      </Stack>
    </Box>
  );
}
