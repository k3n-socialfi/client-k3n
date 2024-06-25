import React, { useState } from "react";
import SelectFilter from "./SelectFilter";
import { motion } from "framer-motion";
import { IconReset } from "@/assets/icons";
import {
  chains,
  followersNumber,
  shillScore,
  tagsList,
  tokens,
  typeofKols,
} from "@/data/ranking/filterData";
import SearchFilter from "./SearchFilter";

interface IFilterProps {
  resetQueryParams: () => void;
  updateQueryParams: (key: string, value: any) => void;
}

function Filter({ resetQueryParams, updateQueryParams }: IFilterProps) {
  const [reset, setReset] = useState(false);

  const handleResetFilters = () => {
    resetQueryParams();
    setReset(true);
    setTimeout(() => setReset(false), 0);
  };

  return (
    <div className="filter-content w-full">
      <div className="flex gap-3 items-center">
        <SelectFilter
          placeHolder="Type of KOLs"
          options={typeofKols}
          onUpdateValue={(value) => updateQueryParams("type", value)}
          reset={reset}
        />
        <SelectFilter
          placeHolder="Followers"
          options={followersNumber}
          onUpdateValue={(value) => {
            const param = value.split(",");
            updateQueryParams("follower", {
              minValue: param[0] || 0,
              maxValue: param[1] || 0,
            });
          }}
          reset={reset}
        />
        <SelectFilter
          placeHolder="Tags"
          options={tagsList}
          onUpdateValue={(value) => updateQueryParams("tags", [value])}
          reset={reset}
        />
        <SelectFilter
          placeHolder="Shill Score"
          options={shillScore}
          onUpdateValue={(value) => {
            const param = value.split(",");
            updateQueryParams("shillScore", {
              minValue: param[0] || 0,
              maxValue: param[1] || 0,
            });
          }}
          reset={reset}
        />
        <SelectFilter
          placeHolder="Mentioned Project"
          options={tokens}
          search
          onUpdateValue={(value) => {
            updateQueryParams("mentionedProject", value);
          }}
          reset={reset}
        />
        <SearchFilter 
        title="Search location"
          onUpdateValue={(value) => updateQueryParams("location", value)}
          reset={reset}
        />

        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleResetFilters}
          className="p-2 bg-[#121212] border border-[#FFFFFF22] hover:shadow-sm hover:shadow-white/30 text-white rounded-lg"
        >
          <IconReset />
        </motion.button>
      </div>
    </div>
  );
}

export default Filter;
