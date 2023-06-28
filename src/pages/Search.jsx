import React from "react";
import { useLocation } from "react-router-dom";
import SearchChild from "../components/SearchChild";

const Search = () => {
  const location = useLocation();
  // console.log(location);
  const item = location.state.filterProduct;
  // console.log(item);
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-28">
      {item.map((pd) => {
        return <SearchChild key={pd.id} {...pd} />;
      })}
    </div>
  );
};

export default Search;
