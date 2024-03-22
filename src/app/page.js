"use client";
import Disscussion from "@/Components/Disscussion/Disscussion";
import MarketStories from "@/Components/MarketStories/MarketStories";
import SideBar from "@/Components/SideBar/SideBar";
import { useState } from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

const Home = () => {
  // useState Hook For Navbar Show And Hide..
  const [arrow, setArrow] = useState(true);
  // useState Hook For Active Tabs For Disscussion Or Market
  const [showTab, setShowTab] = useState(true);
  return (
    <main className="flex-col lg:flex-row flex">
      {/* This Div For Tab Large Device Hidden Small Device Block */}
      <div
        role="tablist"
        className="p-2 ml-2 border-x-8 flex justify-between items-center border-blue-950 w-full lg:hidden bg-blue-900"
      >
        <button
          onClick={() => setShowTab(!showTab)}
          role="tab"
          className={`tab text-lg rounded-lg text-white ${
            showTab ? "bg-blue-950 border-b-4 border-red-700" : ""
          }`}
        >
          Disscussion Fourm
        </button>
        <button
          onClick={() => setShowTab(!showTab)}
          role="tab"
          className={`tab rounded-lg text-white text-lg ${
            showTab ? "" : "bg-blue-950 border-b-4 border-red-700"
          }`}
        >
          Market Stories
        </button>
      </div>
      {/* This Div For Navbar */}
      <div
        className={`bg-blue-950 z-50 fixed lg:static transition-all ${
          arrow ? "block" : "hidden"
        }
             min-h-screen w-[50%] lg:w-[25%] ease-in-out `}
      >
        <SideBar />
      </div>
      {/* This Div Containig Disscussion And Market Sections */}
      <div className={`ml-5 mt-5 border-t-2 relative w-[100%] flex`}>
        {/* This Is Arror Button User For Sidebar Show And Hide */}
        <button
          onClick={() => setArrow(!arrow)}
          className={`w-6 h-20 z-50 absolute ${
            arrow ? "lg:-left-5 left-[47%] " : "lg:-left-5 -left-5 "
          } top-[50vh] bg-blue-950`}
        >
          {arrow ? (
            <FaCaretLeft className="text-xl text-white" />
          ) : (
            <FaCaretRight className="text-xl text-white" />
          )}
        </button>
        {/* This Div Use For Disscussion Section */}
        <div className={`lg:w-[65%] ${showTab ? "block" : "hidden"} w-[95%]`}>
          <Disscussion />
        </div>
        {/* This Div Use For Market Section */}
        <div
          className={`lg:w-[35%] ${
            showTab ? "hidden" : "block w-[95%]"
          } lg:block `}
        >
          <MarketStories />
        </div>
      </div>
    </main>
  );
};
export default Home;
