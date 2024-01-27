import { Grid, Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BookTable from '../../components/table/BookTable';
import { toast } from 'react-toastify';
import http from '../../http.common'; 
import { useNavigate } from 'react-router-dom';

const headers = [
  { key: 'id', label: 'ID', align: 'left' },
  { key: 'name', label: 'Nome', align: 'left' },
  { key: 'gender', label: 'Gênero', align: 'left' },
  { key: 'biography', label: 'Biografia', align: 'left' },
  { key: 'nationality', label: 'Nacionalidade', align: 'left' },
];

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();


  const fetchData = async () => {
    try {
      const response = await http.get('/authors'); 
      console.log("autores => ",response.data)
      const data = response.data.map(author => ({
        id: author.id,
        name: author.name,
        gender: author.gender,
        biography: author.biography,
        nationality: author.nationality,
      }));
      
      setAuthors(data);
    } catch (error) {
      toast.error('Erro ao carregar os dados dos autores');
    }
  };


  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <BookTable rows={authors} headers={headers} />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Authors;
