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
        <IoIosNotifications className="text-3xl text-white" />
      </div>
      <hr className="" />
      <div className="p-4 text-white text-lg">
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <BsChatLeftTextFill className="text-2xl" />
            Disscussion Fourm
          </li>
          <li className="flex items-center gap-3">
            <FaCommentDollar className="text-2xl" />
            Market Stories
          </li>
          <li>Sentiment</li>
          <li>Market</li>
          <li>Sector</li>
          <li>Watchlits</li>
          <li>Events</li>
          <li>News/Interview</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
