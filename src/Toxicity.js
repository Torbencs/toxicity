import React, { useState } from "react";
import BuildingModel from "./BuildingModel";
import SectionCard from "./SectionCard";

export default function Toxicity(props) {
  const [currentHover, setCurrentHover] = useState(null);
  const [sections] = useState([
    { id: 0, name: "Roof", score: 10 },
    { id: 1, name: "Windows", score: 3 },
    { id: 2, name: "Electrical Installations", score: 7 },
    { id: 3, name: "Technical Installations", score: 4 },
    { id: 4, name: "Outer Wall", score: 5 },
    { id: 5, name: "Inner Wall", score: 8 },
    { id: 6, name: "Foundation", score: 1 },
    { id: 7, name: "External", score: 10 },
    { id: 8, name: "Floor Coverings", score: 10 },
  ]);

  return (
    <>
      <div className="flex flex-col flex-wrap h-full justify-between p-4 py-10 ">
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
