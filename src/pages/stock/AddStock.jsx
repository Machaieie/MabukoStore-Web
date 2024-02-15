import React, { useEffect, useState } from 'react'
import { Card, CardHeader, Grid, CardContent, FormControl, Box, TextField, Button } from "@mui/material";
import { useForm } from 'react-hook-form';
import http from '../../http.common';
import { toast } from 'react-toastify';
import SucessAlert from '../../components/alert/SucessAlert';
import { Modal, ModalDialog } from '@mui/joy';
import { StockSchema } from '../../services/SchemaService';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import { yupResolver } from '@hookform/resolvers/yup';
import logo from "../../assets/png/backgraundpage.png";
import PromotionSelect from '../../components/Dropdown/PromotionSelect';
import { useNavigate } from "react-router-dom";

const AddStock = () => {
  const [livro, setLivro] = useState([]);
  const [livroSelecionado, setLivroSelecionado] = useState('');
  const navigate = useNavigate();


  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(StockSchema),
    mode: "submit"
  });
  const [showSuccess, setShowSuccess] = useState(false);

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
    setLivro(data)
    console.log("Livros =>", data)

  }
  const handleChangeBook = (event) => {
    setLivroSelecionado(event.target.value);
    console.log("id book ", event.target.value)
  };

  const onSubmit = async (data) => {
    try {
      console.log("Promotion", {
        "book_id": livroSelecionado,
        "amount": data.amount,
      })
      const response =await http.post('/addStock', {
        "book_id": livroSelecionado,
        "amount": data.amount,
      });
      reset()
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);

      if(response.status===201){
        navigate("/listBooks")
      }

      console.log('Form Data:', data);
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
      <Card sx={{ width: 800, boxShadow: 10, backgroundColor: "#f2f2f2" }}>
        <CardHeader
          title="Adicionar Estoque"
          sx={{
            textAlign: "center",
          }}
        />
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginLeft: "100px" }}>
              <Grid item xs={6}>
                <PromotionSelect
                  label="Livro"
                  onChange={handleChangeBook}
                  value={livroSelecionado}
                  options={livro}
                  name="book"

                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Quantidade de Estoque"
                  placeholder="Quantidade de Estoque"
                  fullWidth
                  {...register("amount")}
                  error={!!errors.amount}
                  helperText={errors.amount?.message}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type='submit'
                  variant="contained"
                  fullWidth
                  color="primary">Adicionar</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      {showSuccess && <SucessAlert mensagem="Estoque adicionada  com sucesso" />}
    </Box>
  )
}

export default AddStock
