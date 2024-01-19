import LoginPage from "./pages/login/LoginPage"
import { AuthProvider } from "./contexts/AuthContext";
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
function App() {


  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>
      <Routes>
      <Route path="/" element={<LoginPage />}>

      </Route>
      </Routes>
      </AuthProvider>
      </Suspense>
    </>
  )
}

export default App
