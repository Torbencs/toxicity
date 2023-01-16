import React from "react";
import "./App.css";
import Toxicity from "./Toxicity";
import { Route, Routes } from "react-router-dom";
import SectionPage from "./SectionPage";

function App() {
  return (
    <div className="grid place-items-center h-screen bg-gray-400">
      <div className="flex flex-row  bg-[#141b26]  rounded-lg shadow-md w-max h-3/4">
        <img
          className="object-contain rounded-tl-lg rounded-bl-lg h-full"
          src="images/score.png"
          alt=""
        ></img>

        <Routes>
          <Route path="/" element={<Toxicity />} />
          <Route path="/toxicity/:id" element={<SectionPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
