import React from "react";

export default function BuildingModel({ currentHover }) {
  //Number of image layers in the building model
  const layers = 7;
  //Css style to apply to layers for highlighting and fading
  const hide = {
    opacity: 0.3,
    transition: "opacity 0.5s",
  };
  const show = {
    opacity: 1,
    transform: "scale(1.08)",
    transition: "0.3s",
  };
  return (
    <div className="w-72 h-[190px] mt-auto relative">
      {[...Array(layers).keys()].map((element, index) => (
        <img
          key={index}
          className="w-60 absolute"
          src={`images/${element}.png`}
          //   style={{ top: `-${index * 65}px`, ...show }}
          style={
            element === currentHover
              ? { top: `-${index * 65}px`, ...show }
              : { top: `-${index * 65}px`, ...hide }
          }
          alt=""
        ></img>
      ))}
    </div>
  );
}
