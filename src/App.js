import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { isMobile } from "react-device-detect";

function App() {
  if (isMobile) {
    return <h1>Please view in a browser</h1>;
  } else
    return (
      <div className="grid place-items-center h-screen bg-gray-400 ">
        <div className="flex flex-row  bg-[#141b26]  rounded-lg shadow-md w-[1600px] h-[720px]">
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
