import React from "react";
import { Button } from "@mui/material";

interface SubmitButtonProps {
  disabled: boolean;
  onClick: () => void;
  buttonText: string; 
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ disabled, onClick, buttonText }) => (
  <Button
    variant="contained"
    color="primary"
    fullWidth
    disabled={disabled}
    onClick={onClick}
    className="rounded-[100px] text-lg md:text-xl font-medium h-12 mt-6 bg-primary"
  >
    {buttonText}
  </Button>
);

export default SubmitButton;
