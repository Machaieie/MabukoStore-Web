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

const SuccessAlert = ({mensagem,}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '10%',
        left: '70%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
    >
      <Stack spacing={1}>
        <Alert
          size="lg"
          color="primary"
          variant="solid"
          invertedColors
          startDecorator={
            <AspectRatio
              variant="solid"
              ratio="1"
              sx={{
                minWidth: 40,
                borderRadius: '50%',
                boxShadow: '0 2px 12px 0 rgb(0 0 0/0.2)',
              }}
            >
              <div>
                <Check fontSize="xl2" />
              </div>
            </AspectRatio>
          }
          endDecorator={
            <IconButton
              variant="plain"
              sx={{
                '--IconButton-size': '32px',
                transform: 'translate(0.5rem, -0.5rem)',
              }}
            >
              <Close />
            </IconButton>
          }
          sx={{ alignItems: 'flex-start', overflow: 'hidden' }}
        >
          <div>
            <Typography level="title-lg">Success</Typography>
            <Typography level="body-sm">
              {mensagem}
            </Typography>
          </div>
          <LinearProgress
            variant="solid"
            color="success"
            value={40}
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
            }}
          />
        </Alert>
      </Stack>
    </div>
  );
};

export default SuccessAlert;
