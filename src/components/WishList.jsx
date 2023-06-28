import React from 'react'
import { useSelector } from 'react-redux'
import WishListUI from './WishListUI';
import { Link } from 'react-router-dom';

const WishList = () => {
  const {wishListItems} = useSelector((state)=>(state.cart));
  // console.log(wishListItems);

  if(wishListItems.length === 0) {
    return (
      <div className=" w-[280px] mx-auto mt-40 p-4">
        <div className="flex flex-col gap-3  items-center">
          <h1 className=" text-xl font-medium uppercase text-red-500">
            There's nothing here
          </h1>
          <Link to={"/"}>
          <button className=" bg-emerald-500 hover:bg-emerald-400 text-white px-3 py-1 rounded ">
            Add wishlist
          </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      {
        wishListItems?.map((item)=>{
          return <WishListUI key={item.id} {...item}/>
        })
      }
    </div>
  )
}

export default WishList