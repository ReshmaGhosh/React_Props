import React from "react";
import NavItem from "./NavItem";

export default function NavBar() {
  let student = { name: "Andrea", age: 4 };
  const fruits = ["apple", "banana", "kiwi"];

  return (
    <div>
      <NavItem student={student} fruits={fruits} />
    </div>
  );
}
