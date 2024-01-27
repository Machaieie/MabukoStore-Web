import React, {useEffect, useState} from 'react'
import { Box, Grid, Card } from '@mui/material'
import BookTable from '../../components/table/BookTable'
import { toast } from 'react-toastify';
import http from '../../http.common'; 

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
  const [publishers, setPublishers] = useState([]);

  const fetchData = async ()=>{
    const response = await http.get('/publishers');
    console.log(response)
    const data = response.data.map(publisher => ({
      id: publisher.id,
      name: publisher.name,
      location: publisher.location,
      phone: publisher.phone,
      nuit: publisher.nuit,
    }));

    setPublishers(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} >
        <Card>
          <BookTable rows={publishers} headers={headers}/>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Publishers
