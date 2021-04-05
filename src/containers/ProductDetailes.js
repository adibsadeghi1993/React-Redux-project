import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedProducts, selectedProducts } from "../redux/actions/ProductActions";

const ProductDetailes = (props) => {
  const productId = props.match.params.product;

  const dispatch = useDispatch();
  const detail = useSelector((state) => state.product);
  const productDetailes=detail.product
  const {id,title,price,category,  description,image}=productDetailes

  const fetchProductDetail = () => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        console.log(res.data);
        dispatch(selectedProducts(res.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProductDetail();

    return ()=>{
        dispatch(removeSelectedProducts())
    }
  }, []);

  return (



   <div className="selectedproduct">
        <div class="ui card">
    <div class="image">
      <img src={image} />
    </div>
    <div class="content">
      <a class="header">{title}</a>
      <div class="meta">
        <span class="date">{category}</span>
      </div>
      <div class="description">
        {  description}
      </div>
    </div>
    <div class="extra content">
      {price}
    </div>
  </div>
   </div>
    
  );
};

export default ProductDetailes;
