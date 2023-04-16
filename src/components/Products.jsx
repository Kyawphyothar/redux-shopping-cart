import React, { useEffect, useState } from "react";
import Product from "./Product";
import Loading from "./Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProducts(data);
    // console.log(data);
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className=" flex flex-wrap gap-10 justify-center mt-28">
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Products;
