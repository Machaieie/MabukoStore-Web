import React, { useState } from 'react'
import TextFieldBook from "../../components/textfields/TextFieldBook";
import { Card, CardHeader, Grid, CardContent, FormControl, Box } from "@mui/material";
import logo from "../../assets/png/backgraundpage.png";
import BookSubmitButton from '../../components/buttons/BookSubmitButton';
import BookSelect from '../../components/Dropdown/BookSelect';
import BookDatePicker from '../../components/datepicker/BookDatePicker';

const AddBook = () => {
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');

  const bookOptions = [
    { value: 'Jose', label: 'Jose' },
    { value: 'Ana', label: 'Ana' },
  ];

  const publisherOptions = [
    { value: 'Plural Editores', label: 'Plural Editores' },
    { value: 'Person', label: 'Person' },
  ];

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handlePublisherChange = (event) => {
    setPublisher(event.target.value);
  };
  const handlesubmit = async (event) => {



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
          <form onSubmit={handlesubmit}>
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
              <TextFieldBook
                  label="Título"
                  name="title"
                  placeholder="Título"
                  size="100%"
                />
              </Grid>
              <Grid item xs={6}>
              <TextFieldBook
                  label="Gênero"
                  name="gender"
                  placeholder="Gênero"
                  size="100%"
                />
              </Grid>
              
              <Grid item xs={6}>
                <BookDatePicker size={500} name="publisherDate" label="Data de Publicacão" disablePast />
              </Grid>
              <Grid item xs={6}>
                <TextFieldBook
                  label="Edicão"
                  name="edition"
                  placeholder="Edicão"
                  size="100%"
                />
              </Grid>
              <Grid item xs={12}>
              <BookSubmitButton label="Submeter" onClick={handlesubmit}/>
              </Grid>
            </Grid>
          </form>
        </CardContent>

      </Card>
    </Box>
  )
}

export default AddBook
