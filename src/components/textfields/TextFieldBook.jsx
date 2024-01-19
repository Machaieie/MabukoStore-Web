import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const TextFieldBook = ({ label, placeholder, name, type, color, size, margin, icon }) => {
  const renderIcon = () => {
    if (icon) {
      return (
        <InputAdornment position="start">
          <IconButton>
            {icon}
          </IconButton>
        </InputAdornment>
      );
    }
    return null;
  };

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      name={name}
      variant="outlined"
      autoComplete="off"
      type={type}
      color={color || 'primary'} 
      sx={{ width: size || '70%', margin: margin || 'auto' }}
      InputProps={{
        startAdornment: renderIcon(),
      }}
    />
  );
}

export default TextFieldBook;
