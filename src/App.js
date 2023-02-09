import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AddProduct from './pages/AddProduct';
import AddUser from './pages/AddUser';
import Dashboard from './pages/Dashboard';
import EditProduct from './pages/EditProduct';
import EditUser from './pages/EditUser';
import Products from './pages/Products';
import Users from './pages/Users';
import Contoh from './pages/Contoh';
import Contoh1 from './pages/Contoh1';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/contoh" element={<Contoh />} />
          <Route path="/contoh1" element={<Contoh1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
