import React, { useState, useEffect } from 'react';
import { Grid, Box } from "@mui/material";
import PromotionCard from '../../components/card/PromotionCard';
import http from '../../http.common';

const Home = () => {
  const [promotions, setPromotions] = useState([]);

  const fetchData = async () => {
    try {
      const response = await http.get('/promotions');
      const data = response.data.map(promo => ({
        id: promo.id,
        idBook: promo.book.id,
        startdate: promo.startDate,
        endDate: promo.endDate,
        discount: promo.discount,
        bookTitle: promo.book.title
      }));
      setPromotions(data);
      console.log("Promoções => ", response.data);
    } catch (error) {
      console.error('Erro ao obter promoções:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Grid container spacing={4} sx={{ margin: "auto" }}>
        {promotions.map(promo => (
          <Grid key={promo.id} item xs={12} sm={12} md={6}>
            <PromotionCard
              title={`Promoção ${promo.id}`}
              content={`Livro: ${promo.bookTitle}`}
              modalTitle={`${promo.bookTitle}`}
              modalBody={`Temos uma variedade de promoções para você. Aproveite esta grande promoção!`}
              validDate={`Promoção válida de ${promo.startdate} á ${promo.endDate}`}
              promoPrice={`${promo.discount}`}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
