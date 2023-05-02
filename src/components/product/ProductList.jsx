import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ arrey }) {
  return (
    <div>
      ProductList
      <div className="productList">
        {arrey.map((item) => {
          return <ProductItem key={item.id} result={item}></ProductItem>;
        })}
      </div>
    </div>
  );
}
