import React from "react";
import { BsFillPersonFill, BsChatLeftTextFill } from "react-icons/bs";
import { FaCommentDollar } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
const SideBar = () => {
  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <div className="flex gap-2">
          <BsFillPersonFill className="text-3xl text-white" />
          <p className="text-xl font-bold text-white">Hello,User</p>
        </div>
        <div className="indicator">
          <IoIosNotifications className="text-3xl text-white" />
          <span className="badge badge-xs badge-danger indicator-item"></span>
        </div>
      </div>
      <hr className="" />
      <div className="lg:p-4 p-1 text-white text-lg">
        <ul className="flex flex-col">
          <li className="flex items-center hover:bg-blue-900 p-2 rounded-lg gap-2">
            <BsChatLeftTextFill className="text-lg lg:text-2xl" />
            <a href="#">Disscussion Fourm</a>
          </li>
          <li className="flex items-center hover:bg-blue-900 p-2 rounded-lg gap-2">
            <FaCommentDollar className="text-lg lg:text-2xl" />

            <a href="#">Market Stories</a>
          </li>
          <li className="hover:bg-blue-900 p-2 rounded-lg ml-8">
            <a href="#">Sentiment</a>
          </li>
          <li className="hover:bg-blue-900 p-2 rounded-lg ml-8">
            <a href="#">Market</a>
          </li>
          <li className="hover:bg-blue-900 p-2 rounded-lg ml-8">
            <a href="#">Sector</a>
          </li>
          <li className="hover:bg-blue-900 p-2 rounded-lg ml-8">
            <a href="#">Watchlits</a>
          </li>
          <li className="hover:bg-blue-900 p-2 rounded-lg ml-8">
            <a href="#">Events</a>
          </li>
          <li className="hover:bg-blue-900 p-2 rounded-lg ml-8">
            <a href="#">News/Interview</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
