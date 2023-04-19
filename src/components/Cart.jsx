import React from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import {
  addItemQty,
  removeFromCart,
  removeItemQty,
} from "../feature/services/CartSlice";
import {BsTrash } from "react-icons/bs";

const Cart = (props) => {
  const { id, image, title, price, quantity } = props;
  const dispatch = useDispatch();

  const oneItemPrice = price * quantity;
  return (
    <div>
      <div className="mt-5 flex flex-col items-center gap-3 md:flex-row md:items-stretch  md:gap-20 justify-center">
        <img src={image} alt="" className=" w-[150px] " />
        <div className=" mt-5 flex flex-col gap-3 w-[240px] md:w-[200px]">
          <h1 className=" font-medium  md:text-lg  leading-4 md:leading-6">
            {title}
          </h1>
          <p className="select-none">
            <span className="text-sm">$ </span>
            <span className=" font-medium ">{oneItemPrice.toFixed(2)}</span>
          </p>
          <div className=" flex items-center gap-3 shadow-lg  w-20 justify-center rounded px-2 py-1">
            <p className="" onClick={() => dispatch(addItemQty(props))}>
              <HiOutlinePlus className=" cursor-pointer text-lg" />
            </p>
            <span className=" font-medium select-none"> {quantity}</span>
            <p
              className=""
              onClick={() =>
                quantity > 1 ? dispatch(removeItemQty(props)) : null
              }
            >
              <HiOutlineMinus className=" cursor-pointer text-lg" />
            </p>
          </div>
          <p
            className="mt-5 text-red-500 text-2xl cursor-pointer select-none self-end"
            onClick={() => dispatch(removeFromCart(props))}
          >
            <BsTrash/>
          </p>
        </div>
      </div>
      <hr className=" mt-5  w-[70%] mx-auto " />
    </div>
  );
};

export default Cart;
