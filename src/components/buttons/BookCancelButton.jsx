import React from 'react';
import BookButton from './BookButton';
import { useNavigate } from 'react-router-dom';

const BookCancelButton = ({ label = 'Cancel', route }) => {
  const navigate = useNavigate();

  return (
    <BookButton
      label={label}
      variant="outlined"
      mr={2}
      onClick={() => (route ? navigate(route) : navigate(-1))}
    />
  );
};

export default BookCancelButton;
