import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import AddToCart from "./components/AddToCart";
import Search from "./components/Search";
import RouteGuard from "./components/RouteGuard";
import Detail from "./components/Detail";
import Home from "./components/Home";
import WishList from "./components/WishList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="AddToCart" element={<AddToCart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="/search"
          element={
            <RouteGuard>
              <Search />
            </RouteGuard>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
