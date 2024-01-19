import React, { useContext, useEffect, useState } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import menu from "../services/NavigationService";
import "../App.css"
import {} from "@mui/material"

const PublicLayout = () => {
    useEffect(() => {
        document.body.classList.remove("admin-page");
        document.body.classList.add("public-page");
    }, []);

    const { authenticated, user, isCompetitor, loading, logout } =
        useContext(AuthContext);
    const params = useParams();
    const nav = menu(String(user?.roleCode));


    return (
        <>
            <header>
               

                
            </header>
        </>
    )
}

export default PublicLayout
