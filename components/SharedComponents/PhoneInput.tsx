import React from "react";
import { TextField, InputAdornment, MenuItem, Select } from "@mui/material";

interface PhoneInputProps {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  countryCode: string;
  onCountryCodeChange: (value: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  label,
  value,
  onChange,
  countryCode,
  onCountryCodeChange,
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      required // Mark the field as required
      InputLabelProps={{
        sx: {
          "& .MuiInputLabel-asterisk": {
            color: "red", // Apply red color to the asterisk
          },
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Select
              value={countryCode}
              onChange={(e) => onCountryCodeChange(e.target.value)}
              disableUnderline
              variant="standard"
              sx={{
                minWidth: "60px",
                pl: 2,
                "& .MuiSelect-select": {
                  padding: "0 4px",
                  textAlign: "center",
                  color: "#3454B4",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiSelect-icon": {
                  color: "#3454B4",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    direction: "rtl", // Right-to-left for country codes
                  },
                },
              }}
            >
              {/* Country codes */}
              <MenuItem value="+966">+966</MenuItem>
              <MenuItem value="+1">+1</MenuItem>
              <MenuItem value="+91">+91</MenuItem>
            </Select>
          </InputAdornment>
        ),
        sx: {
          "& input": {
            textAlign: "left",
          },
        },
      }}
      sx={{
        "& label": {
          left: "unset",
          right: "1.75rem",
          transformOrigin: "right",
        },
        "& legend": {
          textAlign: "right",
        },
      }}
    />
  );
};

export default PhoneInput;
