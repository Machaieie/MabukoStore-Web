import React, { useState } from 'react';
import { Box, Card, Grid, CardHeader, TextField, Button, Divider } from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom";
import BookSelect from "../../components/Dropdown/BookSelect"
import PaymentType from "./PaymentType"
import CardBank from "../../assets/png/iconsLogo/Card.png"
import Movitel from "../../assets/png/iconsLogo/Movitel.png"
import Vodacom from "../../assets/png/iconsLogo/Vodafone-mpesa.jpg"
import ContaMovel from "../../assets/png/iconsLogo/contaMovel.png"
import Banco from "../../assets/png/iconsLogo/Banco.png"
import http from '../../http.common';
import PaymentMethodSelect from '../../components/Dropdown/PaymentMethodSelect';
import SucessAlert from '../../components/alert/SucessAlert';
import SaleReceipt from '../../reports/SaleReceipt';

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const onPaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value)
    console.log("Tipo de Pagamento Selecionado:", event.target.value)
  }

  const onSubmit = async () => {
    try {
      const saleResponses = [];
      for (const book of state.listBooks) {
        const amount = parseInt(book.amount);

        const response = await http.post('/addSale', [{
          "book_id": book.id,
          "amount": amount,
        }]);

        saleResponses.push(response.data);
      }

      const saleIds = [];
      for (const responseArray of saleResponses) {
        for (const responseObject of responseArray) {
          saleIds.push(responseObject.id);
        }
      }
      console.log("IDs das vendas:", saleIds);
      const valuepay = parseFloat(state.totalSelled)
      console.log("type", paymentMethod,)
      const payment = await http.post('/payment', {
        "salesIds": saleIds,
        "type": paymentMethod,
        "amount":state.totalSelled,
      });
      console.log("Pagamento realizado com sucesso:", payment);
      if(payment.status ===201){
        setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
          SaleReceipt(state.listBooks, state.totalSelled,paymentMethod);
       navigate('/addSale');
      }
      
    } catch (error) {
      console.error("Falha no pagamento:", error.message);
    }
  }




  return (
    <Box>
      <Card>
        <CardHeader
          title="Pagamentos"
          sx={{
            textAlign: "center",
          }}
        />
        <Grid container rowSpacing={1} sx={{ marginBottom: 2, marginLeft: 2 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} lg={6} sm={6}>
            <PaymentMethodSelect
              label="Selecione o Metodo de Pagamento"
              value={paymentMethod}
              options={PaymentType}
              name="payment"
              size={300}
              onChange={onPaymentMethodChange} />
          </Grid>
        </Grid>
        <Divider />
        {paymentMethod === "Banco" && (
          <Grid container rowSpacing={2} sx={{ marginTop: 3, marginBottom: 4 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={6}>
              <TextField
                label="Número da conta bancária"
                placeholder="Número da conta bancária"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Nome do titular da conta"
                placeholder="Nome do titular da conta"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Valor a pagar"
                fullWidth
                value={`${state.totalSelled} MZN`}
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <img src={Banco} style={{ width: 250, marginLeft: 280 }} alt="" srcset="" />
            </Grid>
          </Grid>
        )}
        {paymentMethod === "Carteira Móvel" && (
          <Grid container rowSpacing={2} sx={{ marginTop: 3, marginBottom: 4 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={6}>
              <TextField
                label="Número de Telemovel"
                placeholder="Número de Telemovel"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Código de Autenticacão"
                placeholder="Código de Autenticacão"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Valor a pagar"
                fullWidth
                value={`${state.totalSelled} MZN`}
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <img src={ContaMovel} style={{ width: 200, marginLeft: 320 }} alt="" srcset="" />
            </Grid>
          </Grid>
        )}
        {paymentMethod === "Cartão" && (
          <Grid container rowSpacing={2} sx={{ marginTop: 3, marginBottom: 4 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={6}>
              <TextField
                label="Número de Cartão"
                placeholder="Número de Cartão"
                fullWidth

              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Titular"
                placeholder="Titular"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Valor a pagar"
                fullWidth
                value={`${state.totalSelled} MZN`}
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <img src={CardBank} style={{ width: 200, marginLeft: 320 }} alt="" srcset="" />
            </Grid>
          </Grid>
        )}
        {paymentMethod === "M-Pesa" && (
          <Grid container rowSpacing={2} sx={{ marginTop: 3, marginBottom: 4 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={6}>
              <TextField
                label="Número de Telefone"
                placeholder="Número de Telefone"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Valor a pagar"
                fullWidth
                value={`${state.totalSelled} MZN`}
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <img src={Vodacom} style={{ width: 250, marginLeft: 820, borderRadius: 8 }} alt="" srcset="" />
            </Grid>
          </Grid>
        )}
        {paymentMethod === "E-Mola" && (
          <Grid container rowSpacing={2} sx={{ marginTop: 3, marginBottom: 4 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={6}>
              <TextField
                label="Número de Telefone"
                fullWidth
                placeholder="Número de Telefone"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Valor a pagar"
                name='amount'
                fullWidth
                value={`${state.totalSelled} MZN`}
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <img src={Movitel} style={{ width: 250, marginLeft: 820 }} alt="" srcset="" />
            </Grid>
          </Grid>
        )}
        <Button
          type='submit'
          variant="contained"
          onClick={onSubmit}
          fullWidth
          color="primary">
          Pagar
        </Button>
      </Card>
      {showSuccess && <SucessAlert mensagem="Pagamento  efectuando  com sucesso" />}
    </Box>
  )
}

export default PaymentPage
