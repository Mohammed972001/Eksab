import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";

interface SubmitButtonProps {
  disabled?: boolean;
  onClick: () => void;
  buttonText: string;
  classContainer?: string;
  rightIcon?: string;
  fullWidth? : boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  disabled,
  onClick,
  buttonText,
  classContainer,
  rightIcon,
  fullWidth = true, // default to true for full-width
}) => (
  <Button
    variant="contained"
    color="primary"
    fullWidth
    disabled={disabled}
    onClick={onClick}
    sx={{
      paddingInline:"40px",
      borderRadius: "100px",
      fontSize: "1.125rem",
      fontWeight: "medium",
      height: "48px",
      mt: "1.5rem",
      bgcolor: "#3454b4",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      width: fullWidth ? "100%" : "fit-content", // conditional width based on fullWidth prop
      ...(classContainer && { className: classContainer }),
    }}
  >
    {rightIcon && <Image src={rightIcon} alt="icon" width={24} height={24} />}
    {buttonText}
  </Button>
);

export default SubmitButton;
