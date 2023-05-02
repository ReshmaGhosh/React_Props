import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ productList }) {
  const productListProp = "sending some prop";
  const productListArrey = productList.map((item) => (
    <div className="productArrey">
      <p> ID: {item.id}</p>
      <p>Name: {item.title}</p>
      <p>Price: {item.price}</p>
      <p>Description: {item.description}</p>
      <p>Category: {item.category}</p>
      <img className="product-img" src={item.image} alt="image" />
    </div>
  ));
  return (
    <div>
      <div>ProductItem productListProp = {productListProp}</div>
      <h1>ProductList</h1>
      <div className="productArrey">{productListArrey}</div>
    </div>
  );
}
