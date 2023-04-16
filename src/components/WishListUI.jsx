import React from 'react'
import { addToCart, removeFromWishList } from '../feature/services/CartSlice';
import { Link } from 'react-router-dom';
import { Badge, Rating } from '@mantine/core';
import { useDispatch } from 'react-redux';
import {BsTrash} from "react-icons/bs"

const WishListUI = (props) => {
  const { id,image,description,category,title,price} = props;
  const dispatch = useDispatch();

  const productRating = parseFloat(props.rating?.rate);

  return (
    <div>
       <div className="mt-20 flex flex-col gap-3 justify-center items-center md:flex-row  md:gap-9 p-3">
        <img
          src={image}
          alt=""
          className=" w-[150px] md:w-[150px]"
        />
        <div className="mt-5 w-[350px] md:w-[450px]">
          <h1 className=" text-lg uppercase font-semibold leading-5 mb-1">
            {title}
          </h1>
          <div className=" flex justify-between align-middle items-center mt-3 mb-3">
            <Rating value={productRating} fractions={2} readOnly />
            <Badge radius="lg" color="teal" variant="dot" className="">
              {category}
            </Badge>
          </div>
          <span className=" text-sm ">
            $ <span className=" text-lg font-medium">{price}</span>
          </span>
          <p className=" font-light leading-6 mt-3">
            {description}
          </p>
          <div className="mt-5 flex justify-between">
            <button className=" bg-emerald-600 hover:bg-emerald-500 px-2 py-1 text-sm rounded text-white "
            onClick={()=> dispatch(addToCart(props))}
            >
              Add to your Cart
            </button>
            <p className="text-red-500 text-2xl cursor-pointer"
            onClick={()=> dispatch(removeFromWishList(props))}
            >
              <BsTrash/>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WishListUI