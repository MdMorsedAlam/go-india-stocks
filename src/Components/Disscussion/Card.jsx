/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { FaRegHeart, FaCommentAlt, FaShareAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="p-3 flex gap-3 shadow-2xl rounded-md">
      <div className="w-16 h-16 overflow-hidden rounded-full">
        <img
          className="w-full overflow-hidden h-full"
          src={item.img}
          alt={item.img}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="bg-blue-500 px-3 py-1 text-white font-bold rounded-2xl">
              {item.sector}
            </p>
          </div>
          <p className="text-blue-500 font-bold">2 min ago</p>
        </div>
        <p>{item.des}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaRegHeart /> <p>{item.like}K</p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegEye /> <p>2K</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCommentAlt /> <p>{item.comments}K Comments</p>
          </div>
          <div className="flex items-center gap-2">
            <FaShareAlt /> <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
