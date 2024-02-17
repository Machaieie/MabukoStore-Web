import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import http from "../http.common";
import SuccessAlert from "../components/alert/SucessAlert"; 
import BadRequestAlert from "../components/alert/BadRequestAlert";



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isCompetitor, setIsCompetitor] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showbadRequest, setShowbadRequest] = useState(false);
  const navigate = useNavigate();



  const login = async (username, password) => {
    try {
      const response = await http.post("/auth/login", {
        "username": `${username}`,
        "password": `${password}`
      });
      console.log("AuthResponse =>", response)
      if (response.status === 200) {
        const principal = {
          id: response.data.id,
          username: response.data.username,
          name: response.data.name,
          roleCode: response.data.roles[0].role,
          accessToken: response.data.token,
        };
        setIsLogged(true)
        localStorage.setItem("principal", JSON.stringify(principal));
        console.log("IsLogged =>",isLogged)
        setShowSuccess(true);
      }else  if (response.status === 404) {
        setShowbadRequest(true)
      }
      
      setTimeout(() => {
        setShowSuccess(false);
        
      }, 2000);
      setTimeout(() => {
        setShowbadRequest(false);
        
      }, 2000);
      navigate("/admin/home")
    } catch (error) {
      toast.error("Utilizador ou senha inválidos");
    }
  };




  const logout = () => {
    setUser(null);
    setIsCompetitor(false);
    localStorage.removeItem("principal");
    navigate("/");
  };

  useEffect(() => {
    const loggedUser = localStorage.getItem("principal");
    if (loggedUser) {
      const parsed = JSON.parse(loggedUser);
      setUser(parsed);
    }
    setLoading(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isCompetitor,
        login,
        logout,
        loading,
        isLogged
      }}
    >
      
      {children}
      {showSuccess && <SuccessAlert  mensagem="Usuario Logado com sucesso"/>}
      {showbadRequest && <BadRequestAlert title="Falha no Login"  mensagem="Usuario ou senha errado!"/>}
    </AuthContext.Provider>
    
  );
 
};
