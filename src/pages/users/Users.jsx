import React, {useState, useEffect} from 'react'
import { Box, Grid, Card } from '@mui/material'
import BookTable from '../../components/table/BookTable'
import { toast } from 'react-toastify';
import http from '../../http.common';

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
  const [users, setUsers] = useState([]);

  const fetchData = async () =>{
    const response = await http.get('/auth/alluser');
    console.log(response)
    const data = response.data.map(publisher => ({
      id: publisher.id,
      name: publisher.name,
      username: publisher.username,
      roles: publisher.roles.role,
      
    }));
    setUsers(data);
    console.log(response.data.map(roles =>({
      roles: roles.roles,
    })))
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Grid container>
      <Grid item xs={12} >
        <Card>
          <BookTable rows={users} headers={headers}/>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Users
