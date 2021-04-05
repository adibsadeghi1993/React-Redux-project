import axios from "axios";
import React, { useEffect } from "react";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/ProductActions";

const ProductList = () => {
  const dispatch = useDispatch();

  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui stackable grid ">
      <Product />
    </div>
  );
};

export default ProductList;
