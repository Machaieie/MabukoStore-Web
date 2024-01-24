import  React,{useState} from 'react';
import { Card, CardHeader, Grid, CardContent, Typography, FormControl, Box } from "@mui/material";
import CardMabuko from "../../components/card/CardMabuko"
import BooksCard from '../../components/card/BooksCard';

const Dashboard = () => {
  const [open, setOpen] = useState(false);


  return (
    <Box>
      <Grid>
        <Grid container rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ marginLeft: "100px" }}>
          <Grid item xs={6}>
            <CardMabuko/>
          </Grid>
          <Grid item xs={6}>
          <BooksCard/>
          </Grid>
         
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
