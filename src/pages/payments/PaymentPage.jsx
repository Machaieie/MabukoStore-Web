import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { Box, Card, Grid, CardHeader, TextField, Button } from "@mui/material"

const PaymentPage = () => {
  return (
    <Box >
      <Card sx={{}}>
        <CardHeader
          title="Pagamentos"
          sx={{
            textAlign: "center",
          }}
        />
        <Tabs aria-label="Basic tabs" defaultValue={0}>
          <TabList>
            <Tab color='danger'>M-Pesa</Tab>
            <Tab color='warning'>E-Mola</Tab>
            <Tab color='success'>Cartão</Tab>
          </TabList>
          <TabPanel value={0}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              rowSpacing={2}
              columnSpacing={{ xs: 12, sm: 12, md: 6 }}
              sx={{height:200}}
            >
                <Grid item xs={6}>
                  <TextField
                    name="Valor"
                    placeholder="Valor a pagar"
                    label="Valor a pagar"
                    fullWidth
                    disabled
                  />
                </Grid>
                <Grid item xs={6}>
                <TextField
                    name="password"
                    placeholder="Número de Telefone 84 / 85"
                    label="Número de Telefone"
                    fullWidth
                    required
                  />
                </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={1}>
            
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                rowSpacing={2}
                columnSpacing={{  xs: 12, sm: 12, md: 6}}
                sx={{height:200}}
              >
                <Grid item xs={6}>
                  <TextField
                    name="Valor"
                    placeholder="Valor a pagar"
                    label="Valor a pagar"
                    fullWidth
                    disabled
                  />
                </Grid>
                <Grid item xs={6}>
                <TextField
                    name="number"
                    placeholder="Número de Telefone 86 / 87"
                    label="Número de Telefone"
                    fullWidth
                  />
                </Grid>
              </Grid>
          </TabPanel>
          <TabPanel value={2}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                rowSpacing={2}
                columnSpacing={{ xs: 12, sm: 12, md: 6 }}
                 sx={{height:200}}
              >
                <Grid item xs={6}>
                <TextField
                    name="Valor"
                    placeholder="Valor a pagar"
                    label="Valor a pagar"
                    fullWidth
                    disabled

                  />
                </Grid>
                <Grid item xs={6}>
                <TextField
                    name="accountNumber"
                    placeholder="XXXXXXXXXXXX"
                    label="Número de conta"
                    fullWidth
                    

                  />
                </Grid>
              </Grid>
           
          </TabPanel>
        </Tabs>
        <Button
          type='submit'
          variant="contained"
          fullWidth
          color="primary">
          Pagar
        </Button>
      </Card>
    </Box>
  )
}

export default PaymentPage
