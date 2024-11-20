import { imgPath } from "@/components/helpers/functions-general";
import React from "react";

const SideNav = ({setCategory}) => {
  const menus = [
    {
      img: "nav-value-meal.webp",
      title: "Value Meal",
    },
    {
      img: "nav-chickenjoy.jpg",
      title: "Chickenjoy",
    },
    {
      img: "nav-burger-steak.webp",
      title: "Burger Steak",
    },
    {
      img: "nav-spaghetti.webp",
      title: "Spaghetti",
    },
    {
      img: "nav-palabok.webp",
      title: "Palabok",
    },
    {
      img: "nav-desserts.webp",
      title: "Desserts",
    },

    {
      img: "nav-burger.webp",
      title: "Burger",
    },
    {
      img: "nav-sides.webp",
      title: "Sides",
    },
  ];

  const handleGetCategory = (category) => {
      setCategory(category)
  }
  return (
    <>
      <h5 className="mb-0 text-center pt-2 text-sm">Menu</h5>

      <ul>
        {menus.map((item, key) => (
          <li className="mb-3" key={key}>
            <button onClick={() => handleGetCategory(item.title)}>
              <img src={`${imgPath}/${item.img}`} alt="" />
              <small className="text-xs">{item.title}</small>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideNav;
