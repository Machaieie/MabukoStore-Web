import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PromotionSelect = ({value, label, options, onChange,  size}) => {
  return (
    <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    //size={size}
                    sx={{
                        width: size
                    }}
                    onChange={onChange}
                >
                    {options.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
  )
}

export default PromotionSelect
