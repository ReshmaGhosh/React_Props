import React from "react";

export default function NavItem({ student, fruits }) {
  return (
    <div>
      <p>student name : {student.name}</p>
      <p>student age : {student.age}</p>
      <p>{fruits}</p>
      <div>
        {fruits.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
}
