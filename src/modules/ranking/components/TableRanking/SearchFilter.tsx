import Image from "next/image";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ISearchFilter {
  title: string;
  onUpdateValue: (value: string) => void;
  reset?: boolean;
}

const SearchFilter = ({ title, onUpdateValue, reset }: ISearchFilter) => {
  const [searchValue, setSearchValue] = useState<string>();

  const onSearchInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
      console.log(event.target.value);
    },
    [],
  );

  useEffect(() => {
    if (reset) {
      setSearchValue("");
    }
  }, [reset]);

  return (
    <div
      className="w-full"
    >
      <p className="mb-2 text-base font-bold leading-[24px] text-bgray-900 dark:text-white">
      </p>
      <div className="relative h-14 w-full">
        <div className="relative flex gap-3 h-full w-full items-center justify-between rounded-lg bg-bgray-100 px-3 dark:bg-[#121212]">
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => {
              searchValue && onUpdateValue(searchValue);
            }}
          >
            <span>
              <svg
                className="stroke-bgray-900 dark:stroke-bgray-50"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="9.78639"
                  cy="9.78602"
                  r="8.23951"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5176 15.9447L18.7479 19.1667"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </motion.button>

          <label htmlFor="search" className="w-full flex">
            <input
              type="text"
              id="search"
              placeholder={title}
              onKeyDown={(e) => { 
                if (e.key === "Enter") 
                  searchValue &&  onUpdateValue(searchValue)
                }} 
              className="search-input w-full border-none bg-bgray-50 bg-none px-0 text-sm tracking-wide text-bgray-600 placeholder:text-sm placeholder:font-semibold focus:outline-none focus:ring-0 dark:bg-darkblack-500 dark:placeholder:text-bgray-500"
              onChange={onSearchInputChange}
            />
          </label>
        </div>
       
      </div>
    </div>
  );
};

export default SearchFilter;
