import { Box, Grid, Card } from '@mui/material'
import React, { useEffect, useState } from "react";
import BookTable from '../../components/table/BookTable'

import { useNavigate } from "react-router-dom";


const headers = [
  { key: 'id', label: 'ID', align: 'left' },
  { key: 'name', label: 'Nome', align: 'left' },
  { key: 'gender', label: 'Genero', align: 'left' },
  { key: 'biography', label: 'Biografia', align: 'left' },
  { key: 'nationality', label: 'Nacionalidade', align: 'left' },
];
const rows = [
  { id: 1, name: 'Edwin Machaieie', gender: 'Masculino' , biography: 'Escritor', nationality: 'Mocambicano'},
  { id: 2, name: 'Leopoldo Matsinhe', gender: 'Masculino' , biography: 'Rapper', nationality: 'Mocambicano'},
  { id: 3, name: 'Edipson Mangue', gender: 'Masculino' , biography: 'Rico', nationality: 'Mocambicano'},
];
const Authors = () => {
  const navigate = useNavigate();
  return (
    <>
 
    <Grid container>
      <Grid item xs={12} >
        <Card>
          <BookTable rows={rows} headers={headers}/>
        </Card>
      </Grid>
    </Grid>
    </>
  )
}

export default Authors
