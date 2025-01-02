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
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  type,
  value,
  onChange,
  showPassword,
  onTogglePassword,
}) => {
  return (
    <TextField
      label={label}
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
          textAlign: type === "password" || showPassword ? "right" : "left", // Keep text right-aligned for password fields
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
                  <Visibility sx={{ color: "primary.main" }} /> // Apply primary color to Visibility
                ) : (
                  <VisibilityOff /> // Default color for VisibilityOff
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
