import React, { useState, useContext } from "react";
import * as yup from "yup";
import TextFieldBook from "../../components/textfields/TextFieldBook";
import { Card, CardHeader, Grid, CardContent, FormControl, Box } from "@mui/material";
import { Lock, AccountCircle } from "@mui/icons-material";
import BookSubmitButton from "../../components/buttons/BookSubmitButton";
import logo from "../../assets/png/logo-no-background.png";
import { loginRules } from "../../services/SchemaService"; 
import { AuthContext } from "../../contexts/AuthContext";
import "./Login.css";

const LoginPage = () => {
  const {  login } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = async (event) => {
   

    
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
      <Card sx={{ maxWidth: 400, backgroundColor: "#f2f2f2" }}>
        <CardHeader
          title="Login"
          sx={{
            textAlign: "center",
          }}
        />
        <CardContent>
          <form onSubmit={handleLogin}>
            <FormControl>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <TextFieldBook
                  name="username"
                  placeholder="Username"
                  icon={<AccountCircle />}
                  onChange={(e) => setUsername(e.target.value)}
                  
                />
                <Grid item xs={12}></Grid>
                <TextFieldBook
                  name="password"
                  placeholder="Password"
                  type="password"
                  icon={<Lock />}
                  onChange={(e) => setPassword(e.target.value)}
                  
                />
                <Grid item xs={12}></Grid>
                <BookSubmitButton  width="270px"  />
              </Grid>
            </FormControl>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
