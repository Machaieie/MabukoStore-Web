import React from 'react';
import Button from '@mui/material/Button';

const SubmitButton = ({ label, onClick, variant = 'contained' }) => {
  return (
    <Button variant={variant} color="primary" onClick={onClick}>
      {label}
    </Button>
  );
};

export default SubmitButton;
