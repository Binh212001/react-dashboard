import React, { useState } from "react";
import { Input, InputProps, TextField, TextFieldProps } from "@mui/material";
import { useMuiTheme } from "../../hooks/mui/useMuiTheme";

export const StyledTextField = (props: TextFieldProps) => {
  const { primarColor } = useMuiTheme(); // Nếu bạn đặt sai chính tả, hãy sửa lại là "primaryColor"
  const [focused, setFocused] = useState(false);

  return <TextField {...props} variant="outlined" color="tertiary" />;
};
