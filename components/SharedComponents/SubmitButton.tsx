import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";

interface SubmitButtonProps {
  disabled?: boolean;
  onClick: () => void;
  buttonText: string;
  classContainer?: string;
  rightIcon?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  disabled,
  onClick,
  buttonText,
  classContainer,
  rightIcon,
}) => (
  <Button
    variant="contained"
    color="primary"
    fullWidth
    disabled={disabled}
    onClick={onClick}
    className={`rounded-[100px] text-lg md:text-xl font-medium h-12 mt-6 bg-primary flex items-center gap-2 ${classContainer}`}
  >
    {rightIcon && <Image src={rightIcon} alt="icon" width={24} height={24} />}
    {buttonText}
  </Button>
);

export default SubmitButton;
