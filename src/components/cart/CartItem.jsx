import React from "react";

export default function CartItem({ name, num, addnum }) {
  const result1 = addnum(3, 4);
  const result2 = addnum(3, 5);
  return (
    <div>
      <p>{name}</p>
      <p>{num}</p>
      <p>{result1}</p>
      <p>{result2}</p>
    </div>
  );
}
