import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Products from '../pages/products/Products';
import Product from '../pages/products/Product';
import About from '../pages/about/About';
import NotFound from '../components/notFound/NotFound';

const RoutesPath: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Product/:slug" element={<Product />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutesPath;
