import React, { useState, useEffect } from 'react'
import { Card, CardHeader, Grid, CardContent, FormControl, Box, TextField, Button } from "@mui/material";
import logo from "../../assets/png/backgraundpage.png";
import BookSelect from '../../components/Dropdown/BookSelect';
import BookDatePicker from '../../components/datepicker/BookDatePicker';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { yupResolver } from '@hookform/resolvers/yup';
import { bookSchema } from '../../services/SchemaService';
import { toast } from 'react-toastify';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import http from '../../http.common';
const today = dayjs();

const AddBook = () => {
  const { reset, register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(bookSchema),
    mode: "onBlur"
  });
  const [autores, setAutores] = useState([]);
  const [autorSelecionado, setAutorSelecionado] = useState('');
  const [editoraSelecionada, setEditoraSelecionada] = useState('');
  const [editoras, setEditoras] = useState([]);
  const [isLoading, setLoading] = useState(false);


  const fetchData = async () => {
    const autores = await http.get("/authors");
    setAutores(autores.data)


    const editoras = await http.get("/publishers");
    setEditoras(editoras.data);
  }

  const handleChangeEditora = (event) => {
    setEditoraSelecionada(event.target.value);
    console.log("Editora selecionado", event.target.value)
  };

  const handleChangeAutor = (event) => {
    setAutorSelecionado(event.target.value);
    console.log("Autor selecionado", event.target.value)
  };

  const onSubmit = async (data) => {
    console.log('Form Data:', {
      "author_id": autorSelecionado,
      "publisher_id": editoraSelecionada,
      "publisherDate": data.PublicherDate,
      "gender": data.gender,
      "title": data.title,
      "edition": data.edition,
      "price": 500
    });
    try {
      setLoading(true);
      const resposne = await http.post('/addBook', {
        "author_id": autorSelecionado,
        "publisher_id": editoraSelecionada,
        "publisherDate": data.PublicherDate,
        "gender": data.gender,
        "title": data.title,
        "edition": data.edition,
        "price": data.price
      });
      if (resposne.status ===201){
        toast.success('Autor cadastrado com sucesso!');
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        reset();
      }
     

    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };






  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${logo})`,
        backgroundSize: "30%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card sx={{
        boxShadow: 10, backgroundColor: "#f2f2f2"
      }}>
        <CardHeader
          title="Adicionar Livro"
          sx={{
            textAlign: "center",
          }}
        />
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
              marginLeft: "100px"
            }}>
              <Grid item xs={6}>
                <BookSelect
                  label="Autor"
                  onChange={handleChangeAutor}
                  value={autorSelecionado}
                  options={autores}
                  name="author"
                />
              </Grid>
              <Grid item xs={6}>
                <BookSelect
                  label="Editora"
                  onChange={handleChangeEditora}
                  value={editoraSelecionada}
                  options={editoras}
                  name="editora"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Título"
                  placeholder="Título"
                  fullWidth
                  {...register("title")}
                  error={!!errors.title}
                  helperText={errors.title?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Gênero"
                  name="gender"
                  placeholder="Gênero"
                  fullWidth
                  {...register("gender")}
                  error={!!errors.gender}
                  helperText={errors.gender?.message}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  label="Data de publicacao"
                  type='date'
                  placeholder="Data de Publicacao"
                  fullWidth
                  {...register("PublicherDate")}

                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Edicão"
                  name="edition"
                  placeholder="Edicão"
                  fullWidth
                  {...register("edition")}
                  error={!!errors.edition}
                  helperText={errors.edition?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Preco"
                  name="price"
                  placeholder="Preco"
                  fullWidth
                  {...register("price")}
                  error={!!errors.price}
                  helperText={errors.price?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type='submit'
                  variant="contained"
                  fullWidth
                  color="primary">
                  Cadastrar
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>

      </Card>
    </Box>
  )
}

export default AddBook
