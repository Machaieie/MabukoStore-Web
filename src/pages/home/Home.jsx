import * as React from 'react';
import { Card, CardHeader, Grid, CardContent, Typography, FormControl, Box } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Grid>
        <Grid container rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ marginLeft: "100px" }}>
          <Grid item xs={6}>
            <Card sx={{ width: 500, boxShadow: 5, backgroundColor: "#f2f2f2" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Livros
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ width: 500, boxShadow: 5, backgroundColor: "#f2f2f2" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Vendas
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ width: 500, boxShadow: 5, backgroundColor: "#f2f2f2" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Usuarios
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ width: 500, boxShadow: 5, backgroundColor: "#f2f2f2" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Autores e Editoras
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
