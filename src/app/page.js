"use client";
import Disscussion from "@/Components/Disscussion/Disscussion";
import MarketStories from "@/Components/MarketStories/MarketStories";
import SideBar from "@/Components/SideBar/SideBar";
import { useState } from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

const Home = () => {
  const [arrow, setArrow] = useState(true);
  const [showTab, setShowTab] = useState(true);
  return (
    <main className="flex-col lg:flex-row flex">
      <div role="tablist" className="tabs lg:hidden tabs-boxed">
        <button
          onClick={() => setShowTab(!showTab)}
          role="tab"
          className={`tab ${showTab ? "tab-active" : ""}`}
        >
          Tab 1
        </button>
        <button
          onClick={() => setShowTab(!showTab)}
          role="tab"
          className={`tab ${showTab ? "" : "tab-active"}`}
        >
          Tab 2
        </button>
      </div>
      <div
        className={`bg-blue-950 z-50 fixed lg:static transition-all ${
          arrow ? "block" : "hidden"
        }
             min-h-screen w-[50%] lg:w-[25%] ease-in-out `}
      >
        <SideBar />
      </div>

      <div className={`ml-5 mt-5 border-t-2 relative w-[100%] flex`}>
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
        <div className={`lg:w-[65%] ${showTab ? "block" : "hidden"} w-[95%]`}>
          <Disscussion />
        </div>
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
