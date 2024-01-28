import * as React from 'react';
import { Grid, Box, useMediaQuery } from "@mui/material";
import PromotionCard from '../../components/card/PromotionCard';

const Home = () => {

  return (
    <Box>
      <Grid container spacing={4} sx={{
        margin: "auto"
      }}>
        <Grid item xs={12} sm={12} md={6}>
          <PromotionCard
            title="Promocão"
            content="Code in PHP"
            modalTitle="Code in PHP"
            modalBody="Temos uma variedade de promocões para si, aproveite esta grande promocao "
            validDate="14 de Janeiro a 29 de fevereiro"
            promoPrice="880"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <PromotionCard
            title="Promocão"
            content="Java Cean Code"
            modalTitle="Java Cean Code"
            modalBody="Temos uma variedade de promocoes para si, aproveite esta grande promocao "
            validDate="14 de Janeiro a 29 de fevereiro"
            promoPrice="380"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <PromotionCard
            title="Promocão"
            content="Code in PHP"
            modalTitle="Code in PHP"
            modalBody="Temos uma variedade de promocões para si, aproveite esta grande promocao "
            validDate="14 de Janeiro a 29 de fevereiro"
            promoPrice="880"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <PromotionCard
            title="Promocão"
            content="Java Cean Code"
            modalTitle="Java Cean Code"
            modalBody="Temos uma variedade de promocoes para si, aproveite esta grande promocao "
            validDate="14 de Janeiro a 29 de fevereiro"
            promoPrice="380"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
