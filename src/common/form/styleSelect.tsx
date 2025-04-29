import { Stack, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useMenuColor } from "../../hooks/useMenuColor";
import { useMode } from "../../hooks/UseMode";

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  children: React.ReactNode; // Chấp nhận children là các node React
  label?: string; // Thêm label làm prop
};

export const StyledSelect = ({ children, label, ...props }: Props) => {
  const backgroundColor = useMenuColor();
  const mode = useMode();
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <label>{label}</label>
      <select
        value={selectedValue}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "12px 16px",
          paddingTop: selectedValue ? "16px" : "12px",
          border: `1px solid ${
            selectedValue && mode === "dark" ? backgroundColor : "#ccc"
          }`,
          borderRadius: 8,
          fontSize: 16,
          outline: "none",
          backgroundColor: "transparent",
          boxShadow: selectedValue
            ? "0 0 0 2px rgba(25, 118, 210, 0.2)"
            : "none",
          transition: "border 0.3s, box-shadow 0.3s",
        }}
        {...props}
      >
        {children} {/* Render children */}
      </select>
    </Stack>
  );
};
