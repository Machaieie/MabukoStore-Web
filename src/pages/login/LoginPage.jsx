import React, { useContext, useState } from "react";
import TextFieldBook from "../../components/textfields/TextFieldBook";
import { Card, CardHeader, Grid, CardContent, FormControl, Box } from "@mui/material";
import { Lock, AccountCircle } from "@mui/icons-material";
import BookButton from "../../components/buttons/BookButton";
import logo from "../../assets/png/logo-no-background.png";
import "./Login.css"

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
  

   
   

   
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${logo})`,
        backgroundSize: "40%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#c0c0c0",
      }}
    >
      <Card sx={{ maxWidth: 400 ,backgroundColor: "#f2f2f2"}}>
        <CardHeader title="Login"
          sx={{
            textAlign: "center"
          }}
           />
        <CardContent>
          <form onSubmit={handleLogin}>
            <FormControl onSubmit={handleLogin}>
              <Grid container justifyContent="center" alignItems="center" rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <TextFieldBook
                  name="username"
                  placeholder="Username"
                  icon={<AccountCircle />}
                  
                />
                <Grid item xs={12}></Grid>
                <TextFieldBook
                  name="password"
                  placeholder="Password"
                  type="password"
                  icon={<Lock />}
                  
                />
                <Grid item xs={12}></Grid>
                <BookButton label="Login" width="270px" type="submit" />
              </Grid>
            </FormControl>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;