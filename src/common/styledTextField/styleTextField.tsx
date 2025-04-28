import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledTextField = styled(TextField)(() => ({
  width: "100%", // Set width to 100% of the parent container
  borderRadius: 8, // Set border radius
  padding: "10px", // Set padding inside the TextField
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
    },

    "& .Mui-focused fieldset": {
      border: "none",
    },
  },
  "& .MuiInputBase-input": {
    padding: "8px 10px",
    "&.Mui-focused fieldset": {
      outline: "none",
    },
  },
}));
