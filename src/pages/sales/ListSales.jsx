import React, { useState } from 'react'
import BookSelect from '../../components/Dropdown/BookSelect';
import { Card, CardHeader, Grid, CardContent, FormControl, Box, TextField, Button } from "@mui/material";
import http from '../../http.common';
import BookTable from '../../components/table/BookTable'


const headers = [
  { key: 'id', label: 'ID', align: 'left' },
  { key: 'title', label: 'Titulo', align: 'left' },
  { key: 'publisherDate', label: 'Editora', align: 'left' },
  { key: 'price', label: 'Preco', align: 'left' },
  { key: 'amount', label: 'Quantidade', align: 'left' },
];


const fill = [
  { id: 1, name: 'DIARIAS' },
  { id: 2, name: 'SEMANAIS' },
  { id: 3, name: 'MENSAIS' },
  { id: 3, name: 'ANUAIS' }
];
const ListSales = () => {
  const [book, setBook] = useState([])
  const [filtroSelecionado, setFiltroSelecionado] = useState([])
  const [filtros, setFiltros] = useState([])
  
  const handleChangeAutor = (data) =>{
    setFiltroSelecionado(data.target.value);
  }

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sx={{
          marginBottom:4
        }}>
          <BookSelect
            label="Selecione o filtro de Vendas"
            onChange={handleChangeAutor}
            value={filtroSelecionado}
            size={250}
            options={fill}
            name="filter"
            
          />
        </Grid>
        <Grid item xs={12}>
          <Card>
            <BookTable rows={book} headers={headers} />
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ListSales
