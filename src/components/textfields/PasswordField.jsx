import React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/joy/FormControl';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

const PasswordField = ({ name, onChange, value, placeholder, label }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <Input
          size="lg"
          sx={{ height: 55 }}
          placeholder={placeholder}
          name={name}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          endDecorator={
            <IconButton color="neutral" onClick={handlePasswordVisibility}>
              <VisibilityRoundedIcon />
            </IconButton>
          }
        />
      </FormControl>
    </Box>
  );
};

export default PasswordField;
