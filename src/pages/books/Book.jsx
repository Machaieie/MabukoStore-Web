import React from 'react'
import { Box, Grid, Card } from '@mui/material'
import BookTable from '../../components/table/BookTable'

const headers = [
  { key: 'id', label: 'ID', align: 'left' },
  { key: 'title', label: 'Titulo', align: 'left' },
  { key: 'publisherDate', label: 'Data de publicacão', align: 'left' },
  { key: 'edition', label: 'Edicão', align: 'left' },
  { key: 'gender', label: 'Gênero', align: 'left' },
  { key: 'price', label: 'Preco', align: 'left' },
  { key: 'author', label: 'Autor', align: 'left' },
  { key: 'publisher', label: 'Editora', align: 'left' },
];
const rows = [
  { id: 1, title: 'Amor Perdido', publisherDate: '12-04-2023' , edition: '2', gender: 'Romance', price: '180 MZN', author: 'Edwin Machaieie', publisher: 'Plural Editores'},
  { id: 1, title: 'Amor nas Trevas', publisherDate: '15-08-2020' , edition: '1', gender: 'Romance', price: '800 MZN ', author: 'Edwin Machaieie', publisher: 'Plural Editores'},
];

const Book = () => {
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

export default Book
