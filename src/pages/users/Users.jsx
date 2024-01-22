import React from 'react'
import { Box, Grid, Card } from '@mui/material'
import BookTable from '../../components/table/BookTable'

const headers = [
  { key: 'id', label: 'ID', align: 'left' },
  { key: 'name', label: 'Nome', align: 'left' },
  { key: 'username', label: 'Usuario', align: 'left' },
  { key: 'role', label: 'Perfil', align: 'left' },
  
];
const rows = [
  { id: 1, name: 'Edwin MAchaieie', username: 'Dark-X' , role: 'Role_Admin' },
  { id: 2, name: 'Ashley Emanuel', username: 'Ashley' , role: 'Role_Employee'},
  { id: 3, name: 'Sebasteão Machaieie', username: 'Sebas' , role: 'Role_Employee'},
];

const Users = () => {
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

export default Users
