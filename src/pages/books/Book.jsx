import React, { useState, useEffect } from 'react'
import { Box, Grid, Card, Button, TextField } from '@mui/material'
import BookTable from '../../components/table/BookTable'
import { toast } from 'react-toastify';
import http from '../../http.common';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Modal, ModalDialog } from '@mui/joy';
import { promotionSchema } from '../../services/SchemaService';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import BookSelect from '../../components/Dropdown/BookSelect';
const headers = [
  { key: 'id', label: 'ID', align: 'left' },
  { key: 'title', label: 'Titulo', align: 'left' },
  { key: 'publisherDate', label: 'Data de publicacão', align: 'left' },
  { key: 'edition', label: 'Edicão', align: 'left' },
  { key: 'gender', label: 'Gênero', align: 'left' },
  { key: 'price', label: 'Preco', align: 'left' },
  { key: 'author', label: 'Autor', align: 'left' },
  { key: 'publisher', label: 'Editora', align: 'left' },
];



const Book = () => {
  const [book, setBook] = useState([])
  const [open, setOpen] = React.useState(false);
  const [livroSelecionado, setLivroSelecionado] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(promotionSchema),
    mode: "onBlur"
  });

  const fetchData = async () => {

    const response = await http.get('/books');
    console.log(response)
    const data = response.data.map(book => ({
      id: book.id,
      title: book.title,
      publisherDate: book.publisherDate,
      edition: book.edition,
      gender: book.gender,
      price: book.price,
      author: book.author.name,
      publisher: book.publisher.name,
    }));
    setBook(data);
  }

  const onSubmit = async (data) => {
    try {


    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };
  const handleChangeBook = (event) => {
    setAutorSelecionado(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={() => setOpen(false)}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
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
            <ModalClose />
            <Typography id="nested-modal-title" level="h2">
              Adicionar Promocão
            </Typography>

            <Box
              sx={{
                mt: 1,
                display: 'flex',
                gap: 1,
                flexDirection: { xs: 'column', sm: 'row-reverse' },
              }}
            >

              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                  marginLeft: "100px"
                }}>
                  <Grid item xs={6}>
                    <BookSelect
                      label="Livro"
                      onChange={handleChangeBook}
                      value={livroSelecionado}
                      options={book}
                      name="book"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Preco promocional"
                      placeholder="Preco promocional"
                      fullWidth
                      {...register("promotionPrice")}
                      error={!!errors.promotionPrice}
                      helperText={errors.promotionPrice?.message}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type='submit'
                      variant="contained"
                      fullWidth
                      color="primary">
                      Adicionar
                    </Button>
                  </Grid>
                </Grid>
              </form>

            </Box>
          </ModalDialog>
        </Modal>
        <Grid container>
          <Grid item xs={12} >

            <Button
              type='submit'
              variant="contained"
              size='small'
              color="primary"
              sx={{
                marginBottom: 2
              }}
              onClick={() => setOpen(true)}
            >

              Adicionar Promocão
            </Button>

          </Grid>
          <Grid item xs={12} >
            <Card>
              <BookTable rows={book} headers={headers} />
            </Card>
          </Grid>
        </Grid>
      </>
    </Box>
  )
}

export default Book
