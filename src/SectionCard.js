import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SectionCard({ title, subtitle, score, id, setHover }) {
  return (
    <Link to={`/toxicity/${title.toLowerCase()}`}>
      <div
        className="font-sans w-60 hover:bg-gray-800 p-3 rounded-md"
        onMouseEnter={() => setHover(id)}
      >
        <h3
          className="text-md minhbp:text-lg text-white font-medium"
          style={score < 5 ? { color: "#F9E748" } : { color: "#FFF" }}
        >
          {title}
          {score < 5 && (
            <FontAwesomeIcon
              style={{ float: "right", color: "#F9E748" }}
              icon={faWarning}
            />
          )}
        </h3>

        <p className="text-base text-gray-500 font-normal">{subtitle}</p>
      </div>
    </Link>
  );
}
