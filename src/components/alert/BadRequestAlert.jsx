import React from 'react';
import Alert from '@mui/joy/Alert';
import AspectRatio from '@mui/joy/AspectRatio';
import IconButton from '@mui/joy/IconButton';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';
import LinearProgress from '@mui/joy/LinearProgress';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import Warning from '@mui/icons-material/Warning';

const BadRequestAlert = ({title,message}) => {
  return (
    <div style={{
        position: 'absolute',
        top: '10%',
        left: '70%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}>
      <Stack spacing={1}>
      <Alert
        variant="soft"
        color="danger"
        invertedColors
        startDecorator={
          <CircularProgress size="lg" color="danger">
            <Warning />
          </CircularProgress>
        }
        sx={{ alignItems: 'flex-start', gap: '1rem' }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography level="title-md">{title}</Typography>
          <Typography level="body-md">
            {message}
          </Typography>
        </Box>
      </Alert>
      </Stack>
    </div>
  )
}

export default BadRequestAlert
