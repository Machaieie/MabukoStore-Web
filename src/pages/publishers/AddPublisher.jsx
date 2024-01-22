import React, { useState } from 'react'
import TextFieldBook from "../../components/textfields/TextFieldBook";
import { Card, CardHeader, Grid, CardContent, FormControl, Box } from "@mui/material";
import logo from "../../assets/png/backgraundpage.png";
import BookSubmitButton from '../../components/buttons/BookSubmitButton';
import BookSelect from '../../components/Dropdown/BookSelect';
import BookDatePicker from '../../components/datepicker/BookDatePicker';

const AddPublisher = () => {

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
      <Card sx={{ width: 800, boxShadow: 10, backgroundColor: "#f2f2f2" }}>
        <CardHeader
          title="Adicionar Editora"
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
                <TextFieldBook
                  label="Nome"
                  name="name"
                  placeholder="nome"
                  size="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <TextFieldBook
                  label="Localizacão"
                  name="location"
                  placeholder="Localizacão"
                  size="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <TextFieldBook
                  label="Telefone"
                  name="phone"
                  placeholder="Telefone"
                  size="100%"
                />
              </Grid>
              <Grid item xs={6}>
                <TextFieldBook
                  label="Nuit"
                  name="nuit"
                  placeholder="Nuit"
                  size="100%"
                />
              </Grid>
              <Grid item xs={12}>
                <BookSubmitButton label="Cadastrar" onClick={handlesubmit()} />
              </Grid>
            </Grid>

          </form>
        </CardContent>
      </Card>
    </Box>
  )
}

export default AddPublisher
