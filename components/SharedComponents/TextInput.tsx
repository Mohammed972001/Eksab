import React from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface TextInputProps {
  label: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  required?: boolean;
  options?: string[]; // For dropdown options
  disabled?: boolean; // Add disabled to the interface
  multiline?: boolean; // Whether the input supports multiline
  minRows?: number; // Minimum number of rows for multiline input
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  type,
  value,
  onChange,
  showPassword,
  onTogglePassword,
  required,
  options,
  disabled = false, // Default to false if no value is passed
  multiline = false, // Default to non-multiline
  minRows, // Minimum rows for multiline
}) => {
  // Check if it's a dropdown component and handle it differently
  if (options) {
    return (
      <FormControl
        fullWidth
        required={required}
        variant="outlined"
        sx={{ direction: "rtl" }} // Ensures overall RTL direction
      >
        <InputLabel
          sx={{
            right: "1.75rem", // Aligns the label to the right
            left: "unset", // Removes default left alignment
            transformOrigin: "right", // Ensures shrink animation aligns from the right
            "&.MuiInputLabel-shrink": {
              right: "1.75rem", // Keeps the label aligned right when shrunk
            },
          }}
        >
          {label}
        </InputLabel>

        <Select
          value={value}
          onChange={onChange as (event: SelectChangeEvent) => void}
          label={label}
          sx={{
            textAlign: "right", // Ensures text aligns right in the dropdown
            paddingRight: "1.75rem", // Adds space for the dropdown icon
            "& .MuiOutlinedInput-notchedOutline": {
              textAlign: "right", // Ensures the outline text aligns to the right
            },
            "& .MuiSelect-icon": {
              right: "unset",
              left: "10px", // Moves the dropdown arrow icon to the left
            },
          }}
          disabled={disabled} // Apply disabled prop here
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  return (
    <TextField
      label={
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
      disabled={disabled} // Apply disabled prop here
      multiline={multiline} // Enable multiline if true
      minRows={multiline ? minRows : undefined} // Set minRows if multiline is true
      sx={{
        "& label": {
          right: "1.75rem", // Moves the label inside in RTL context
          transformOrigin: "right",
        },
        "& legend": {
          textAlign: "right",
        },
        "& .MuiInputBase-input": {
          textAlign: type === "email" ? "left" : "right",
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
