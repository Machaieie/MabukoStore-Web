import React,{useState} from 'react';
import { Card, CardHeader, Grid, CardContent, FormControl, Box, TextField, Button } from "@mui/material";
import logo from "../../assets/png/backgraundpage.png";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { publisherSchema } from '../../services/SchemaService';
import { toast } from 'react-toastify';
import http from '../../http.common';
import SucessAlert from '../../components/alert/SucessAlert';


const AddPublisher = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(publisherSchema),
    mode: "onBlur"
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      await http.post('/publisher', data);
      reset()  
      setShowSuccess(true);
      setTimeout(() => {
          setShowSuccess(false); 
        }, 2000);

      console.log('Form Data:', data);
    } catch (error) {
      toast.error(error.response?.data.message);
    }
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginLeft: "100px" }}>
              <Grid item xs={6}>
                <TextField
                  label="Nome"
                  placeholder="Nome"
                  fullWidth
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Localizacao"
                  placeholder="Nome"
                  fullWidth
                  {...register("location")}
                  error={!!errors.location}
                  helperText={errors.location?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="telefone"
                  placeholder="Telefone"
                  fullWidth
                  {...register("phone")}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Nuit"
                  placeholder="Nuit"
                  fullWidth
                  {...register("nuit")}
                  error={!!errors.nuit}
                  helperText={errors.nuit?.message}
                />

              </Grid>
              <Grid item xs={12}>
                <Button
                  type='submit'
                  variant="contained"
                  fullWidth
                  color="primary">Cadastrar</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      {showSuccess && <SucessAlert  mensagem="Editora adicionada  com sucesso"/>}
    </Box>
  );
}

export default AddPublisher;
