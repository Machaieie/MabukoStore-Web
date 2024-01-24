import * as React from 'react';
import { Card, CardHeader, Grid, CardContent, Typography, FormControl, Box } from "@mui/material";
import CardMabuko from "../../components/card/CardMabuko"

const Dashboard = () => {
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
          <CardMabuko/>
          </Grid>
          <Grid item xs={6}>
          <CardMabuko/>
          </Grid>
          <Grid item xs={6}>
          <CardMabuko/>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
