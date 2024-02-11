import React, { useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow'
import IconButton from '@mui/joy/IconButton';;
import Typography from '@mui/joy/Typography';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import { Box } from '@mui/material';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import BookIcon from '@mui/icons-material/Book';
import Books from "../../assets/png/iconsLogo/books.jpg"

const PromotionCard = ({ title, content, btninfo, modalTitle, cardTitle, promoPrice, imgsource, validDate}) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                        
                    }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                    >
                        {modalTitle}
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                        <Card sx={{ width: 320 }}>
                            <div>
                                <Typography level="title-lg">{cardTitle}</Typography>
                                <Typography level="body-sm">{validDate}</Typography>
                                
                            </div>
                            <AspectRatio minHeight="120px" maxHeight="200px">
                               <img src={Books}  alt="" srcset="" />
                            </AspectRatio>
                            <CardContent orientation="horizontal">
                                <div>
                                    <Typography level="body-xs">Desconto de:</Typography>
                                    <Typography fontSize="lg" fontWeight="lg">
                                       { promoPrice} %
                                    </Typography>
                                </div>
                                
                            </CardContent>
                        </Card>
                    </Typography>
                </Sheet>
            </Modal>
            <Card
                data-resizable
                sx={{
                    textAlign: 'center',
                    alignItems: 'center',
                    width: 343,
                    overflow: 'auto',
                    resize: '200px',
                    '--icon-size': '120px',
                }}
            >
                <CardOverflow variant="solid" color="primary">
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
                        <BookIcon color="primary" sx={{ fontSize: '4rem' }} />
                        </div>
                    </AspectRatio>
                </CardOverflow>
                <Typography level="title-lg" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
                    🎊 {title} 🎊
                </Typography>
                <CardContent sx={{ maxWidth: '40ch'}}>
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
                    <Button variant="solid" color="primary" onClick={() => setOpen(true)}>
                        Mais informacões
                    </Button>

                </CardActions>
            </Card>
        </>
    )
}

export default PromotionCard
