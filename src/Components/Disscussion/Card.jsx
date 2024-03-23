/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { FaRegHeart, FaCommentAlt, FaShareAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";

const Card = () => {
  return (
    // This Is The Main Div For Card
    <div className="lg:p-3 p-1 flex gap-1 lg:gap-3 shadow-2xl rounded-md">
      <div className="lg:w-16 lg:h-16 h-12 w-12 overflow-hidden rounded-full">
        {/* This Is Image Componet Comes From Next Js */}
        <Image
          width={100}
          height={100}
          placeholder="blur"
          blurDataURL="/avatar.png"
          src="/avatar.png"
          alt="/avatar.png"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex gap-1 md:gap-3 items-center">
          <h3 className="md:text-xl font-semibold">Lorem Ipsum</h3>
          <div className="flex flex-1 justify-between items-center">
            <p className="bg-blue-500 px-1 md:px-3 py-1 text-white md:font-bold rounded-2xl">
              Sector 2
            </p>
            <p className="text-blue-500 md:font-bold">2 min ago</p>
          </div>
        </div>

        <p>
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center md:gap-2">
            <FaRegHeart /> <p>2K</p>
          </div>
          <div className="flex items-center md:gap-2">
            <FaRegEye /> <p>2K</p>
          </div>
          <div className="flex items-center md:gap-2">
            <FaCommentAlt /> <p>2K Comments</p>
          </div>
          <div className="flex items-center md:gap-2">
            <FaShareAlt /> <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
