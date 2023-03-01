import React from "react";
import Image from "./Image";

export const Card = ({ data, isActive }) => {
  return (
    <div className="flex w-full p-4 justify-center">
      <div
        id="projects"
        className={`grid grid-cols-1 transition-transform duration-300 bg-white rounded-xl basis-[280px] flex-grow ${
          isActive && "scale-105 shadow-sm shadow-slate-200"
        }`}
      >
        <div
          style={{
            backgroundImage: `url(${data.logo})`,
          }}
          className="rounded-xl w-full bg-top-center bg-cover rounded-b-none h-64"
        ></div>
        <div className="p-4">
          <h2 className="font-bold">{data.name}</h2>
          <p className="text-sm mt-3 h-16 max-h-16 overflow-ellipsis">
            {data.description}
          </p>
          <a href={data.link}>
            <button className="bg-blue-500 text-white px-2 py-1 rounded-full mt-3">
              {data.buttonText}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
