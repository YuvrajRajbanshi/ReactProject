import React from "react";

const NavBar = ({ categories, filterItems }) => {
  const { category } = categories;
  console.log(category);
  return (
    <>
      <div className=" flex justify-center gap-12 ">
        <li
          onClick={() => filterItems(category)}
          className=" list-none  font-semibold transition-1 px-3 rounded-md hover:bg-pink-400 text-xl">
          All
        </li>
        <li
          onClick={() => filterItems(category)}
          className=" list-none  font-semibold transition-1 px-3 rounded-md hover:bg-pink-400 text-xl">
          Breakfast
        </li>
        <li
          onClick={() => filterItems(category)}
          className=" list-none  font-semibold transition-1 px-3 rounded-md hover:bg-pink-400 text-xl">
          Lunch
        </li>
        <li
          onClick={() => filterItems(category)}
          className=" list-none  font-semibold transition-1 px-3 rounded-md hover:bg-pink-400 text-xl">
          Shakes
        </li>
      </div>
    </>
  );
};

export default NavBar;
