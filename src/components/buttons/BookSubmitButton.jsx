import React from 'react';
import Button from '@mui/material/Button';

const BookSubmitButton = ({ label, onClick }) => {
  return (
    <Button type="submit" variant="contained" color="primary" onClick={onClick}>
      {label}
    </Button>
  );
};

export default BookSubmitButton;
