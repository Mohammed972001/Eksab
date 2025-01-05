import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface TextInputProps {
  label: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  required?: boolean; // Optional required prop
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  type,
  value,
  onChange,
  showPassword,
  onTogglePassword,
  required,
}) => {
  return (
    <TextField
      label={
        // Conditionally append asterisk if required is true
        <>
          {label}
          {required && <span className="text-red-500">*</span>}
        </>
      }
      type={type}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      sx={{
        "& label": {
          left: "unset",
          right: "1.75rem",
          transformOrigin: "right",
        },
        "& legend": {
          textAlign: "right",
        },
        "& .MuiInputBase-input": {
          textAlign: type === "email" ? "left" : "right", // Keep text left-aligned for email fields
        },
      }}
      slotProps={{
        input: {
          endAdornment: showPassword !== undefined && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={onTogglePassword}
                edge="end"
              >
                {showPassword ? (
                  <Visibility sx={{ color: "primary.main" }} />
                ) : (
                  <VisibilityOff />
                )}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default TextInput;
