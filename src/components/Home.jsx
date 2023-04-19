import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-18 h-[100vh] flex justify-start items-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-lime-500 via-gray-300 to-green-500 md:bg-none">
      <img
        src="/images/Background.png"
        alt=""
        className="hidden md:block md:w-[100%]  md:h-[100vh] md:relative"
      />
      <div className="md:absolute mt-[77px] p-6   md:p-0 md:bottom-[70px] md:left-[300px]">
        <h1 className=" uppercase text-4xl font-semibold text-white tracking-wider">
          Welcome
        </h1>
        <p className="mt-4 mb-5 w-[300px] md:w-[400px] font-semibold text-white leading-7 tracking-wide text-xl">
          Here, you can find quality products at unbeatable prices. Browse our
          selection of trusted brands, and enjoy a convenient and enjoyable
          shopping experience with fast shipping and easy returns. Thank you for
          choosing our website, and we look forward to serving you!
        </p>
        <Link to={"/products"}>
          <button className=" bg-emerald-600 hover:bg-emerald-500 rounded-[3rem] shadow-lg px-10 py-2 text-white">
            Go Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
