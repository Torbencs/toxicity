import React from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function SectionPage() {
  const { id } = useParams();
  const [first, ...rest] = id;
  return (
    <div className="p-10 max-w-3xl">
      <Link to={`/`} className="text-gray-300">
        <FontAwesomeIcon
          style={{ color: "#fff", fontSize: "30px" }}
          icon={faLongArrowLeft}
        />
      </Link>
      <h1 className="text-white font-bold text-2xl pt-10 pb-5">
        {first.toUpperCase() + rest.join("")}
      </h1>
      <p className="text-base text-gray-500 font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nulla
        enim. Morbi euismod euismod elit a suscipit. Morbi ex dui, egestas ut
        rhoncus at, dictum vitae nisi. Nulla condimentum, tellus at fermentum
        bibendum, risus lacus mollis justo, in tempor dolor neque et enim.
        Maecenas enim dolor, feugiat eu tristique sit amet, tempor et enim.
        Morbi nec metus posuere, commodo augue ut, aliquet leo.
      </p>
    </div>
  );
}
