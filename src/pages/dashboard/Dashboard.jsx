import React, {useState, useEffect} from 'react'
import { Card, CardHeader, Grid, CardContent, Typography, FormControl, Box } from "@mui/material";
import CardMabuko from "../../components/card/CardMabuko"
import BooksCard from '../../components/card/BooksCard';
import http from '../../http.common';
import stockIcon from "../../assets/svg/stock-ticker-svgrepo-com.svg"

const Dashboard = () => {
  const [sales, setSales]= useState(0);
  const [stockBooks, setStockBooks]= useState(0);
  const [amount, setAmount] = useState(0);

  const SvgIcon = (
    
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19c0 .6.4 1 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.2M20 9v3.2"/>
  </svg>

  );
  const salesIcon = (
    
    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z" clip-rule="evenodd"/>
    <path fill-rule="evenodd" d="M12.3 3.3a1 1 0 0 1 1.4 0L16.4 6h-2.8l-1.3-1.3a1 1 0 0 1 0-1.4Zm.1 2.7L9.7 3.3a1 1 0 0 0-1.4 0L5.6 6h6.8ZM4.6 7A2 2 0 0 0 3 9v10c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.5-2h-13Z" clip-rule="evenodd"/>
  </svg>)

const WalletIcon = (
    
  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.3a5 5 0 0 0 2.6 1.7c2.2.6 4.5-.5 5-2.3.4-2-1.3-4-3.6-4.5-2.3-.6-4-2.7-3.5-4.5.5-1.9 2.7-3 5-2.3 1 .2 1.8.8 2.5 1.6m-3.9 12v2m0-18v2.2"/>
</svg>
);

const ProfitIcon = (
    
  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M9 15a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm3.8-1.9c.3-.5.7-1 1.2-1.2a1 1 0 0 1 2 0c.5.1.8.4 1.1.7a1 1 0 1 1-1.4 1.4l-.4-.2h-.1a.4.4 0 0 0-.4 0l.4.3a3 3 0 0 1 1.5.9 2 2 0 0 1 .5 1.9c-.3.5-.7 1-1.2 1.2a1 1 0 0 1-2 0c-.4 0-.8-.3-1.2-.7a1 1 0 1 1 1.6-1.3l.3.2h.1a.4.4 0 0 0 .4 0 1 1 0 0 0-.4-.3 3 3 0 0 1-1.5-.9 2 2 0 0 1-.5-2Zm2 .6Zm.5 2.6ZM4 14c.6 0 1 .4 1 1v4a1 1 0 1 1-2 0v-4c0-.6.4-1 1-1Zm3-2c.6 0 1 .4 1 1v6a1 1 0 1 1-2 0v-6c0-.6.4-1 1-1Zm6.5-8c0-.6.4-1 1-1H18c.6 0 1 .4 1 1v3a1 1 0 1 1-2 0v-.8l-2.3 2a1 1 0 0 1-1.3.1l-2.9-2-3.9 3a1 1 0 1 1-1.2-1.6l4.5-3.5a1 1 0 0 1 1.2 0l2.8 2L15.3 5h-.8a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
  </svg>
  );


  


 

  const fetchData = async ()=>{
    const bookStock = await http.get('/countStockBook');
    //console.log("bookStock => ",bookStock.data)
    
    const amonts = await http.get('/allAmount');
    setAmount(amonts.data);

    setStockBooks(bookStock.data)
    const totalSales = await http.get('/countTotalSales');
    // console.log("Stoque Books => ",stockBooks)
    setSales(totalSales.data)
  }

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <Box>
      <Grid>
        <Grid container spacing={4} >
          <Grid item xs={12} sm={12} md={6}>
          <BooksCard
            title="Estoques"
            content={`${stockBooks} Livros disponiveis`}
            icon={SvgIcon}
          />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
          <BooksCard
            title="Vendas"
            modalTitle="Vendas"
            content={`${sales} Vendas`}
            icon={salesIcon}
          />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
          <BooksCard
            title="Margem de Lucro"
            modalTitle="Lucros"
            modalBody={`Acrescimo de vendas`}
            content={`${6} %`}
            icon={ProfitIcon}
          />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
          <BooksCard
            title="Carteira"
            modalTitle="Carteira"
            modalBody={`M-pesa: Emola: Numerário: `}
            content={`${amount} MZN`}
            icon={WalletIcon}
          />
          </Grid>
         
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
