import { useTheme } from "@mui/material";
import React, { useState } from "react";
import { useMenuColor } from "../../hooks/useMenuColor";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const StyledTextField = (props: Props) => {
  const backgroundColor = useMenuColor();
  const [focused, setFocused] = useState(false);

  // Handle focus and blur events
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    props.onFocus?.(e); // Nếu có onFocus được truyền từ ngoài thì gọi
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    props.onBlur?.(e); // Nếu có onBlur được truyền từ ngoài thì gọi
  };

  return (
    <input
      {...props}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{
        width: "100%",
        padding: "12px 16px",
        border: `1px solid ${focused ? backgroundColor : "#ccc"}`,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: "transparent",
        outline: "none",
        boxShadow: focused ? `0 0 0 2px ${backgroundColor}33` : "none",
        transition: "border 0.3s, box-shadow 0.3s",
        ...props.style, // Cho phép style từ ngoài ghi đè
      }}
    />
  );
};
