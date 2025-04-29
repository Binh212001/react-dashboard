import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import App from "./App.tsx";
import { router } from "./routes/routes.ts";
import { RouterProvider } from "react-router-dom";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
