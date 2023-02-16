import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard.jsx';
import Product from './Pages/Product.jsx';
import Login from './Login/Login.jsx';
import AddProduct from './Pages/AddProduct.jsx';
import EditProduct from './Pages/EditProduct.jsx';
// import AddProduct from './pages/AddProduct';
// import AddUser from './pages/AddUser';
// import Dashboard from './pages/Dashboard';
// import EditProduct from './pages/EditProduct';
// import EditUser from './pages/EditUser';
// import Products from './pages/Products';
// import Users from './pages/Users';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          {/* <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
