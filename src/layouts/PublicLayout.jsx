import React, { useContext, useEffect, useState } from "react";
import { Card, CardHeader, Grid, CardContent, FormControl, Box, TextField, Button } from "@mui/material";
import { Outlet, Link, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import menu from "../services/NavigationService";
import logo from "../assets/png/logo-no-background.png";

const PublicLayout = () => {
    const { isLoged } = useContext(AuthContext);

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

        </Box>

    )
}

export default PublicLayout
