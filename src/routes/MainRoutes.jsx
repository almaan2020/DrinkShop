import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Shop from "../pages/Shop";
import CartList from "../pages/CartList";
import FavoriteList from "../pages/FavoriteList";
import NotFound from "../pages/NotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/cart" element={<CartList />} />
      <Route path="/favorites" element={<FavoriteList />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/" element={<Navigate replace to="/shop" />} />
      <Route path="*" element={<NotFound message="Page Not Found!" />} />
    </Routes>
  );
};

export default MainRoutes;
