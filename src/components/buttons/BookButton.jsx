import React from 'react';
import Button from '@mui/material/Button';
import { spacing } from '@mui/system';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(spacing);

const BookButton = ({ type = 'button', label, variant = 'contained', color = 'primary', icon, mr, ml, mt, mb, onClick }) => {
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
    >
      {label}
    </StyledButton>
  );
};

export default BookButton;
