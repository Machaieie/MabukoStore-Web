import React, {useState, useEffect} from 'react'
import { Box, Grid, Card } from '@mui/material'
import BookTable from '../../components/table/BookTable'
import { toast } from 'react-toastify';
import http from '../../http.common'; 

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



const Book = () => {
  const [book, setBook] =useState([])

  const fetchData = async ()=>{

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
    setBook(data);
  }

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <Grid container>
      <Grid item xs={12} >
        <Card>
          <BookTable rows={book} headers={headers} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default Book
