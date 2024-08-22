import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const ProductList = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const location = useLocation();
  console.log(location);
  console.log(searchParam.get("q"));
  const navigate = useNavigate();
  const backHome = () => {
    console.log("back to home");
    navigate("/");
  };
  return (
    <>
      <div>ProductList</div>
      <button onClick={backHome}>back to home </button>
    </>
  );
};
