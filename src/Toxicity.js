import React, { useState } from "react";
import BuildingModel from "./BuildingModel";
import SectionCard from "./SectionCard";

export default function Toxicity(props) {
  const [currentHover, setCurrentHover] = useState(null);
  const [sections] = useState([
    { id: 6, name: "Roof", score: 10 },
    { id: 5, name: "Windows", score: 3 },
    { id: 4, name: "Outer Wall", score: 5 },
    { id: 3, name: "Technical Installations", score: 4 },
    { id: 2, name: "Inner Wall", score: 8 },
    { id: 1, name: "Floor Coverings", score: 10 },
    { id: 0, name: "Foundation", score: 1 },
    { id: 7, name: "External", score: 10 },
    { id: 8, name: "Electrical Installations", score: 7 },
  ]);

  return (
    <>
      <div className="flex flex-col flex-wrap h-full justify-between p-6 py-10 ml-20">
        {sections.slice(0, 5).map(({ id, name, score }, index) => (
          <SectionCard
            key={index}
            id={id}
            title={name}
            score={score}
            subtitle={
              "Et harum quidem rerum facilis est et expedita distinctio."
            }
            setHover={setCurrentHover}
          />
        ))}
      </div>
      <BuildingModel currentHover={currentHover} />
      <div className="flex flex-col flex-wrap h-full justify-between p-4 py-10 ">
        {sections.slice(5).map(({ id, name, score }, index) => (
          <SectionCard
            key={index}
            id={id}
            title={name}
            score={score}
            subtitle={
              "Et harum quidem rerum facilis est et expedita distinctio."
            }
            setHover={setCurrentHover}
          />
        ))}
      </div>
    </>
  );
}
