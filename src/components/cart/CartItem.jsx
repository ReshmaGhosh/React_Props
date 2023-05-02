import React from "react";

export default function CartItem({ name, num, addnum }) {
  const result = addnum(3, 4);
  return (
    <div>
      <p>{name}</p>
      <p>{num}</p>
      <p>{result}</p>
    </div>
  );
}
