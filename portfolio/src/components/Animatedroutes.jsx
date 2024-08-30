import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Inventory from "../pages/4yb";
import { AnimatePresence } from 'framer-motion';
import DemonSlayer from '../pages/DemonSlayer';
import  Restaurant  from '../pages/Restaurant';
import Chessai from '../pages/Chessai';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/prof_portfolio/home" element={<Home />} />
        <Route path="/prof_portfolio/about" element={<About />} />
        <Route path="/prof_portfolio/contact" element={<Contact />} />
        <Route path="/prof_portfolio/4yourinventory" element={<Inventory />} />
        <Route path="/prof_portfolio/demonslayer" element={<DemonSlayer />} />
        <Route path="/prof_portfolio/restaurant" element={<Restaurant />} />
        <Route path="/prof_portfolio/chess" element={<Chessai />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
