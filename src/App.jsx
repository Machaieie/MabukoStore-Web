import LoginPage from "./pages/login/LoginPage"
import { AuthProvider } from "./contexts/AuthContext";
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/home/Home";
import Book from "./pages/books/Book";
import Authors from "./pages/authors/Authors";
import Publishers from "./pages/publishers/Publishers";
import Users from "./pages/users/Users";
import Dashboard from "./pages/dashboard/Dashboard";
import AddAuthor from "./pages/authors/AddAuthor";
import AddBook from "./pages/books/AddBook";
import AddPublisher from "./pages/publishers/AddPublisher";
import AddUser from "./pages/users/AddUser";
import AddSale from "./pages/sales/AddSale";
import ListSales from "./pages/sales/ListSales"
import PaymentPage from "./pages/payments/PaymentPage";
import AddStock from "./pages/stock/AddStock";


function App() {


  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginPage />}> </Route>
            <Route path="/admin/*" element={<AdminLayout />}>
              <Route path="home" element={<Home />}></Route>
              <Route path="dashboard" element={<Dashboard />}></Route>
              <Route path="listBooks" element={<Book />}></Route>
              <Route path="listAuthors" element={<Authors />}></Route>
              <Route path="listPublisher" element={<Publishers />}></Route>
              <Route path="listUsers" element={<Users />}></Route>
              <Route path="addUser" element={<AddUser />}></Route>
              <Route path="addPublisher" element={<AddPublisher />}></Route>
              <Route path="addBook" element={<AddBook />}></Route>
              <Route path="addAuthors" element={<AddAuthor />}></Route>
              <Route path="addSale" element={<AddSale />}></Route>
              <Route path="listSales" element={<ListSales />}></Route>
              <Route path="payment" element={<PaymentPage />}></Route>
              <Route path="addStock" element={<AddStock />}></Route>
            </Route>

          </Routes>
        </AuthProvider>
      </Suspense>
    </>
  )
}

export default App
