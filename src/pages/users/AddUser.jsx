import React, { useState } from 'react'
import { Card, CardHeader, Grid, CardContent, FormControl, Box, TextField, Button } from "@mui/material";
import logo from "../../assets/png/backgraundpage.png";
import BookSelect from '../../components/Dropdown/BookSelect';
import PasswordField from '../../components/textfields/PasswordField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchemma } from '../../services/SchemaService';
import { toast } from 'react-toastify'; 
import http from '../../http.common';

const RoleOptions = [
  { value: 'Role_Admin', label: 'Administrador' },
  { value: 'Role_Employee', label: 'Funcionario' },
];

const AddUser = () => {
  const [password, setPassword] = useState('');
  const [confpassword, setConfpassword] = useState('');

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(userSchemma),
  });

  const [role, setRole] = useState('');
  

  const onRoleChange = (e) => {
    setRole(e.target.value);
  }

  const onSubmit = async (data) => {
    try {
        setLoading(true);
        //await http.post('/author', data);
        console.log("Dtaaa", data);
        toast.success('Autor cadastrado com sucesso!');
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
        backgroundSize: "30%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card sx={{ width: 800, boxShadow: 10, backgroundColor: "#f2f2f2" }}>
        <CardHeader
          title="Adicionar Usuario"
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
                <TextField
                  label="Nome"
                  placeholder="nome"
                  fullWidth
                  {...register("username")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Usuario"
                 
                  placeholder="Usuario"
                  fullWidth
                  {...register("username")}
                  error={!!errors.username}
                  helperText={errors.username?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <PasswordField
                  placeholder="Senha"
                  
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </Grid>
              <Grid item xs={6}>
                <PasswordField
                  placeholder="Confirmar Senha"
                  
                  value={confpassword}
                  onChange={(e) => setConfpassword(e.target.value)}
                  {...register("confirmPassword")}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
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
              <Grid item xs={6}>
                <BookSelect
                  label="Perfil"
                  onChange={onRoleChange}
                  value={role}
                  options={RoleOptions}
                  name="role"
                  {...register("role")}
                  error={!!errors.role}
                  helperText={errors.role?.message}

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

export default AddUser
