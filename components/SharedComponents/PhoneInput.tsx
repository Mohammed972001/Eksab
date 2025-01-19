import React from "react";
import { TextField, InputAdornment, MenuItem, Select } from "@mui/material";

interface PhoneInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  countryCode: string;
  onCountryCodeChange: (value: string) => void;
  errorMessage?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  label,
  value,
  onChange,
  countryCode,
  onCountryCodeChange,
  errorMessage,
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      required
      error={Boolean(errorMessage)}
      helperText={errorMessage}
      InputLabelProps={{
        sx: {
          "& .MuiInputLabel-asterisk": {
            color: "red",
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
                    direction: "rtl",
                  },
                },
              }}
            >
              <MenuItem value="+966">966+</MenuItem>
              <MenuItem value="+91">91+</MenuItem>
              <MenuItem value="+20">20+</MenuItem>
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
