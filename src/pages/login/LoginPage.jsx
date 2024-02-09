import React, { useState, useContext, useEffect } from "react";
import { Card, CardHeader, Grid, CardContent, FormControl, Box, TextField, Button } from "@mui/material";
import logo from "../../assets/png/logo-no-background.png";
import { loginRules } from "../../services/SchemaService";
import { AuthContext } from "../../contexts/AuthContext";
import "./Login.css";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../../components/alert/SucessAlert"; 

const LoginPage = () => {
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginRules),
  });

  const { login, user } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); 
  const navigate = useNavigate();

 

  const onSubmit = async (data) => {
    try {
      const response = await login(data.username, data.password);
      reset();
      setShowSuccess(true);
      toast.success('Bem vindo!');
      
      setTimeout(() => {
        setShowSuccess(false); // Defina showSuccess como false após 2 segundos
      }, 2000);
    } catch (error) {
      toast.error(error.response?.data.message || 'Erro ao cadastrar autor');
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
        backgroundSize: "40%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#c0c0c0",
      }}
    >
      <Card sx={{ maxWidth: 400, backgroundColor: "#f2f2f2" }}>
        <CardHeader
          title="Login"
          sx={{
            textAlign: "center",
          }}
        />
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <TextField
                    name="username"
                    placeholder="Username"
                    label="Username"
                    fullWidth
                    {...register("username")}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    name="password"
                    placeholder="Password"
                    label="Password"
                    fullWidth
                    type="password"
                    {...register("password")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type='submit'
                    variant="contained"
                    fullWidth
                    color="primary">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </FormControl>
          </form>
        </CardContent>
      </Card>
      {showSuccess && <SuccessAlert  mensagem="Usuario Logado com sucesso"/>}
    </Box>
  );
};

export default LoginPage;
