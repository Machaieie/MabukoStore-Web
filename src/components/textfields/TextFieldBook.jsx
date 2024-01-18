import React from 'react'
import TextField from '@mui/material/TextField';

const TextFieldBook = ({ label, placeholder, name}) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      fullWidth
      name={name}
      variant="outlined"
    />
  )
}

export default TextFieldBook
