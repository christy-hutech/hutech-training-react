import React from "react";

function Card({ prop }) {
  return (
    <div
      className="
        flex
        justify-center
        text-3xl md:text-7xl 
      md:bg-green-300
        items-center
        drop-shadow-md	
        rounded-md"
    >
      <div  className="flex">
        <img className="opacity-800" src={prop} alt="Italian Trulli" width={300} height/>
        <div className="text-sm cursor-pointer text-gray-500"></div>
      </div>
    </div>
  );
}

export default Card;
