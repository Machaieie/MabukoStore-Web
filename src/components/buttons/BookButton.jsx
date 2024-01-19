import React from 'react';
import Button from '@mui/material/Button';
import { spacing } from '@mui/system';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme, width }) => ({
  ...spacing(theme),
  width: width || 'auto', 
}));

const BookButton = ({ type = 'button', label, variant = 'contained', color = 'primary', icon, mr, ml, mt, mb, onClick, size, width }) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      color={color}
      startIcon={icon}
      mr={mr}
      ml={ml}
      mt={mt}
      mb={mb}
      onClick={onClick}
      size={size}
      width={width} 
    >
      {label}
    </StyledButton>
  );
};

export default BookButton;
