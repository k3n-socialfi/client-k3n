import React, { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { IconClock, IconKol, IconStar, Iconview } from "@/assets/icons";
import OffChainReview from "./components/OffChainReview";
import OnChainReview from "./components/OnChainReview";

let tabs = [
  { id: "onchain", label: "Onchain Reviews" },
  { id: "offchain", label: "Offchain Reviews" },
];

const posts = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const ChainReview = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="flex flex-col space-x-1 py-[48px] gap-4">
      <div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-2 py-4 md:px-7`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className=" absolute inset-0 z-10 bg-primary mix-blend-screen"
                style={{ borderRadius: "4px" }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <p
              className={`${
                activeTab === tab.id ? "text-white" : "text-[#7B7B7B]"
              }  text-base md:text-[40px] font-kode`}
            >
              {tab.label}
            </p>
          </button>
        ))}
      </div>
      <div className="">
        {
          activeTab === "onchain" ? (
            <OnChainReview/>
          ) :
          (
            <OffChainReview/>
          )
        }
      </div>
      
      
    </div>
  );
};

export default ChainReview;
