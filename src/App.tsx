import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { ThemeModeProvider } from "./theme/theme-context";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeModeProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeModeProvider>
  );
}

export default App;
