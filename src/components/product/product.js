import React from "react";
import "./product.css";

const Product = ({title,image,price}) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h5>{title}</h5> <br />
        <h6>{price}</h6>
      </div>
    </div>
  );
};

export default Product;
