import React from "react";

const Pills = ({ text }) => {
  return (
    <span
      className={
        text === "Active"
          ? "text-[8px] px-2 py-0.5 rounded-full w-[50px] border  text-center bg-opacity-20 bg-success border-success text-success"
          : text === "Completed" || text === "Open"
          ? "bg-blue-100 text-primary text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
          : text === "On-going"
          ? "bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
          : text === "Locked"
          ? "bg-red-100 text-red-800 text-xs font-medium mr-2 px-2 py-0.3 rounded-full"
          : "text-[8px] px-2 py-0.5 rounded-full w-[50px] border  text-center bg-opacity-20 bg-gray-300 border-gray-600 text-dark"
      }
    >
      {text}
    </span>
  );
};

export default Pills;
