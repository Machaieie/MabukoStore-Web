import React, { useState, useContext } from "react";
import * as yup from "yup";
import TextFieldBook from "../../components/textfields/TextFieldBook";
import { Card, CardHeader, Grid, CardContent, FormControl, Box, TextField, Button } from "@mui/material";
import { Lock, AccountCircle } from "@mui/icons-material";
import BookSubmitButton from "../../components/buttons/BookSubmitButton";
import logo from "../../assets/png/logo-no-background.png";
import { loginRules } from "../../services/SchemaService";
import { AuthContext } from "../../contexts/AuthContext";
import "./Login.css";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import http from '../../http.common';

const LoginPage = () => {

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginRules),
  });
  const { login } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await http.post('/auth/login', data);
      toast.success('Bem vindo!');
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      reset();
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
    </Box>
  );
};

export default LoginPage;
