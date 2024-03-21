"use client";
import Disscussion from "@/Components/Disscussion/Disscussion";
import MarketStories from "@/Components/MarketStories/MarketStories";
import SideBar from "@/Components/SideBar/SideBar";
import { useState } from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

const Home = () => {
  const [arrow, setArrow] = useState(false);
  return (
    <main className="w-[100vw] h-[100vh] flex">
      <div
        className={`bg-blue-950 transition-all w-[25%] ease-in-out ${
          arrow ? " hidden" : ""
        } `}
      >
        <SideBar />
      </div>
      <div
        className={` m-5 border-t-2 transition relative flex ${
          arrow ? "w-[100%]" : "w-[75%]"
        }`}
      >
        <button
          onClick={() => setArrow(!arrow)}
          className="w-6 h-20 absolute top-[50vh] -left-5 bg-blue-600 "
        >
          {arrow ? (
            <FaCaretRight className="text-xl text-white" />
          ) : (
            <FaCaretLeft className="text-xl text-white" />
          )}
        </button>

        <div className={` ${arrow ? "w-[75%]" : "w-[65%]"}`}>
          <Disscussion />
        </div>
        <div className="bg-yellow-500 w-[35%]">
          <MarketStories />
        </div>
      </div>
    </main>
  );
};
export default Home;
