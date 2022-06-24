import React from "react";

export const Person = ({ person }) => {
  return (
    <div>
      <h1>

        Hello , {person.Firstname.toUpperCase()} {person.Lastname.toUpperCase()}
      </h1>
    </div>
  );
};

export default Person;
