import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';

const BookModal = ({status,modalTitle, modalBody, onclose }) => {
  return (
    <>
    <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="nested-modal-title"
          aria-describedby="nested-modal-description"
          sx={(theme) => ({
            [theme.breakpoints.only('xs')]: {
              top: 'unset',
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
              transform: 'none',
              maxWidth: 'unset',
            },
          })}
        >
          <Typography id="nested-modal-title" level="h2">
           {modalTitle}
          </Typography>
          <Typography id="nested-modal-description" textColor="text.tertiary">
           {modalBody}
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: 'flex',
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row-reverse' },
            }}
          >
            <Button variant="solid" color="primary" onClick={() => setOpen(false)}>
              Continue
            </Button>
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </>
  )
}

export default BookModal
