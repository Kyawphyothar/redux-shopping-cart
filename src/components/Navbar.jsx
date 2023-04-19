import React, { useEffect, useState } from "react";
import { Input, Badge } from "@mantine/core";
import { BsBagCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { CiShop } from "react-icons/ci";

const Navbar = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProducts(data);
    // console.log(data);
  };
  const { cartItems } = useSelector((state) => state.cart);
  // console.log(cartItems);
  const { wishListItems } = useSelector((state) => state.cart);

  const filterProduct = products.filter((item) =>
    item.title.toLowerCase().includes(search)
  );
  const onSubmitHandler = (e) => {
    e.preventDefault();
    nav("/search", { state: { filterProduct } });
    setSearch("");
  };
  return (
    <div className=" shadow-lg  bg-white nav-bar">
      <div className="p-4 flex justify-between md:justify-around align-middle items-center">
        <Link to={"/"}>
          <h1 className=" font-medium text-xl italic uppercase mr-2">
            Classify
          </h1>
        </Link>
        <div className=" flex gap-2">
          <form action="" className="" onSubmit={onSubmitHandler}>
            <Input
              className=" w-[130px] md:w-[300px]  nav-input"
              styles={(theme) => ({
                input: {
                  "&:focus-within": {
                    borderColor: theme.colors.green[8],
                  },
                },
              })}
              placeholder="Search products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              radius="md"
            />
          </form>
          <Link to={"/products"}>
              <p className="text-4xl  text-emerald-500">
                <CiShop />
              </p>
            </Link>
          <div className="flex items-end mb-1 gap-2">
            <Link to={"wishList"}>
              <div className=" border p-1 rounded-lg text-emerald-500 bg-emerald-50 flex justify-center relative">
                <p className="text-lg">
                  <AiOutlineHeart />
                </p>
                <Badge
                  color="green"
                  variant="filled"
                  className=" absolute bottom-5 left-5 px-2"
                >
                  {wishListItems.length}
                </Badge>
              </div>
            </Link>
            <Link to={"AddToCart"}>
              <div className="relative">
                <BsBagCheckFill className=" text-3xl text-emerald-600 " />
                <Badge
                  color="green"
                  variant="filled"
                  className=" absolute bottom-5 left-5 px-2"
                >
                  {cartItems.length}
                </Badge>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
