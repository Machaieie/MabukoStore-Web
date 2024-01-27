import React, { useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog'

const PromotionCard = ({ title, content, btninfo }) => {
    const [open, setOpen] = useState(false);
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
                        Are you absolutely sure?
                    </Typography>
                    <Typography id="nested-modal-description" textColor="text.tertiary">
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
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
            <Card
                data-resizable
                sx={{
                    textAlign: 'center',
                    alignItems: 'center',
                    width: 343,
                    overflow: 'auto',
                    resize: 'horizontal',
                    '--icon-size': '100px',
                }}
            >
                <CardOverflow variant="solid" color="warning">
                    <AspectRatio
                        variant="outlined"
                        color="warning"
                        ratio="1"
                        sx={{
                            m: 'auto',
                            transform: 'translateY(50%)',
                            borderRadius: '50%',
                            width: 'var(--icon-size)',
                            boxShadow: 'sm',
                            bgcolor: 'background.surface',
                            position: 'relative',
                        }}
                    >
                        <div>
                            <BakeryDiningIcon color="warning" sx={{ fontSize: '4rem' }} />
                        </div>
                    </AspectRatio>
                </CardOverflow>
                <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
                    🎊 {title} 🎊
                </Typography>
                <CardContent sx={{ maxWidth: '40ch' }}>
                    {content}
                </CardContent>
                <CardActions
                    orientation="vertical"
                    buttonFlex={1}
                    sx={{
                        '--Button-radius': '40px',
                        width: 'clamp(min(100%, 160px), 50%, min(100%, 200px))',
                    }}
                >
                    <Button variant="solid" color="warning" onClick={() => setOpen(true)}>
                        Mais informacões
                    </Button>

                </CardActions>
            </Card>
        </>
    )
}

export default PromotionCard
