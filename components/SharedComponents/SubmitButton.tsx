import React from "react";
import { Button, CircularProgress } from "@mui/material";
import Image from "next/image";
import clsx from "clsx"; // Utility for conditional class merging

interface SubmitButtonProps {
  disabled?: boolean;
  onClick: () => void;
  buttonText: string;
  classContainer?: string;
  rightIcon?: string;
  fullWidth?: boolean;
  loading?: boolean; // New prop for loading state
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  disabled,
  onClick,
  buttonText,
  classContainer,
  rightIcon,
  fullWidth = true, // default to true for full-width
  loading = false, // default loading state to false
}) => (
  <Button
    className={clsx("bg-primary", classContainer)} // Merge the default and provided classes
    variant="contained"
    fullWidth
    disabled={disabled || loading} // Disable button if loading
    onClick={onClick}
    sx={{
      paddingInline: "40px",
      paddingBlock: "26px",
      borderRadius: "100px",
      fontSize: "1.125rem",
      fontWeight: "medium",
      height: "48px",
      mt: "1.5rem",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      width: fullWidth ? "100%" : "fit-content", // conditional width based on fullWidth prop
    }}
  >
    {loading ? (
      <CircularProgress size={24} color="inherit" /> // Show spinner when loading
    ) : (
      rightIcon && <Image src={rightIcon} alt="icon" width={24} height={24} />
    )}
    {buttonText}
  </Button>
);

export default SubmitButton;
