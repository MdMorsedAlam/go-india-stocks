"use client";
import { useEffect, useState } from "react";
import Card from "./Card";

const Disscussion = () => {
  const [disscussData, setDisscussData] = useState([]);
  useEffect(() => {
    fetch("/disscussion.json")
      .then((response) => response.json())
      .then((data) => setDisscussData(data));
  }, []);
  return (
    <div className="mt-5">
      <span className="capitalize text-4xl text-red-600 rounded-md font-semibold bg-gray-300 p-3 overflow-hidden">
        Disscussion Fourm
      </span>
      <div className="mt-5 flex flex-col gap-5">
        {disscussData.map((data) => (
          <Card key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Disscussion;
