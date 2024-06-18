import React, { useState } from "react";
import { motion } from "framer-motion";

// Import Swiper styles
import OffChainReview from "./components/OffChainReview";
import OnChainReview from "./components/OnChainReview";

let tabs = [
  { id: "onchain", label: "Onchain Reviews" },
  { id: "offchain", label: "Offchain Reviews" },
];

const ChainReview = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="flex flex-col space-x-1 py-[48px] gap-4">
      <div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 py-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-primary mix-blend-screen rounded"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <p
              className={`${
                activeTab === tab.id ? "text-white" : "text-[#7B7B7B]"
              }  text-base md:text-lg`}
            >
              {tab.label}
            </p>
          </button>
        ))}
      </div>
      <div className="">
        {activeTab === "onchain" ? <OnChainReview /> : <OffChainReview />}
      </div>
    </div>
  );
};

export default ChainReview;
