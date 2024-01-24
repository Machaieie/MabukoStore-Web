import * as React from 'react';
import { Grid, Box, useMediaQuery } from "@mui/material";
import PromotionCard from '../../components/card/PromotionCard';

const Home = () => {
  cancelAnimationFrame
  return (
    <Box>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={6} md={6}>
          <PromotionCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
