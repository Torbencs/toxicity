import React from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./grid.css";
//HighCharts
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function SectionPage() {
  const { id } = useParams();
  const [first, ...rest] = id;

  const options = {
    chart: {
      type: "spline",
      backgroundColor: "#fff",
    },
    title: {
      text: first.toUpperCase() + rest.join(""),
    },

    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
    ],
  };

  const options2 = {
    chart: {
      type: "column",
      backgroundColor: "#fff",
    },
    title: {
      text: "Benchmarks",
    },

    series: [
      {
        name: "Benchmarks",
        data: [35, 30, 24, 43, 40],
      },
    ],
  };

  const options3 = {
    chart: {
      type: "column",
      backgroundColor: "#fff",
    },
    title: {
      text: "Toxic material per element",
    },

    series: [
      {
        name: "Bricks",
        data: [6],
      },
      {
        name: "Wood",
        data: [8],
      },
      {
        name: "Windows",
        data: [3],
      },
      {
        name: "Doors",
        data: [9],
      },
      {
        name: "Concrete",
        data: [10],
      },
      {
        name: "Technical",
        data: [10],
      },
    ],
  };
  return (
    <div className="p-10">
      <Link to={`/`} className="text-gray-300">
        <FontAwesomeIcon
          style={{ color: "#fff", fontSize: "30px", marginBottom: "20px" }}
          icon={faLongArrowLeft}
        />
      </Link>

      <div className="flex flex-row max-h-[600px]">
        <div className="mr-4 bg-slate-600 p-3 rounded-lg">
          <HighchartsReact
            containerProps={{ style: { width: "700px", height: "100%" } }}
            highcharts={Highcharts}
            options={options}
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-4 bg-slate-600 p-3 rounded-lg">
            <HighchartsReact
              containerProps={{ style: { width: "300px", height: "250px" } }}
              highcharts={Highcharts}
              options={options2}
            />
          </div>

          <div className="bg-slate-600 p-3 rounded-lg">
            <HighchartsReact
              containerProps={{ style: { width: "300px", height: "250px" } }}
              highcharts={Highcharts}
              options={options3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
