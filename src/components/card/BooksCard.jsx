import React, { useState } from 'react'
import { Card, CardContent, CardActions, CircularProgress, SvgIcon } from '@mui/joy';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';

const BooksCard = ({ title, content, circularvalue, modalTitle, modalBody, icon}) => {
    const [open, setOpen] = useState(false);

    return (
        <><Card variant="solid" color="primary" invertedColors sx={{
            minWidth: 300,
            margin: "auto",
            height: 200,
        }}>
            <CardContent orientation="horizontal">
                <CircularProgress size="lg" determinate  value={circularvalue}>
                <SvgIcon>
                {icon}
                </SvgIcon>
                </CircularProgress>
                <CardContent>
                    <Typography level="body-md">{title}</Typography>
                    <Typography level="h2">{content}</Typography>
                </CardContent>

                
            </CardContent>

            <CardActions>
            <Button
          variant="soft"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
          onClick={() => setOpen(true)}
        >
          Detalhes
        </Button>
                
                
            </CardActions>
        </Card>
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

export default BooksCard
