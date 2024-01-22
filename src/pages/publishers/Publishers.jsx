import React from 'react'
import { Box, Grid, Card } from '@mui/material'
import BookTable from '../../components/table/BookTable'

const headers = [
  { key: 'id', label: 'ID', align: 'left' },
  { key: 'name', label: 'Nome', align: 'left' },
  { key: 'location', label: 'Localizacão', align: 'left' },
  { key: 'phone', label: 'Telefone', align: 'left' },
  { key: 'nuit', label: 'Nuit', align: 'left' },
];
const rows = [
  { id: 1, name: 'Plural Editores', location: 'Matola' , phone: '841234567', nuit: '1329138'},
  { id: 2, name: 'Person', location: 'Maputo' , phone: '841234567', nuit: '1329138'},
  { id: 3, name: 'Plural Editores', location: 'Alto-maé' , phone: '841234567', nuit: '1329138'},
];

const Publishers = () => {
  return (
    <Grid container>
      <Grid item xs={12} >
        <Card>
          <BookTable rows={rows} headers={headers}/>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Publishers
