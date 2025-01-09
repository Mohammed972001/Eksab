import React from "react";
import { Button } from "@mui/material";

interface CancelButtonProps {
  onClick: () => void;
  buttonText: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

const CancelButton: React.FC<CancelButtonProps> = ({
  onClick,
  buttonText,
  disabled = false,
  fullWidth = false,
}) => {
  return (
    <Button
      variant="contained"
      disabled={disabled}
      onClick={onClick}
      sx={{
        paddingInline: "40px",
        borderRadius: "100px",
        fontSize: "1.125rem",
        fontWeight: "medium",
        height: "48px",
        mt: "1.5rem",
        bgcolor: "#ffffff", // White background
        color: "#000000", // Black text color
        border: "1px solid #C6C7CA", // Optional border for cancel button
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: fullWidth ? "100%" : "fit-content", // Handle fullWidth prop
        "&:hover": {
          bgcolor: "#f0f0f0", // Light gray on hover
        },
      }}
    >
      {buttonText}
    </Button>
  );
};

export default CancelButton;
