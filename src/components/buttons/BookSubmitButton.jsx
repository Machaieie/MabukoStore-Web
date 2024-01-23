import React from 'react';
import Button from '@mui/material/Button';

const BookSubmitButton = ({ label }) => {
  return (
    <Button type="submit" variant="contained" color="primary">
      {label}
    </Button>
  );
};

export default BookSubmitButton;
