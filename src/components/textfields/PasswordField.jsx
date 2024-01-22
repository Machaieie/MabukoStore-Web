import React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

const PasswordField = ({name, onChange, value}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Input
        size="lg"
        sx={{height:55}}
        placeholder="Password"
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
    </Box>
  );
}

export default PasswordField;
