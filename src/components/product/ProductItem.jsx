import React from "react";

export default function ProductItem({ result }) {
  console.log(result, "result");
  return (
    <div className="productItem">
      ProductItem
      <div className="title">{result.title}</div>
      <div>{result.price}</div>
      <div>{result.description}</div>
      <img src={result.image} alt={result.title} width="50px" />
    </div>
  );
}
