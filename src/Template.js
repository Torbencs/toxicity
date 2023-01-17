import React from "react";

export default function Template({ children }) {
  return (
    <div className="grid place-items-center h-screen bg-gray-400 ">
      <div className="flex flex-row  bg-[#141b26]  rounded-lg shadow-md w-[580px] h-3/4">
        <img
          className="object-contain rounded-tl-lg rounded-bl-lg h-full"
          src="images/score.png"
          alt=""
        ></img>
        {children}
      </div>
    </div>
  );
}
