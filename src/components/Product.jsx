import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, addToWishList } from "../feature/services/CartSlice";
import { Tooltip } from "@mantine/core";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
const Product = (props) => {
  const { id, image, title, price } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <div className=" flex flex-col items-center p-7 shadow rounded  border">
        <img
          src={image}
          alt=""
          className=" w-[250px] h-[280px] p-3 md:p-7 md:w-[200px] md:object-cover"
        />
        <div className=" flex flex-col gap-3 mt-5">
          <Link to={`/detail/${id}`}>
            <Tooltip
              label="View Detail"
              color="green"
              withArrow
              arrowPosition="center"
            >
              <h1 className=" font-semibold">
                {title.substring(0, 25) + "..."}
              </h1>
            </Tooltip>
          </Link>
          <p className=" font-medium">$ {price}</p>
          <div className="flex items-center gap-3">
            <button
              className=" bg-emerald-500 border hover:bg-emerald-600 text-white rounded px-14 py-1"
              onClick={() => dispatch(addToCart(props))}
            >
              <span className="inline-block mr-1 text-sm">
                <BsCart2 />
              </span>
              <span className="">Add to Cart</span>
            </button>
            <p
              className=" text-2xl border px-1 rounded text-emerald-500 py-1 bg-emerald-50 "
              onClick={() => dispatch(addToWishList(props))}
            >
              <AiOutlineHeart />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
