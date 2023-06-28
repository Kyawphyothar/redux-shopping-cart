import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { Link } from "react-router-dom";


const AddToCart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
 

  if (cartItems.length === 0) {
    return (
      <div className=" w-[250px] mx-auto mt-40 p-4">
        <div className="flex flex-col gap-3  items-center">
          <h1 className=" text-xl font-medium uppercase text-red-500">
            Your cart is empty!
          </h1>
          <Link to={"/"}>
          <button className=" bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded ">
            Add items
          </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="">
      <div className="mt-28  ">
        {cartItems?.map((item) => {
          return <Cart key={item.id} {...item} />;
        })}
      </div>
      <div className="flex justify-around mt-5">
        <h1 className="">Total</h1>
        <p className="">${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default AddToCart;
