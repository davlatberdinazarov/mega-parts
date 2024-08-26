import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import AppLayout from './layout/AppLayaut';
import MainLayout from './layout/MainLayout';
import NotFound from './components/NotFound';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import MyCart from './pages/MyCart';
import ShockAbsorbesPage from './pages/ShockAbsorbesPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import BlogPage from './pages/BlogPage';
import ProducstPage from './pages/ProducstPage';
import BrakeDiscsPage from './pages/BrakeDiscsPage';
import SparkPlug from './pages/SparkPlug';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<AppLayout />}
        >
          <Route path='/login' element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={<MainLayout />}
          >
            <Route index element={<HomePage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="mycart" element={<MyCart />} />
            <Route path="shock-absorbes" element={<ShockAbsorbesPage />} />
            <Route path="brake-discs" element={<BrakeDiscsPage/>} />
            <Route path="spark-plugs" element={<SparkPlug/>} />
            <Route path="blogs" element={<BlogPage />} />
            <Route path="product/:id" element={<ProductDetailsPage />} />
            <Route path="products/:name" element={<ProducstPage />} />
          </Route>
          <Route path="*" element={<NotFound to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
