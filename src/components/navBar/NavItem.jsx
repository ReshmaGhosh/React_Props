import React from "react";

export default function NavItem({ student, fruits }) {
  const fruit = fruits.map((fruit) => <li>{fruit}</li>);
  return (
    <div>
      <p>student name : {student.name}</p>
      <p>{fruit}</p>
    </div>
  );
}
