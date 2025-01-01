import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Props definition for the TextInput component
interface TextInputProps {
  label: string; // Label for the input field
  type: string; // Type of the input (e.g., text, password)
  value: string; // Value of the input field
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>; // Function to handle input change
  showPassword?: boolean; // Optional prop to manage password visibility
  onTogglePassword?: () => void; // Optional prop to toggle password visibility
}

const TextInput: React.FC<TextInputProps> = ({
  label, // Input field label
  type, // Input type (text, password, etc.)
  value, // Controlled value for the input
  onChange, // Change handler function
  showPassword, // Controls if the password is shown
  onTogglePassword, // Toggle function for password visibility
}) => {
  return (
    <TextField
      label={label} // Sets the label of the input
      type={type} // Sets the input type (password or text)
      value={value} // Binds the value to the component state
      onChange={onChange} // Handles input changes
      variant="outlined" // Specifies the input field's appearance
      fullWidth // Ensures the field takes up full width
      sx={{
        // Custom styles for the text field
        "& label": {
          left: "unset",
          right: "1.75rem", // Ensures the label aligns to the right for RTL
          transformOrigin: "right",
        },
        "& legend": {
          textAlign: "right", // Aligns the label text to the right
        },
        "& .MuiInputBase-input": {
          textAlign: "left", // Aligns the input text to the left for RTL
        },
      }}
      // Dynamically adds password visibility toggle if needed
      slotProps={
        showPassword
          ? {
              input: {
                endAdornment: (
                  // InputAdornment is added for password visibility toggle
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={onTogglePassword} // Trigger the password visibility toggle
                      edge="end"
                    >
                      {/* Display the respective icon for show or hide password */}
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }
          : {} // If no password visibility, keep slotProps empty
      }
    />
  );
};

export default TextInput;
