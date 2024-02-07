import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import http from "../http.common";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isCompetitor, setIsCompetitor] = useState(false);
  const [loading, setLoading] = useState(true);
  

  const navigate = useNavigate();

  

  const login = async (username, password) => {    
    try {
      const response = await http.post("/auth/login?username=" + username + "&password=" + password);
      console.log(response)
      const principal = {
        id: response.data.id,
        username: response.data.username,
        name: response.data.name,
        roleCode: response.data.roles[0].role,
        accessToken: response.data.token,
      };
      
      console.log("teste")
      
      setUser(principal);
      checkIsCompetitor(response.data.roleCode);
      localStorage.setItem("User");
      localStorage.setItem("principal", JSON.stringify(principal));
      
  
      
     
      //const userLoggedIn =  await http.get("/users/"+username +"/"+password);

      
  
    } catch (error) {
      toast.error("Utilizador ou senha inválidos");
    }
  };
  
  const checkIsCompetitor = (roleCode) => {
    let role = "ROLE_SELLER";
    let result = roleCode === role;
    setIsCompetitor(result);
    return result;
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
        authenticated: !!user,
        user,
        isCompetitor,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
