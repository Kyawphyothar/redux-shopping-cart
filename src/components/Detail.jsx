import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Rating, Badge } from "@mantine/core";
import { useDispatch } from "react-redux";
import { addToCart } from "../feature/services/CartSlice";
import Loading from "./Loading";

const Detail = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const dispatch = useDispatch();
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    fetchSingleProduct();
  }, []);

  const fetchSingleProduct = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await api.json();
    setSingleProduct(data);
    setIsLoading(false)
    // console.log(data);
  };
  if (isLoading) {
    return <Loading/>
}
  const productRating = parseFloat(singleProduct.rating?.rate);
  return (
    <div>
      <div className="mt-20 flex flex-col gap-3 justify-center items-center md:flex-row  md:gap-9 p-3">
        <img
          src={singleProduct.image}
          alt=""
          className=" w-[150px] md:w-[150px]"
        />
        <div className="mt-5 w-[350px] md:w-[450px]">
          <h1 className=" text-lg uppercase font-semibold leading-5 mb-1">
            {singleProduct.title}
          </h1>
          <div className=" flex justify-between align-middle items-center mt-3 mb-3">
            <Rating value={productRating} fractions={2} readOnly />
            <Badge radius="lg" color="teal" variant="dot" className="">
              {singleProduct.category}
            </Badge>
          </div>
          <span className=" text-sm ">
            ${" "}
            <span className=" text-lg font-medium">{singleProduct.price}</span>
          </span>
          <p className=" font-light leading-6 mt-3">
            {singleProduct.description}
          </p>
          <div className="mt-5 flex justify-between">
            <button
              className=" bg-emerald-600 hover:bg-emerald-500 px-2 py-1 text-sm rounded text-white "
              onClick={() => dispatch(addToCart(singleProduct))}
            >
              Add to your Cart
            </button>
            <Link to={"/products"}>
              <button className=" bg-emerald-400   hover:bg-emerald-500 px-2 py-1 text-sm  rounded text-white  ">
                Back to Shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
