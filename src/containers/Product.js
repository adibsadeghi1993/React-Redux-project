import React from "react";
import {useSelector,useDispatch} from "react-redux"
const Product = () => {
    const state = useSelector(state => state.allProducts.products)
    const {id,title}=state[0]
  return (
   
     
      <div className="col s12 m3">
        <div className="card">
          <div className="card-image">
            <img />
            <span className="card-title" style={{color:"black"}}>{title}</span>
          </div>
          <div className="card-content">
            <p>I am a very simple card.{id}</p>
          </div>
          <div className="card-action">
          <a href="#">This is a link</a>
        </div>
        </div>
      </div>
   


  );
};

export default Product;
