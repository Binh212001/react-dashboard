import { useTheme } from "@mui/material";
import React from "react";
import { useMenuColor } from "../../hooks/useMenuColor";
import { useSecondaryColor } from "../../hooks/useDefaultColor";

type OptionProps = {
  value: any;
  children: React.ReactNode;
};

export const StyledOption = ({ value, children }: OptionProps) => {
  const backgroundColor = useSecondaryColor();
  return (
    <option value={value} style={{ backgroundColor }}>
      {children}
    </option>
  );
};
