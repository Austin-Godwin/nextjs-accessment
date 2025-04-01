import React from "react";
import { TextField, FormControl, FormHelperText, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface CustomTextFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  showPasswordToggle?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  error,
  touched,
  onChange,
  onBlur,
  showPasswordToggle = false,
  showPassword = false,
  onTogglePassword,
}) => {
  return (
    <FormControl fullWidth margin="normal" error={touched && Boolean(error)}>
      <p className="mb-2 block text-xs font-large text-gray-900">{label}</p>
      <TextField
        hiddenLabel
        name={name}
        type={showPasswordToggle ? (showPassword ? "text" : "password") : type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        // helperText={touched && error ? error : ""}
        slotProps={{
          input: {
            endAdornment: showPasswordToggle ? (
              <InputAdornment position="end">
                <IconButton onClick={onTogglePassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ) : undefined,
          },
        }}
      />
      {touched && error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default CustomTextField;
