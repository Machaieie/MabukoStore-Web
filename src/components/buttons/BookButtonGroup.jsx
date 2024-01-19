import React from 'react';
import Box from '@mui/material/Box';
import BookCancelButton from './BookCancelButton';
import BookSubmitButton from './BookSubmitButton';

const BookButtonGroup = ({ cancelRoute, children }) => {
  return (
    <Box mt={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      {children ? (
        children
      ) : (
        <>
          <BookCancelButton route={cancelRoute} />
          <BookSubmitButton />
        </>
      )}
    </Box>
  );
};

export default BookButtonGroup;
