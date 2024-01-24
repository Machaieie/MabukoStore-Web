import React, { useState } from 'react'
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

const today = dayjs();

const AddBook = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(bookSchema),
    mode: "onBlur"
  });
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [selectedDate, setSelectedDate] = useState();
  const [mafia, setMafia] = useState();
  const [increment, setIncrement] = useState();



  const onSubmit = async (data) => {
    try {
      console.log('Form Data:', {
        "author": author,
        "publisher": publisher,
        "PublicherDate": data.PublicherDate,
        "gender": data.gender,
        "Title": data.title,
        "edition": data.edition,
      });
      
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  const bookOptions = [
    { value: 'Jose', label: 'Jose' },
    { value: 'Ana', label: 'Ana' },
  ];

  const publisherOptions = [
    { value: 'Plural Editores', label: 'Plural Editores' },
    { value: 'Person', label: 'Person' },
  ];


  const handleDateChange = (event) => {
    setMafia( event["$D","/","$y"])
    setIncrement(mafia + 1)
    setSelectedDate(event);
    console.log("Data =>", event["$D"], "/", event["$M"]+1, "/", event["$y"])

  };
  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);

  };

  const handlePublisherChange = (event) => {
    setPublisher(event.target.value);
  };

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
                  onChange={handleAuthorChange}
                  value={author}
                  options={bookOptions}
                  name="author"
                />
              </Grid>
              <Grid item xs={6}>
                <BookSelect
                  label="Editora"
                  onChange={handlePublisherChange}
                  value={publisher}
                  options={publisherOptions}
                  name="publisher"
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
