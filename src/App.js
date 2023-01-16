import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="grid place-items-center h-screen bg-gray-400">
      <div className="flex flex-row  bg-[#141b26]  rounded-lg shadow-md w-max h-3/4">
        <img
          className="object-contain rounded-tl-lg rounded-bl-lg h-full"
          src="images/side-banner.png"
          alt=""
        ></img>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
