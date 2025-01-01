import React from "react";
import { Button } from "@mui/material";

interface SubmitButtonProps {
  disabled: boolean;
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ disabled, onClick }) => (
  <Button
    variant="contained"
    color="primary"
    fullWidth
    disabled={disabled}
    onClick={onClick}
    className="rounded-[100px] text-lg md:text-xl font-medium h-12 mt-6 bg-primary"
  >
    تسجيل الدخول
  </Button>
);

export default SubmitButton;
